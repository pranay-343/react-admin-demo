import React from "react";

const UserDetails = () =>{
    return (
        <div className="pcoded-main-container">
            <div className="pcoded-wrapper">
                <div className="pcoded-content">
                    <div className="pcoded-inner-content">

                        <div className="page-header">
                            <div className="page-block">
                                <div className="row align-items-center">
                                    <div className="col-md-12">
                                        <div className="page-header-title">
                                            <h5 className="m-b-10">Form Elements</h5>
                                        </div>
                                        <ul className="breadcrumb">
                                            <li className="breadcrumb-item"><a href="index.html"><i
                                                className="feather icon-home"></i></a></li>
                                            <li className="breadcrumb-item"><a href="javascript:">Form Componants</a>
                                            </li>
                                            <li className="breadcrumb-item"><a href="javascript:">Form Elements</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="main-body">
                            <div className="page-wrapper">

                                <div className="row">
                                    <div className="col-sm-12">
                                        <div className="card">
                                            <div className="card-header">
                                                <h5>User Details</h5>
                                            </div>
                                            <div className="card-body">
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <form>
                                                            <div className="form-group">
                                                                <label>Name</label>
                                                                <input type="text" className="form-control"
                                                                       placeholder="Mark Simpson" />
                                                            </div>
                                                            <div className="form-group">
                                                                <label>Joining Date</label>
                                                                <input type="text" className="form-control"
                                                                       placeholder="04-20-2020" />
                                                            </div>
                                                            <div className="form-group">
                                                                <label>Wallet ID</label>
                                                                <input type="text" className="form-control"
                                                                       placeholder="1113-2234" />
                                                            </div>
                                                            <div className="form-group">
                                                                <label>Current Balance</label>
                                                                <input type="text" className="form-control"
                                                                       placeholder="$250.00" readOnly />
                                                            </div>
                                                            <div className="form-group">
                                                                <label>Contact Number</label>
                                                                <input type="text" className="form-control"
                                                                       placeholder="123456789" />
                                                            </div>
                                                            <div className="form-group">
                                                                <label>DOB</label>
                                                                <input type="text" className="form-control"
                                                                       placeholder="Jan-10-2017" />
                                                            </div>
                                                            <button type="submit" className="btn btn-primary">Save
                                                            </button>
                                                        </form>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <form>
                                                            <div className="form-group">
                                                                <label>Email</label>
                                                                <input type="email" className="form-control"
                                                                       placeholder="mark@bankey.com" />
                                                            </div>
                                                            <div className="form-group">
                                                                <label>Country</label>
                                                                <input type="text" className="form-control"
                                                                       placeholder="US" />
                                                            </div>
                                                            <div className="form-group">
                                                                <label>Gender</label>
                                                                <input type="text" className="form-control"
                                                                       placeholder="Male" />
                                                            </div>
                                                            <div className="form-group">
                                                                <label>Location</label>
                                                                <input type="text" className="form-control"
                                                                       placeholder="Text" />
                                                            </div>
                                                            <div className="form-group">
                                                                <label>Account Status </label>
                                                                <button type="button"
                                                                        className="btn btn-success">Verified
                                                                </button>
                                                            </div>
                                                            <div className="form-group">
                                                                <label>Upload Document</label>
                                                                <input type="file" id="myFile" name="filename" multiple />
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-sm-12">
                                        <div className="card">
                                            <div className="card-header">
                                                <h5>Uploaded Documents</h5>
                                            </div>
                                            <div className="card-body">
                                                <div className="card-block table-border-style">
                                                    <div className="table-responsive">
                                                        <table className="table table-striped">
                                                            <thead>
                                                            <tr>
                                                                <th>#</th>
                                                                <th>Name</th>
                                                                <th>Date</th>
                                                                <th>Action</th>
                                                            </tr>
                                                            </thead>
                                                            <tbody>
                                                            <tr>
                                                                <th scope="row">1</th>
                                                                <td>Photo</td>
                                                                <td>04-20-2020</td>
                                                                <td>
                                                                    <button type="button" className="btn btn-primary"
                                                                            title="View Document"
                                                                            data-toggle="tooltip">View
                                                                    </button>
                                                                </td>
                                                            </tr>

                                                            <tr>
                                                                <th scope="row">1</th>
                                                                <td>Photo</td>
                                                                <td>04-20-2020</td>
                                                                <td>
                                                                    <button type="button" className="btn btn-primary"
                                                                            title="View Document"
                                                                            data-toggle="tooltip">View
                                                                    </button>
                                                                </td>
                                                            </tr>

                                                            <tr>
                                                                <th scope="row">1</th>
                                                                <td>Photo</td>
                                                                <td>04-20-2020</td>
                                                                <td>
                                                                    <button type="button" className="btn btn-primary"
                                                                            title="View Document"
                                                                            data-toggle="tooltip">View
                                                                    </button>
                                                                </td>
                                                            </tr>

                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className="row">
                                    <div className="col-sm-12">
                                        <div className="card">
                                            <div className="card-header">
                                                <h5>Transactions</h5>
                                            </div>
                                            <div className="card-body">
                                                <div className="card-block table-border-style">
                                                    <div className="table-responsive">
                                                        <table className="table table-striped">
                                                            <thead>
                                                            <tr>
                                                                <th>#</th>
                                                                <th>Date</th>
                                                                <th>Transaction ID</th>
                                                                <th>Amount</th>
                                                                <th>Sender</th>
                                                                <th>Current Balance</th>
                                                                <th>Country</th>

                                                            </tr>
                                                            </thead>
                                                            <tbody>
                                                            <tr>
                                                                <th scope="row">1</th>
                                                                <td>04-20-2020</td>
                                                                <td>XXXX-YYY-1113-2234</td>
                                                                <td>$250.00</td>
                                                                <td>James Ken</td>
                                                                <td>$250.00</td>
                                                                <td>US</td>
                                                            </tr>

                                                            <tr>
                                                                <th scope="row">1</th>
                                                                <td>04-20-2020</td>
                                                                <td>XXXX-YYY-1113-2234</td>
                                                                <td>$250.00</td>
                                                                <td>James Ken</td>
                                                                <td>$250.00</td>
                                                                <td>US</td>
                                                            </tr>

                                                            <tr>
                                                                <th scope="row">1</th>
                                                                <td>04-20-2020</td>
                                                                <td>XXXX-YYY-1113-2234</td>
                                                                <td>$250.00</td>
                                                                <td>James Ken</td>
                                                                <td>$250.00</td>
                                                                <td>US</td>
                                                            </tr>

                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

};

export default UserDetails;