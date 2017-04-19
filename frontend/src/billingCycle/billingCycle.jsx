import React, { Component } from 'react';

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import Tabs from '../common/tab/tabs'
import TabsContent from '../common/tab/tabsContent'
import TabsHeader from '../common/tab/tabsHeader'
import TabHeader from '../common/tab/tabHeader'
import TabContent from '../common/tab/tabContent'

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
                            <TabContent id='tabListar'>
                                    tabListar
                            </TabContent>

                            <TabContent id='tabIncluir'>
                                    tabIncluir
                            </TabContent>

                            <TabContent id='tabAlterar'>
                                    tabAlterar
                            </TabContent>

                            <TabContent id='tabExcluir'>
                                    tabExcluir
                            </TabContent>
                        </TabsContent>
                    </Tabs>
                </Content>
            </div>
        );
    }
}

export default BillingCycle;
