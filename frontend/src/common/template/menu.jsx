import React from 'react'
import MenuItem from './menuItem'
import MenuTree  from './menuTree'

const Menu = (props) => {
    return(
        <ul className='sidebar-menu'>
            <MenuItem lable='Dashboard' path='#/' icon='dashboard' />
            <MenuTree lable='Cadastro' icon='edit'>
                <MenuItem lable='Ciclo de Pagamento' path='#/billingCycles' icon='usd' />
            </MenuTree>
        </ul>
    )
}

export default Menu