import React, { Component } from 'react';

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'

class BillingCycle extends Component {
    render() {
        return (
            <div>
                <ContentHeader title='Ciclo de Pagamento' subtitle='Cadastro' />
                <Content>
                    conteudo
                </Content>
            </div>
        );
    }
}

export default BillingCycle;
