import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../../redux/mapStateToProps';

class JutsuCatalogPage extends Component {
    render() {
        return(
            <div>
                <h1>Jutsu Catalog</h1>

                <div>
                    Body Content
                </div>
            </div>
        )
    }
};

export default connect(mapStateToProps)(JutsuCatalogPage);
