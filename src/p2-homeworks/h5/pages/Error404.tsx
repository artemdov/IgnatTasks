import React from "react";
import s from './header.module.css'

function Error404() {
    return (
        <div className={s.error}>
            <div>404</div>
            <div>Page not found!</div>
            <div>—ฅ/ᐠ.̫ .ᐟ\ฅ—</div>
        </div>
    );
}

export default Error404;
