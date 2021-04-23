import * as React from "react";
import {ChatMessageItem} from "../molecules/ChatMessageItem";

export const ChatListOrganism: React.FC = () => {
    return (
        <div className="px-2">
            <h5 className="mb-3 px-3 font-size-16">Recent</h5>

            <div className="chat-message-list" data-simplebar="init">
                <div className="simplebar-wrapper">
                    <div className="simplebar-mask">
                        <div className="simplebar-offset">
                            <div className="simplebar-content-wrapper">
                                <div className="simplebar-content">
                                    <ul className="list-unstyled chat-list chat-user-list">
                                        <ChatMessageItem
                                            firstName="matvii"
                                            lastName="kopchak"
                                            unreadMessages={0}
                                            lastMessage="Last Message"
                                            timeLastMessage={new Date()} />
                                        <ChatMessageItem
                                            firstName="matvii"
                                            lastName="kopchak"
                                            unreadMessages={2}
                                            lastMessage="Last Message"
                                            timeLastMessage={new Date()} />
                                        <ChatMessageItem
                                            firstName="matvii"
                                            lastName="kopchak"
                                            unreadMessages={2}
                                            lastMessage="Last Message"
                                            timeLastMessage={new Date()} />
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
