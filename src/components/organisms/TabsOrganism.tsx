import * as React from "react";
import {ChatListTab} from "../ChatListTab";
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {getSidebarState} from "../../selectors/sidebar";

export const TabsOrganism: React.FC = ( ) => {
    const {isShowRoomsList} = useSelector(getSidebarState);
    const [isShowRooms, setIsShowRooms] = useState(false)
    useEffect(() => {
        setIsShowRooms(isShowRoomsList)
    }, [isShowRoomsList])
    return (
        <React.Fragment>
            {isShowRooms ? <ChatListTab/> : null}
        </React.Fragment>
    )
}
