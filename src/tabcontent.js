import React from 'react';

import Tabs from './tabs';


function Newtabs() {
    return (

            <Tabs>
                <div label="Today" className="tab-pane fade" id="home" role="tabpanel" aria-labelledby="home-tab">
                    <table className="table table-hover">
                        <thead>
                        <tr>
                            <th>User</th>
                            <th>Activity</th>
                            <th>Time</th>
                            <th>Status</th>
                            <th className="text-right"></th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>
                                <h6 className="m-0"><img className="rounded-circle m-r-10" style={{width:"40px"}} src={process.env.PUBLIC_URL + "/assets/images/user/avatar-1.jpg"} alt="activity-user" />Ida Jorgensen</h6>
                            </td>
                            <td>
                                <h6 className="m-0">The quick brown fox</h6>
                            </td>
                            <td>
                                <h6 className="m-0">3:28 PM</h6>
                            </td>
                            <td>
                                <h6 className="m-0 text-c-green">Done</h6>
                            </td>
                            <td className="text-right"><i className="fas fa-circle text-c-green f-10"></i></td>
                        </tr>

                        <tr>
                            <td>
                                <h6 className="m-0"><img className="rounded-circle  m-r-10" style={{width:"40px"}} src={process.env.PUBLIC_URL + "/assets/images/user/avatar-2.jpg"} alt="activity-user" />Albert Andersen</h6>
                            </td>
                            <td>
                                <h6 className="m-0">Jumps over the lazy</h6>
                            </td>
                            <td>
                                <h6 className="m-0">2:37 PM</h6>
                            </td>
                            <td>
                                <h6 className="m-0 text-c-red">Missed</h6>
                            </td>
                            <td className="text-right"><i className="fas fa-circle text-c-red f-10"></i></td>
                        </tr>

                        <tr>
                            <td>
                                <h6 className="m-0"><img className="rounded-circle  m-r-10" style={{width:"40px"}} src={process.env.PUBLIC_URL + "/assets/images/user/avatar-3.jpg"} alt="activity-user" />Silje Larsen</h6>
                            </td>
                            <td>
                                <h6 className="m-0">Dog the quick brown</h6>
                            </td>
                            <td>
                                <h6 className="m-0">10:23 AM</h6>
                            </td>
                            <td>
                                <h6 className="m-0 text-c-purple">Delayed</h6>
                            </td>
                            <td className="text-right"><i className="fas fa-circle text-c-purple f-10"></i></td>
                        </tr>
                        <tr>
                            <td>
                                <h6 className="m-0"><img className="rounded-circle  m-r-10" style={{width:"40px"}} src={process.env.PUBLIC_URL + "/assets/images/user/avatar-1.jpg"} alt="activity-user" />Ida Jorgensen</h6>
                            </td>
                            <td>
                                <h6 className="m-0">The quick brown fox</h6>
                            </td>
                            <td>
                                <h6 className="m-0">4:28 PM</h6>
                            </td>
                            <td>
                                <h6 className="m-0 text-c-green">Done</h6>
                            </td>
                            <td className="text-right"><i className="fas fa-circle text-c-green f-10"></i></td>
                        </tr>
                        </tbody>
                    </table>

                </div>
                <div label= "This Week" className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                    <table className="table table-hover">
                        <thead>
                        <tr>
                            <th>User</th>
                            <th>Activity</th>
                            <th>Time</th>
                            <th>Status</th>
                            <th className="text-right"></th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>
                                <h6 className="m-0"><img className="rounded-circle  m-r-10" style={{width:"40px"}} src={process.env.PUBLIC_URL + "/assets/images/user/avatar-2.jpg"} alt="activity-user" />Albert Andersen</h6>
                            </td>
                            <td>
                                <h6 className="m-0">Jumps over the lazy</h6>
                            </td>
                            <td>
                                <h6 className="m-0">2:37 PM</h6>
                            </td>
                            <td>
                                <h6 className="m-0 text-c-red">Missed</h6>
                            </td>
                            <td className="text-right"><i className="fas fa-circle text-c-red f-10"></i></td>
                        </tr>
                        <tr>
                            <td>
                                <h6 className="m-0"><img className="rounded-circle m-r-10" style={{width:"40px"}} src={process.env.PUBLIC_URL + "/assets/images/user/avatar-1.jpg"} alt="activity-user" />Ida Jorgensen</h6>
                            </td>
                            <td>
                                <h6 className="m-0">The quick brown fox</h6>
                            </td>
                            <td>
                                <h6 className="m-0">3:28 PM</h6>
                            </td>
                            <td>
                                <h6 className="m-0 text-c-green">Done</h6>
                            </td>
                            <td className="text-right"><i className="fas fa-circle text-c-green f-10"></i></td>
                        </tr>
                        <tr>
                            <td>
                                <h6 className="m-0"><img className="rounded-circle  m-r-10" style={{width:"40px"}} src={process.env.PUBLIC_URL + "/assets/images/user/avatar-1.jpg"} alt="activity-user" />Ida Jorgensen</h6>
                            </td>
                            <td>
                                <h6 className="m-0">The quick brown fox</h6>
                            </td>
                            <td>
                                <h6 className="m-0">4:28 PM</h6>
                            </td>
                            <td>
                                <h6 className="m-0 text-c-green">Done</h6>
                            </td>
                            <td className="text-right"><i className="fas fa-circle text-c-green f-10"></i></td>
                        </tr>
                        <tr>
                            <td>
                                <h6 className="m-0"><img className="rounded-circle  m-r-10" style={{width:"40px"}} src={process.env.PUBLIC_URL + "/assets/images/user/avatar-3.jpg"} alt="activity-user" />Silje Larsen</h6>
                            </td>
                            <td>
                                <h6 className="m-0">Dog the quick brown</h6>
                            </td>
                            <td>
                                <h6 className="m-0">10:23 AM</h6>
                            </td>
                            <td>
                                <h6 className="m-0 text-c-purple">Delayed</h6>
                            </td>
                            <td className="text-right"><i className="fas fa-circle text-c-purple f-10"></i></td>
                        </tr>
                        </tbody>
                    </table>

                </div>
                <div label ="All" className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                    <table className="table table-hover">
                        <thead>
                        <tr>
                            <th>User</th>
                            <th>Activity</th>
                            <th>Time</th>
                            <th>Status</th>
                            <th className="text-right"></th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>
                                <h6 className="m-0"><img className="rounded-circle  m-r-10" style={{width:"40px"}} src={process.env.PUBLIC_URL + "/assets/images/user/avatar-3.jpg"} alt="activity-user" />Silje Larsen</h6>
                            </td>
                            <td>
                                <h6 className="m-0">Dog the quick brown</h6>
                            </td>
                            <td>
                                <h6 className="m-0">10:23 AM</h6>
                            </td>
                            <td>
                                <h6 className="m-0 text-c-purple">Delayed</h6>
                            </td>
                            <td className="text-right"><i className="fas fa-circle text-c-purple f-10"></i></td>
                        </tr>
                        <tr>
                            <td>
                                <h6 className="m-0"><img className="rounded-circle m-r-10" style={{width:"40px"}} src={process.env.PUBLIC_URL + "/assets/images/user/avatar-1.jpg"} alt="activity-user" />Ida Jorgensen</h6>
                            </td>
                            <td>
                                <h6 className="m-0">The quick brown fox</h6>
                            </td>
                            <td>
                                <h6 className="m-0">3:28 PM</h6>
                            </td>
                            <td>
                                <h6 className="m-0 text-c-green">Done</h6>
                            </td>
                            <td className="text-right"><i className="fas fa-circle text-c-green f-10"></i></td>
                        </tr>
                        <tr>
                            <td>
                                <h6 className="m-0"><img className="rounded-circle  m-r-10" style={{width:"40px"}} src={process.env.PUBLIC_URL + "/assets/images/user/avatar-2.jpg"} alt="activity-user" />Albert Andersen</h6>
                            </td>
                            <td>
                                <h6 className="m-0">Jumps over the lazy</h6>
                            </td>
                            <td>
                                <h6 className="m-0">2:37 PM</h6>
                            </td>
                            <td>
                                <h6 className="m-0 text-c-red">Missed</h6>
                            </td>
                            <td className="text-right"><i className="fas fa-circle text-c-red f-10"></i></td>
                        </tr>
                        <tr>
                            <td>
                                <h6 className="m-0"><img className="rounded-circle  m-r-10" style={{width:"40px"}} src={process.env.PUBLIC_URL + "/assets/images/user/avatar-1.jpg"} alt="activity-user" />Ida Jorgensen</h6>
                            </td>
                            <td>
                                <h6 className="m-0">The quick brown fox</h6>
                            </td>
                            <td>
                                <h6 className="m-0">4:28 PM</h6>
                            </td>
                            <td>
                                <h6 className="m-0 text-c-green">Done</h6>
                            </td>
                            <td className="text-right"><i className="fas fa-circle text-c-green f-10"></i></td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </Tabs>

);
}

export default Newtabs;