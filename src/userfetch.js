import React, {Component} from 'react'
import axios from 'axios'
import ReactPaginate from 'react-paginate';


export default class Userfetch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            offset: 0,
            perPage: 5,
            currentPage: 0,
            loading : true,
            person : []
        };
        this.handlePageClick = this
            .handlePageClick
            .bind(this);
    }
    receivedData() {
        axios
            .get(`https://api.randomuser.me/?results=50`)
            .then(res => {
                const data = res.data;
                const slice = data.results.slice(this.state.offset, this.state.offset + this.state.perPage)
                const userdata = slice.map((person,i) => <React.Fragment>
                    <tr>
                        <th scope="row">{i+this.state.offset+1}</th>
                        <td><img className="rounded-circle" style={{width:"40px"}}
                                 src={person.picture.thumbnail}
                                 alt="activity-user" /></td>
                        <td>{person.name.first} {person.name.last}</td>
                        <td>{person.registered.date.split('T')[0]}</td>
                        <td>$250.00</td>
                        <td>{person.phone}</td>
                        <td>{person.email}</td>
                        <td>{person.location.country}</td>
                        <td>
                            <button type="button"
                                    className="btn btn-success">Verified
                            </button>
                        </td>
                        <td>
                            <button type="button" className="btn btn-primary"
                                    title="View Details" data-toggle="tooltip">View
                                Details
                            </button>
                        </td>
                    </tr>
                </React.Fragment>)

                this.setState({
                    pageCount: Math.ceil(data.results.length / this.state.perPage),
                    userdata
                })
            });
    }
    handlePageClick = (e) => {
        const selectedPage = e.selected;
        const offset = selectedPage * this.state.perPage;

        this.setState({
            currentPage: selectedPage,
            offset: offset
        }, () => {
            this.receivedData()
        });

    };

    componentDidMount() {
        this.receivedData()
    }
    render() {
        return (
            <div className="col-xl-12">
                <div className="card">
                    <div className="card-header">
                        <h5>User List</h5>
                    </div>
                    <div className="card-block table-border-style">
                        <div className="table-responsive">
                            <table className="table table-striped">
                                <thead>
                                <tr>
                                    <th>#</th>
                                    <th></th>
                                    <th>Name</th>
                                    <th>Joined At</th>
                                    <th>Current Balance</th>
                                    <th>Contact</th>
                                    <th>Email</th>
                                    <th>Country</th>
                                    <th>Account Status</th>
                                    <th>Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                {this.state.userdata}
                                </tbody>
                            </table>
                        </div>

                            <ReactPaginate
                                previousLabel={"Previous"}
                                nextLabel={"Next"}
                                breakLabel={"..."}
                                breakClassName={"break-me"}
                                pageClassName={"page-item"}
                                pageCount={this.state.pageCount}
                                marginPagesDisplayed={2}
                                pageRangeDisplayed={5}
                                onPageChange={this.handlePageClick}
                                containerClassName={"pagination"}
                                activeClassName={"page-item active"}
                                activeLinkClassName={"page-link"}
                                nextClassName={"page-link"}
                                previousLinkClassName={"page-link"}
                                pageLinkClassName={"page-link"}
                                initialPage={0}
                                disableInitialCallback={true}

                            />

                    </div>
                </div>

            </div>


        )
    }
}
