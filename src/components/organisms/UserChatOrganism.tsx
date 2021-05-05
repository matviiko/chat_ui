import * as React from "react";
import {UserHeadMolecule} from "../molecules/UserHeadMolecule";
import {ContentChatMolecule} from "../molecules/ContentChatMolecule";
import {InputChatMolecule} from "../molecules/InputChatMolecule";

export const UserChatOrganism: React.FC = () => {
    return (
        <div className="user-chat w-100 overflow-hidden">
            <div className="d-lg-flex">
                <div className="w-100 overflow-hidden position-relative">
                    <UserHeadMolecule/>
                    <div className="chat-conversation p-3 p-lg-4" data-simplebar="init">
                        <ContentChatMolecule />
                    </div>
                    <div className="chat-input-section p-3 p-lg-4 border-top mb-0">
                       <InputChatMolecule/>
                    </div>
                </div>
            </div>
        </div>
    )
}
