import React, {useRef} from 'react';
import classes from "./DialogsItem.module.css";
import {NavLink} from "react-router-dom";


export const DialogsItem = (props) => {


    return (<div className={classes.content}>
            <div className={classes.mess}>
                {props.message}
            </div>
            <div className={classes.names}>
                <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
            </div>
        </div>

    )
}
