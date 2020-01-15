import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../../redux/mapStateToProps';

// COMPONENTS
import SliderTest from '../SliderTest/SliderTest';
import BtnImgBase from '../BtnImgBase/BtnImgBase';

class HomePage extends Component {
    render() {
        return(
            <div className="pageWrap">
                <h1 className="vr vr_x3">Testing Grounds</h1>

                <div className="vr vr_x2">
                    <BtnImgBase />
                </div>
                <div className="vr vr_x2">
                    <SliderTest />
                </div>

            </div>
        )
    }
};

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(HomePage);
