import * as React from "react";
import {ChatListOrganism} from "./organisms/ChatListOrganism";
import {ChatSearchMolecule} from "./molecules/ChatSearchMolecule";

export const ChatListTab: React.FC = () => {
    return (
        <div className="chat-leftsidebar me-lg-1 ms-lg-0">
            <div className="tab-content">
                <div className="tab-pane fade active show">
                    <div>
                        <ChatSearchMolecule/>
                        <ChatListOrganism />
                    </div>
                </div>
            </div>
            {/*end tab content*/}
        </div>
    )
}
