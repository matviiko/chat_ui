import * as React from "react";

export const ContentChatMolecule: React.FC = () => {
    return (
        <div className="simplebar-wrapper" >
            <div className="simplebar-mask">
                <div className="simplebar-offset" >
                    <div className="simplebar-content-wrapper"
                    >
                        <div className="simplebar-content" >
                            <ul className="list-unstyled mb-0">

                                <li>
                                    <div className="conversation-list">
                                        <div className="chat-avatar">
                                            <div className="avatar-xs mx-3">
                                                                <span
                                                                    className="avatar-title rounded-circle online bg-soft-primary text-primary">
                                                                    D
                                                                </span>
                                            </div>
                                        </div>

                                        <div className="user-chat-content">
                                            <div className="ctext-wrap">
                                                <div className="ctext-wrap-content">
                                                    <p className="mb-0">
                                                        Good morning
                                                    </p>
                                                    <p className="chat-time mb-0"><i
                                                        className="ri-time-line align-middle"></i> <span
                                                        className="align-middle">10:00</span></p>
                                                </div>
                                            </div>
                                            <div className="conversation-name">Doris Brown</div>
                                        </div>
                                    </div>
                                </li>

                                <li className="right">
                                    <div className="conversation-list">
                                        <div className="chat-avatar">
                                            <div className="avatar-xs mx-2">
                                                <span
                                                    className="avatar-title rounded-circle online bg-soft-primary text-primary">
                                                    D
                                                </span>
                                            </div>
                                        </div>

                                        <div className="user-chat-content">
                                            <div className="ctext-wrap">
                                                <div className="ctext-wrap-content">
                                                    <p className="mb-0">
                                                        Good morning, How are you? What about our next
                                                        meeting?
                                                    </p>
                                                    <p className="chat-time mb-0"><i
                                                        className="ri-time-line align-middle"></i> <span
                                                        className="align-middle">10:02</span></p>
                                                </div>
                                            </div>

                                            <div className="conversation-name">Patricia Smith</div>
                                        </div>
                                    </div>
                                </li>

                                <li>
                                    <div className="chat-day-title">
                                        <span className="title">Today</span>
                                    </div>
                                </li>

                                <li>
                                    <div className="conversation-list">
                                        <div className="avatar-xs mx-2">
                                                            <span
                                                                className="avatar-title rounded-circle online bg-soft-primary text-primary">
                                                                D
                                                            </span>
                                        </div>
                                        <div className="user-chat-content">

                                            <div className="ctext-wrap">
                                                <div className="ctext-wrap-content">
                                                    <p className="mb-0">
                                                        Yeah everything is fine
                                                    </p>
                                                    <p className="chat-time mb-0"><i
                                                        className="ri-time-line align-middle" /> <span
                                                        className="align-middle">10:05</span></p>
                                                </div>
                                            </div>

                                            <div className="ctext-wrap">
                                                <div className="ctext-wrap-content">
                                                    <p className="mb-0">
                                                        &amp; Next meeting tomorrow 10.00AM
                                                    </p>
                                                    <p className="chat-time mb-0"><i
                                                        className="ri-time-line align-middle"></i> <span
                                                        className="align-middle">10:05</span></p>
                                                </div>
                                            </div>

                                            <div className="conversation-name">Doris Brown</div>
                                        </div>

                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
