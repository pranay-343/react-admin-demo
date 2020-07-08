import React, {Component} from "react";

export default class Userfetch_old extends Component {
    state = {
        offset: 0,
        perPage: 5,
        currentPage: 0,
        loading : true,
        person : []
    };


    async componentDidMount() {
        const url = "https://api.randomuser.me/?results=100";
        const response = await fetch(url);
        const data = await response.json();
        const slice = data.results.slice(this.state.offset, this.state.offset + this.state.perPage)
        this.setState({
                loading : false,
                person : slice,
                pageCount: Math.ceil(data.results / this.state.perPage),
            }
        )

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

    render() {
        if (this.state.loading){
            return(<div>loading...</div>)
        }
        else{
            return(
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
                                    {this.state.person.map((person,i) =>(

                                            <tr>
                                                <th scope="row">{i+1}</th>
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
                                    ))
                                    }

                                    </tbody>
                                </table>
                            </div>
                            <nav aria-label="...">
                                <ul className="pagination">
                                    <li className="page-item disabled"><span className="page-link">Previous</span></li>
                                    <li className="page-item"><a className="page-link" href="#!">1</a></li>
                                    <li className="page-item active"><span className="page-link">2<span
                                        className="sr-only">(current)</span></span>
                                    </li>
                                    <li className="page-item"><a className="page-link" href="#!">3</a></li>
                                    <li className="page-item"><a className="page-link" href="#!">Next</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            )
        }

    }

}


