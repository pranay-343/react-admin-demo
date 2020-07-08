import React, { Component } from 'react';
import Header from "./header";
import Sidebar from "./sidebar";

export default class Root extends Component{
    render() {
        return(
            <div>
                <Header />
                <Sidebar />
                {this.props.children}
            </div>
        )
    }

}