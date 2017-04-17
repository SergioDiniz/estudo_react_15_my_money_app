import '../common/template/dependencias'
import React from 'react'

import Header from '../common/template/header'
import SideBar from '../common/template/sideBar'
const component = (props) => {
    return(
        <div className='wrapper'>
            <Header />
            <SideBar />
        </div>
    )
}

export default component