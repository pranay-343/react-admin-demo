import React, {Component} from 'react';
import {Link} from "react-router";

export default class Sidebar extends Component {
    render() {
        return(
            
            <nav className="pcoded-navbar">
                <div className="navbar-wrapper">
                    <div className="navbar-brand header-logo">
                        <a href="index.html" className="b-brand">
                            <div className="b-bg">
                                <i className="feather icon-trending-up"></i>
                            </div>
                            <span className="b-title">Admin Panel</span>
                        </a>
                        <a className="mobile-menu" id="mobile-collapse" href="javascript:void(0)"><span></span></a>
                    </div>
                    <div className="navbar-content scroll-div">
                        <ul className="nav pcoded-inner-navbar">
                            <li className="nav-item pcoded-menu-caption">
                                <label>Navigation</label>
                            </li>
                            <li data-username="dashboard Default Ecommerce CRM Analytics Crypto Project" className="nav-item active">
                                <Link to={"/"} className="nav-link "><span className="pcoded-micon"><i className="feather icon-home"></i></span><span className="pcoded-mtext">Dashboard</span></Link>
                            </li>

                            <li className="nav-item pcoded-menu-caption">
                                <label>User Data</label>
                            </li>
                            <li data-username="form elements advance componant validation masking wizard picker select" className="nav-item">
                                <Link to={"/user-details"} className="nav-link "><span className="pcoded-micon"><i className="feather icon-file-text"></i></span><span className="pcoded-mtext">User Details</span></Link>
                            </li>
                            <li data-username="Table bootstrap datatable footable" className="nav-item">
                                <Link to ={"/user-list"}  className="nav-link "><span className="pcoded-micon"><i className="feather icon-server"></i></span><span className="pcoded-mtext">User List</span></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
           
    )
    }
    }