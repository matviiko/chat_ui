import * as React from "react";
import {ConversationMessage} from "../atoms/ConversationMessage";
import {DayTitleAtom} from "../atoms/DayTitleAtom";

export const ContentChatMolecule: React.FC = () => {
    return (
        <div className="simplebar-wrapper" >
            <div className="simplebar-mask">
                <div className="simplebar-offset" >
                    <div className="simplebar-content-wrapper"
                    >
                        <div className="simplebar-content" >
                            <ul className="list-unstyled mb-0">
                                <ConversationMessage key="1" isGuest={true} firstName={'matvii'} lastName={'kopchak'} messages={[{text: 'Hello', date: new Date()}, {text: 'world', date: new Date()}]} />
                                <ConversationMessage  key="2"  isGuest={false} firstName={'matvii'} lastName={'kopchak'} messages={[{text: 'Hello', date: new Date()}, {text: 'world', date: new Date()}]} />

                               <DayTitleAtom />

                                <ConversationMessage key="3"  isGuest={true} firstName={'matvii'} lastName={'kopchak'} messages={[{text: 'Hello', date: new Date()}, {text: 'world', date: new Date()}]} />
                                <ConversationMessage key="4"  isGuest={false} firstName={'matvii'} lastName={'kopchak'} messages={[{text: 'Hello', date: new Date()}, {text: 'world', date: new Date()}]} />
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
