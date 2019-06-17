import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../../redux/mapStateToProps';

// MATERIAL-UI
import Slider from '@material-ui/lab/Slider';
import Grid from '@material-ui/core/Grid';

class SliderTest extends Component {
    state = {
      sliderVal: 0,
    }

    handleSliderChange = (event, newValue) => {
      console.log('EVENT: ', event);
      console.log('newValue: ', newValue);
      this.setState({
        sliderVal: newValue,
      })
    }

    render() {
        return(
            <div>
                <h2>Sliders:</h2>
                <Grid container>
                    <Grid item xs={6}>
                        {/* <Slider
                            value={this.state.sliderVal}
                            onChange={this.handleSliderChange}
                            aria-labelledby="continuous-slider"
                        /> */}

                        <Slider
                            defaultValue={0}
                            aria-labelledby="discrete-slider"
                            valueLabelDisplay="auto"
                            min={0}
                            max={10}
                            onChange={this.handleSliderChange}
                            step={1}
                            marks
                        />
                    </Grid>
                </Grid>

            </div>
        )
    }
};

export default connect(mapStateToProps)(SliderTest);
