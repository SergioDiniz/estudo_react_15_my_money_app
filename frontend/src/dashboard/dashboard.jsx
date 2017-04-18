import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import ValueBox from '../common/widget/valueBox'

import {getSummary} from './dashboardAction'

class Dashboard extends Component{

    componentWillMount(){
        this.props.getSummary()
    }

    render(){
        const { credit, debt } = this.props.summary
        return(
            <div>
                <ContentHeader title='Dashboard' subtitle='Inicio' />
                <Content>
                    <div className='row'>
                        <ValueBox value={`R$ ${credit}`} cols='12 4' color='green' icon='bank'  text='Total de Créditos' />
                        <ValueBox value={`R$ ${debt}`} cols='12 4' color='red' icon='credit-card'  text='Total de Débito' />
                        <ValueBox value={`R$ ${credit - debt}`} cols='12 4' color='blue' icon='money'  text='Valor Consolidado' />
                    </div>
                </Content>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    summary: state.dashboard.summary
})

const mapDispatchToProps = (dispatch) => (
    bindActionCreators({getSummary}, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)