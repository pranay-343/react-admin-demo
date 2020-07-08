import React, {Component} from 'react';
import {
    Stats,
    Social,
    Ratings,
} from './common.js';
import Userfetchhome from './userfetch-home.js';
import Newtabs from "./tabcontent";

export default class Content extends Component {
    render() {
        return(

            <div className="pcoded-main-container">
                <div className="pcoded-wrapper">
                    <div className="pcoded-content">
                        <div className="pcoded-inner-content">
                            
                            <div className="main-body">
                                <div className="page-wrapper">
                                    
                                    <div className="row">
                                        
                                        <Stats name="daily" title="Daily Sales" />
                                        <Stats name="monthly" title="Monthly Sales" />
                                        <Stats title="Yearly Sales" />

                                        <div className="col-xl-8 col-md-6">
                                            <div className="card Recent-Users">
                                                <div className="card-header">
                                                    <h5>Recent Users</h5>
                                                </div>
                                                <div className="card-block px-0 py-3">
                                                    <div className="table-responsive">
                                                        <Userfetchhome />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                       
                                        <div className="col-xl-4 col-md-6">
                                            <div className="card card-event">
                                                <div className="card-block">
                                                    <div className="row align-items-center justify-content-center">
                                                        <div className="col">
                                                            <h5 className="m-0">Upcoming Event</h5>
                                                        </div>
                                                        <div className="col-auto">
                                                            <label className="label theme-bg2 text-white f-14 f-w-400 float-right">34%</label>
                                                        </div>
                                                    </div>
                                                    <h2 className="mt-3 f-w-300">45<sub className="text-muted f-14">Competitors</sub></h2>
                                                    <h6 className="text-muted mt-4 mb-0">You can participate in event </h6>
                                                    <i className="fab fa-angellist text-c-purple f-50"></i>
                                                </div>
                                            </div>
                                            <div className="card">
                                                <div className="card-block border-bottom">
                                                    <div className="row d-flex align-items-center">
                                                        <div className="col-auto">
                                                            <i className="feather icon-zap f-30 text-c-green"></i>
                                                        </div>
                                                        <div className="col">
                                                            <h3 className="f-w-300">235</h3>
                                                            <span className="d-block text-uppercase">TOTAL IDEAS</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card-block">
                                                    <div className="row d-flex align-items-center">
                                                        <div className="col-auto">
                                                            <i className="feather icon-map-pin f-30 text-c-blue"></i>
                                                        </div>
                                                        <div className="col">
                                                            <h3 className="f-w-300">26</h3>
                                                            <span className="d-block text-uppercase">TOTAL LOCATIONS</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                       <Social name ="facebook" />
                                       <Social name ='twitter'/>
                                       <Social />
                                       <Ratings />

                                        <div className="col-xl-8 col-md-12 m-b-30">
                                            <Newtabs />
                                        </div>

                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}