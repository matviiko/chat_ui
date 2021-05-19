import * as React from "react";
import {MainSidebar} from "../../components/molecules/MainSidebar";
import {UserChatOrganism} from "../../components/organisms/UserChatOrganism";
import {TabsOrganism} from "../../components/organisms/TabsOrganism";
import {useDispatch, useSelector} from "react-redux";
import {getIdUser} from "../../selectors/auth";
import {useEffect} from "react";
import {getAllRooms} from "../../actions/room";

export const Main: React.FC = () => {
    const idUser = useSelector(getIdUser);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllRooms(idUser))
        console.log('1')
    }, [])

    return (
        <React.Fragment>
            <MainSidebar/>
            <TabsOrganism/>
            <UserChatOrganism/>
        </React.Fragment>
    )
}
