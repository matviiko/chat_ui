import * as React from "react";

interface Props {
    isGuest: boolean;
    firstName: string;
    lastName: string;
    messages: Array<Message>
}

interface Message {
    text: string;
    date: Date;
}

export const ConversationMessage: React.FC<Props> = props => {

    return (
        <li className={props.isGuest ? 'right' : ''} >
            <div className="conversation-list">
                <div className="chat-avatar">
                    <div className="avatar-xs mx-1">
                        <span
                            className="avatar-title rounded-circle online bg-soft-primary text-primary">

                            {props.firstName[0].toLocaleUpperCase()}
                        </span>
                    </div>
                </div>
                <div className="user-chat-content">
                    {props.messages.map(message => (
                        <div className="ctext-wrap">
                            <div className="ctext-wrap-content">
                                <p className="mb-0">
                                    {message.text}
                                </p>
                                <p className="chat-time mb-0">
                                    <i  className="ri-time-line align-middle" />
                                    <span  className="align-middle">{` ${message.date.getHours()} ${message.date.getMinutes()}`}</span>
                                </p>
                            </div>
                        </div>
                    ))}
                    <div className="conversation-name">{`${props.firstName} ${props.lastName}`}</div>
                </div>
            </div>
        </li>
    )
}
