import React, {Component} from 'react'
import axios from 'axios'

export default class Userfetchhome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            offset: 0,
            perPage: 5,
            currentPage: 0,
            loading : true,
            person : []
        };

    }
    receivedData() {
        axios
            .get(`https://api.randomuser.me/?results=5`)
            .then(res => {
                const data = res.data;
                const slice = data.results.slice(this.state.offset, this.state.offset + this.state.perPage)
                const userdata = slice.map((person) => <React.Fragment>

                        <tr className="unread">
                            <td><img className="rounded-circle" style={{width:"40px"}} src={person.picture.thumbnail} alt="activity-user" /></td>
                            <td>
                                <h6 className="mb-1">{person.name.first} {person.name.last}</h6>
                                <p className="m-0">Lorem Ipsum is simply…</p>
                            </td>
                            <td>
                                <h6 className="text-muted"><i className="fas fa-circle text-c-green f-10 m-r-15"></i>{person.registered.date.split('T')[0]}</h6>
                            </td>
                            <td><a href="#!" className="label theme-bg2 text-white f-12">Reject</a><a href="#!" className="label theme-bg text-white f-12">Approve</a></td>
                        </tr>

                </React.Fragment>)

                this.setState({
                    pageCount: Math.ceil(data.results.length / this.state.perPage),
                    userdata
                })
            });

    };

    componentDidMount() {
        this.receivedData()
    }
    render() {
        return (
                        <table className="table table-hover">
                        <tbody>
                        {this.state.userdata}
                        </tbody>
                        </table>

        )
    }
}
