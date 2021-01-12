import React from "react";
import s from './pages/header.module.css';
import {NavLink} from "react-router-dom";
const HeaderItem = (props: {title: string; id: string}) => {
    return(
        <div className={`${s.item} ${s.active}`}>
            <NavLink to={props.id} activeClassName={s.active}>{props.title}</NavLink>
        </div>
    )
}
function Header() {
    return (
        <div>
            <nav className={s.nav}>
                <HeaderItem title='' id='/'/>
                <HeaderItem title='PRE_JUNIOR' id='pre-junior'/>
                <HeaderItem title='JUNIOR' id='/junior'/>
                <HeaderItem title='JUNIOR_PLUS' id='/junior-plus'/>


            </nav>

        </div>
    );
}

export default Header;
