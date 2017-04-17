import React from 'react'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import ValueBox from '../common/widget/valueBox'

const Dashboard = (props) => {
    return(
        <div>
            <ContentHeader title='Dashboard' subtitle='Inicio' />
            <Content>
                <div className='row'>
                    <ValueBox cols='12 4' color='green' icon='bank' value='R$ 10' text='Total de Créditos' />
                    <ValueBox cols='12 4' color='red' icon='credit-card' value='R$ 100' text='Total de Débito' />
                    <ValueBox cols='12 4' color='blue' icon='money' value='R$ 0' text='Valor Consolidado' />
                </div>
            </Content>
        </div>
    )
}

export default Dashboard