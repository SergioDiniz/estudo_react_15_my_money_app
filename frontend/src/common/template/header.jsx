import React from 'react'

const component = (props) => {
    return(
        <header className='main-header'>
            <a href='/#/' className='logo'>
                <span className='logo-mini'><b>My</b><i className='fa fa-money'></i></span>
                <span className='logo-lg'>
                    <i className='fa fa-money'></i>
                    <b> My</b> Money
                </span>
            </a>
            <nav className='navbar navbar-static-top' role='navigation'>
                <a href className='sidebar-toggle' data-toggle='offcanvas'></a>
            </nav>
        </header>
    )
}

export default component