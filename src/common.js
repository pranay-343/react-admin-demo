import React from 'react';
import "@reach/tabs/styles.css";

const Stats = (props) =>{
    const statsprop = props.name;
    if (statsprop == 'daily'){
        return (  <div className="col-md-6 col-xl-4">
            <div className="card daily-sales">
                <div className="card-block">
                    <h6 className="mb-4">{props.title}</h6>
                    <div className="row d-flex align-items-center">
                        <div className="col-9">
                            <h3 className="f-w-300 d-flex align-items-center m-b-0"><i className="feather icon-arrow-up text-c-green f-30 m-r-10"></i>$ 249.95</h3>
                        </div>

                        <div className="col-3 text-right">
                            <p className="m-b-0">67%</p>
                        </div>
                    </div>
                    <div className="progress m-t-30" style={{height: "7px"}}>
                        <div className="progress-bar progress-c-theme" role="progressbar" style={{width: "50%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
            </div>
        </div> );
    }
    else if(statsprop == 'monthly'){
        return ( <div className="col-md-6 col-xl-4">
            <div className="card Monthly-sales">
                <div className="card-block">
                    <h6 className="mb-4">{props.title}</h6>
                    <div className="row d-flex align-items-center">
                        <div className="col-9">
                            <h3 className="f-w-300 d-flex align-items-center  m-b-0"><i className="feather icon-arrow-down text-c-red f-30 m-r-10"></i>$ 2.942.32</h3>
                        </div>
                        <div className="col-3 text-right">
                            <p className="m-b-0">36%</p>
                        </div>
                    </div>
                    <div className="progress m-t-30" style={{height: "7px"}}>
                        <div className="progress-bar progress-c-theme2" role="progressbar" style={{width: "35%"}} aria-valuenow="35" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
            </div>
        </div>);
    }
    else {
        return (<div className="col-md-12 col-xl-4">
            <div className="card yearly-sales">
                <div className="card-block">
                    <h6 className="mb-4">{props.title}</h6>
                    <div className="row d-flex align-items-center">
                        <div className="col-9">
                            <h3 className="f-w-300 d-flex align-items-center  m-b-0"><i className="feather icon-arrow-up text-c-green f-30 m-r-10"></i>$ 8.638.32</h3>
                        </div>
                        <div className="col-3 text-right">
                            <p className="m-b-0">80%</p>
                        </div>
                    </div>
                    <div className="progress m-t-30" style={{height: "7px"}}>
                        <div className="progress-bar progress-c-theme" role="progressbar" style={{width: "70%"}} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
            </div>
        </div>);
    }

};

const Social = (props) =>{
    const socialprop = props.name;
    if (socialprop == 'facebook'){
        return ( <div className="col-md-12 col-xl-4">
                <div className="card card-social">
                    <div className="card-block border-bottom">
                        <div className="row align-items-center justify-content-center">
                            <div className="col-auto">
                                <i className="fab fa-facebook-f text-primary f-36"></i>
                            </div>
                            <div className="col text-right">
                                <h3>12,281</h3>
                                <h5 className="text-c-green mb-0">+7.2% <span className="text-muted">Total Likes</span></h5>
                            </div>
                        </div>
                    </div>
                    <div className="card-block">
                        <div className="row align-items-center justify-content-center card-active">
                            <div className="col-6">
                                <h6 className="text-center m-b-10"><span className="text-muted m-r-5">Target:</span>35,098</h6>
                                <div className="progress">
                                    <div className="progress-bar progress-c-theme" role="progressbar" style={{width:"60%",height:"6px"}} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                            <div className="col-6">
                                <h6 className="text-center  m-b-10"><span className="text-muted m-r-5">Duration:</span>3,539</h6>
                                <div className="progress">
                                    <div className="progress-bar progress-c-theme2" role="progressbar" style={{width:"45%",height:"6px"}} aria-valuenow="45" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> );
        }
    else if(socialprop == 'twitter'){
        return (<div className="col-md-6 col-xl-4">
                <div className="card card-social">
                    <div className="card-block border-bottom">
                        <div className="row align-items-center justify-content-center">
                            <div className="col-auto">
                                <i className="fab fa-twitter text-c-blue f-36"></i>
                            </div>
                            <div className="col text-right">
                                <h3>11,200</h3>
                                <h5 className="text-c-purple mb-0">+6.2% <span className="text-muted">Total Likes</span></h5>
                            </div>
                        </div>
                    </div>
                    <div className="card-block">
                        <div className="row align-items-center justify-content-center card-active">
                            <div className="col-6">
                                <h6 className="text-center m-b-10"><span className="text-muted m-r-5">Target:</span>34,185</h6>
                                <div className="progress">
                                    <div className="progress-bar progress-c-green" role="progressbar" style={{width:"40%",height:"6px"}} aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                            <div className="col-6">
                                <h6 className="text-center  m-b-10"><span className="text-muted m-r-5">Duration:</span>4,567</h6>
                                <div className="progress">
                                    <div className="progress-bar progress-c-blue" role="progressbar" style={{width:"70%",height:"6px"}} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>);
        }
    else {
        return (<div className="col-md-6 col-xl-4">
            <div className="card card-social">
                <div className="card-block border-bottom">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-auto">
                            <i className="fab fa-google-plus-g text-c-red f-36"></i>
                        </div>
                        <div className="col text-right">
                            <h3>10,500</h3>
                            <h5 className="text-c-blue mb-0">+5.9% <span className="text-muted">Total Likes</span></h5>
                        </div>
                    </div>
                </div>
                <div className="card-block">
                    <div className="row align-items-center justify-content-center card-active">
                        <div className="col-6">
                            <h6 className="text-center m-b-10"><span className="text-muted m-r-5">Target:</span>25,998</h6>
                            <div className="progress">
                                <div className="progress-bar progress-c-theme" role="progressbar" style={{width:"80%",height:"6px"}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <div className="col-6">
                            <h6 className="text-center  m-b-10"><span className="text-muted m-r-5">Duration:</span>7,753</h6>
                            <div className="progress">
                                <div className="progress-bar progress-c-theme2" role="progressbar" style={{width:"50%",height:"6px"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>);
    }

};

const Ratings = () =>{
    return (
        <div className="col-xl-4 col-md-6">
            <div className="card user-list">
                <div className="card-header">
                    <h5>Rating</h5>
                </div>
                <div className="card-block">
                    <div className="row align-items-center justify-content-center m-b-20">
                        <div className="col-6">
                            <h2 className="f-w-300 d-flex align-items-center float-left m-0">4.7 <i className="fas fa-star f-10 m-l-10 text-c-yellow"></i></h2>
                        </div>
                        <div className="col-6">
                            <h6 className="d-flex  align-items-center float-right m-0">0.4 <i className="fas fa-caret-up text-c-green f-22 m-l-10"></i></h6>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-12">
                            <h6 className="align-items-center float-left"><i className="fas fa-star f-10 m-r-10 text-c-yellow"></i>5</h6>
                            <h6 className="align-items-center float-right">384</h6>
                            <div className="progress m-t-30 m-b-20" style={{height: "6px"}}>
                                <div className="progress-bar progress-c-theme" role="progressbar" style={{width: "70%"}} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <div className="col-xl-12">
                            <h6 className="align-items-center float-left"><i className="fas fa-star f-10 m-r-10 text-c-yellow"></i>4</h6>
                            <h6 className="align-items-center float-right">145</h6>
                            <div className="progress m-t-30  m-b-20" style={{height: "6px"}}>
                                <div className="progress-bar progress-c-theme" role="progressbar" style={{width: "35%"}} aria-valuenow="35" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <div className="col-xl-12">
                            <h6 className="align-items-center float-left"><i className="fas fa-star f-10 m-r-10 text-c-yellow"></i>3</h6>
                            <h6 className="align-items-center float-right">24</h6>
                            <div className="progress m-t-30  m-b-20" style={{height: "6px"}}>
                                <div className="progress-bar progress-c-theme" role="progressbar" style={{width: "25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <div className="col-xl-12">
                            <h6 className="align-items-center float-left"><i className="fas fa-star f-10 m-r-10 text-c-yellow"></i>2</h6>
                            <h6 className="align-items-center float-right">1</h6>
                            <div className="progress m-t-30  m-b-20" style={{height: "6px"}}>
                                <div className="progress-bar progress-c-theme" role="progressbar" style={{width: "10%"}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <div className="col-xl-12">
                            <h6 className="align-items-center float-left"><i className="fas fa-star f-10 m-r-10 text-c-yellow"></i>1</h6>
                            <h6 className="align-items-center float-right">0</h6>
                            <div className="progress m-t-30  m-b-20" style={{height: "6px"}}>
                                <div className="progress-bar" role="progressbar" style={{width: "0"}} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

};

export  {
    Stats,
    Social,
    Ratings,

}