import React, { Component } from 'react';

import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {selectTab} from './tabAction'
import If from '../operator/if'

class TabHeader extends Component {
    render() {
        const selected = this.props.tab.selected === this.props.target
        const visibleTab = this.props.tab.visibleTabs[this.props.target]
        return (
            <If test={visibleTab}>
                <li className={selected ? 'active' : ''}>
                    <a href='javascript:;'
                    onClick={() => this.props.selectTab(this.props.target)} 
                    data-toggle='tab'
                    data-target={this.props.target}>
                    <i className={`fa fa-${this.props.icon}`}></i> {this.props.lable}
                    </a>
                </li>
            </If>
        );
    }
}

const mapDispatchToProps = (dispatch) => (
    bindActionCreators({selectTab}, dispatch)
)

const mapStateToProps = (state) => {
    return {
        tab: state.tab
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TabHeader);