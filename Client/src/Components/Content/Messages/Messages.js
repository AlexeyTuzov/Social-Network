import React from 'react';
import s from './Messages.module.css';
import Message from "./Message";
import Name from './Name';

const Messages = (props) => {

    const returnNames = () => props.Names.map(line => {
            return (<Name firstName={line.firstName} lastName={line.lastName} id={line.id}/>);
        })
    const getMessages = () => props.MessagesText.map(line => {
            return (<Message message={line.message}/>);
        })
    const onRespondentChoose = () => props.showCurrentMessages();
    const updateMessage = (item) => props.UpdateMessage(item.target.value);

        return (

        <div className={s.dialogWindow}>
            <div onClick={onRespondentChoose}>{returnNames()}
                <div>
                <textarea className={s.TextArea} onChange={updateMessage}
                          value={props.currentTextArea}/>
                    <div>
                        <button className={s.Button} onClick={props.ButtonClick}>Sent Message
                        </button>
                    </div>
                </div>
            </div>
            <div>
                <div>Dialog with: {props.RespondentName}</div>
                {getMessages()}</div>
        </div>);



}

export default Messages;