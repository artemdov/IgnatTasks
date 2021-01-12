import React from "react";
import styles from './Message.module.css';


type MessageData = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessageData) {
    return (
        <div className={styles.all}>

            <div className={styles.any}>
                <div className={styles.title}>
                    {props.name}
                </div>
                <div className={styles.message}>
                    {props.message}
                </div>
                <div className={styles.when}>
                    {props.time}
                </div>
            </div>
            <div className={styles.picture}>
                < img src={props.avatar} width={100} height={100}/>
            </div>

        </div>
    );
}


export default Message;


