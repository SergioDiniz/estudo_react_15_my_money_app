import React, { Component } from 'react';

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import Tabs from '../common/tab/tabs'
import TabsContent from '../common/tab/tabsContent'
import TabsHeader from '../common/tab/tabsHeader'
import TabHeader from '../common/tab/tabHeader'

class BillingCycle extends Component {
    render() {
        return (
            <div>
                <ContentHeader title='Ciclo de Pagamento' subtitle='Cadastro' />
                <Content>
                    <Tabs>
                        <TabsHeader>
                            <TabHeader lable='Listar' icon='bars' target='tabListar' />
                            <TabHeader lable='Incluir' icon='plus' target='tabIncluir' />
                            <TabHeader lable='Alterar' icon='pencil' target='tabAlterar' />
                            <TabHeader lable='Excluir' icon='trash-o' target='tabExcluir' />
                        </TabsHeader>
                        <TabsContent>

                        </TabsContent>
                    </Tabs>
                </Content>
            </div>
        );
    }
}

export default BillingCycle;
