import * as React from "react";
import {map} from "react-bootstrap/ElementChildren";

interface Props {
    firstName: string;
    lastName: string;
    unreadMessages: number;
    lastMessage: string;
    timeLastMessage: Date;
}
export const ChatMessageItem: React.FC<Props> = (props) => {
    const {firstName, lastName, lastMessage, unreadMessages, timeLastMessage} = props

    const getTimeLastMessage = (time: Date) => {
        const date = time.getDate();
        const month = time.getMonth();
        const year = time.getFullYear();
        return `${date} ${month} ${year}`
    };
    return (
        <li className={!!unreadMessages ? 'unread' : ''}>
            <a href="#">
                <div className="d-flex">
                    <div className="chat-user-img align-self-center me-3 ms-0">
                        <div className="avatar-xs">
                            <span
                                className="avatar-title rounded-circle online bg-soft-primary text-primary">
                                {firstName[0].toLocaleUpperCase()}
                            </span>
                            <span className="user-status"></span>
                        </div>
                    </div>
                    <div className="flex-1 overflow-hidden">
                        <h5 className="text-truncate font-size-15 mb-1">{firstName + ' ' + lastName}</h5>
                        <p className="chat-user-message text-truncate mb-0">{lastMessage}</p>
                    </div>
                    <div className="font-size-11">{getTimeLastMessage(timeLastMessage)}</div>
                    {unreadMessages ?
                    <div className="unread-message">
                        <span className="badge badge-soft-danger rounded-pill">{unreadMessages.toString()}</span>
                    </div> : null
                    }
                </div>
            </a>
        </li>
    )
}
