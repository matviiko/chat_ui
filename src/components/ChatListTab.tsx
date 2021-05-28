import * as React from "react";
import {ChatListOrganism} from "./organisms/ChatListOrganism";
import {ChatSearchMolecule} from "./molecules/ChatSearchMolecule";
import {memo} from "react";

export const ChatListTab: React.FC = () => {
    const ChatListMemo = memo(ChatListOrganism);
    return (
        <div className="chat-leftsidebar me-lg-1 ms-lg-0">
            <div className="tab-content">
                <div className="tab-pane fade active show">
                    <div>
                        <ChatSearchMolecule/>
                        <ChatListMemo />
                    </div>
                </div>
            </div>
            {/*end tab content*/}
        </div>
    )
}
