import React from 'react'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'

const Dashboard = (props) => {
    return(
        <div>
            <ContentHeader title='Dashboard' subtitle='Inicio' />
            <Content>
                Conteudo
            </Content>
        </div>
    )
}

export default Dashboard