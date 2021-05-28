import * as React from "react";
import {MainSidebar} from "../../components/molecules/MainSidebar";
import {UserChatOrganism} from "../../components/organisms/UserChatOrganism";
import {TabsOrganism} from "../../components/organisms/TabsOrganism";
import {useDispatch, useSelector} from "react-redux";
import {getIdUser} from "../../selectors/auth";
import {useEffect, useMemo} from "react";
import {getAllRooms} from "../../actions/room";

export const Main: React.FC = () => {
    const idUser = useSelector(getIdUser);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllRooms(idUser))
        console.log('Main')
    })

    const TabsMemo = useMemo(() => TabsOrganism, [])

    return (
        <React.Fragment>
            <MainSidebar/>
            <TabsMemo/>
            <UserChatOrganism/>
        </React.Fragment>
    )
}
