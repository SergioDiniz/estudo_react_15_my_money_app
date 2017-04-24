import React, { Component } from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {getList} from './billingCycleAction'

class BillingCycleList extends Component {

    componentWillMount(){
        this.props.getList()
    }

    renderList(){
        const list = this.props.list || []
        return list.map(bc => (
            <tr key={bc._id}>
                <td>{bc.name}</td>
                <td>{bc.month}</td>
                <td>{bc.year}</td>
            </tr>
        ))
    }

    render() {
        return (
            <div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Mês</th>
                            <th>Ano</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderList()}
                    </tbody>
                </table>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        list: state.billingCycle.list
    }
}

const mapDispatchToProps = (dispatch) => (
     bindActionCreators({getList}, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleList);