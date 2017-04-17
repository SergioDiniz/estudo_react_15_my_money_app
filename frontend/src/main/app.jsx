import '../common/template/dependencias'
import React from 'react'

import Header from '../common/template/header'
import SideBar from '../common/template/sideBar'
import Footer from '../common/template/footer'

const component = (props) => {
    return(
        <div className='wrapper'>
            <Header />
            <SideBar />
            <div className='content-wrapper'>
                <h1>Conteudo</h1>
            </div>
            <Footer />
        </div>
    )
}

export default component