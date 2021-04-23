import * as React from "react";
import {MainSidebar} from "../../components/molecules/MainSidebar";
import {UserChatOrganism} from "../../components/organisms/UserChatOrganism";
import {TabsOrganism} from "../../components/organisms/TabsOrganism";

export const Main: React.FC = () => {
    return (
        <React.Fragment>
            <MainSidebar/>
            <TabsOrganism/>
            <UserChatOrganism/>
        </React.Fragment>
    )
}
