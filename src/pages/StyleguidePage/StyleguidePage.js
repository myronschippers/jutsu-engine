import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../../redux/mapStateToProps';

class StyleguidePage extends Component {
    render() {
        return(
            <div>
                <h1>Styleguide</h1>

                <div>
                    Body Content
                </div>
            </div>
        )
    }
};

export default connect(mapStateToProps)(StyleguidePage);
