import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router";

class Tab extends Component {
    static propTypes = {
        activeTab: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        onClick: PropTypes.func.isRequired,
    };

    onClick = () => {
        const { label, onClick } = this.props;
        onClick(label);
    }

    render() {
        const {
            onClick,
            props: {
                activeTab,
                label,
            },
        } = this;

        let className = 'nav-link';

        if (activeTab === label) {
            className += ' active show';
        }

        return (

            <li className="nav-item">
                <Link className={className} onClick={onClick} id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="false">{label}</Link>
            </li>
        );
    }
}

export default Tab;