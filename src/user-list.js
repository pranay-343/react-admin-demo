import React, {Component} from "react";
import {Stats} from "./common";
import UserFetch from "./userfetch";
import {Link} from "react-router";


const Userlist = () =>{
  return(
      <section className="pcoded-main-container">
          <div className="pcoded-wrapper">
              <div className="pcoded-content">
                  <div className="pcoded-inner-content">

                      <div className="page-header">
                          <div className="page-block">
                              <div className="row align-items-center">
                                  <div className="col-md-12">
                                      <div className="page-header-title">
                                          <h5 className="m-b-10">User List</h5>
                                      </div>
                                      <ul className="breadcrumb">
                                          <li className="breadcrumb-item"><a href="index.html"><i
                                              className="feather icon-home"></i></a></li>
                                          <li className="breadcrumb-item"><Link to = {"/"}>Dashboard</Link></li>
                                          <li className="breadcrumb-item"><a href="javascript:">User List</a></li>
                                      </ul>
                                  </div>
                              </div>
                          </div>
                      </div>

                      <div className="main-body">

                          <div className="page-wrapper">

                              <div className="row">
                                  <Stats name="daily" title="Daily New Users"/>
                                  <Stats name="monthly" title="Monthly New Users"/>
                                  <Stats title="Yearly New Users"/>
                                  <UserFetch />

                              </div>
                      </div>
                  </div>
              </div>
          </div>
          </div>
      </section>
  )
    }

export default Userlist;