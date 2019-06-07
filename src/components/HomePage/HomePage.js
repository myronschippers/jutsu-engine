import React, { Component } from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import mapStateToProps from '../../redux/mapStateToProps';

class HomePage extends Component {
    render() {
        let welcomeText = 'Welcome';
        return(
            <div>
                <h1 id="welcome">
                Welcome, { this.props.reduxState.user.username }!
                </h1>
                <p>Your ID is: {this.props.reduxState.user.id}</p>
                <LogOutButton className="log-in" />
            </div>
        )
    }
};

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(HomePage);
