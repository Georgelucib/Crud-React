import React from 'react'
import 'font-awesome/css/font-awesome.min.css'
import {Link} from 'react-router-dom'

export default props =>

<nav className="menu">
<div>
    <Link to="/">
        <i className={`fa fa-${props.iconhome}`}> Início</i>
    </Link>
    <Link to="/Users">
        <i className={`fa fa-${props.iconusers}`}> Usuários</i>
    </Link>
</div>

</nav>  