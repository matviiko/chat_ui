import * as React from "react";
import {ChatMessageItem} from "../molecules/ChatMessageItem";
import {useSelector} from "react-redux";
import {getRoomsState} from "../../selectors/rooms";
import {useEffect, useState} from "react";
import {Room} from "../../services/room.service";

export const ChatListOrganism: React.FC = () => {
    const roomsState = useSelector(getRoomsState)
    const [rooms, setRooms] = useState<Room[] | Array<null>>([])
    useEffect(() => {
        setRooms(roomsState.rooms)
        console.log('chatList');
    }, [roomsState.rooms])

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
                                        {rooms.length > 0 ? rooms.map((room) =>
                                                <ChatMessageItem
                                            key={room.id}
                                            name={room.name}
                                        />)
                                            : <p>No messages...</p>}

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
