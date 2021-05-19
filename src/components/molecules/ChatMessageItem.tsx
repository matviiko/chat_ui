import * as React from "react";

interface Props {
    name: string;
}
export const ChatMessageItem: React.FC<Props> = (props) => {
    const {name} = props

    return (
        <li>
            <a href="#">
                <div className="d-flex">
                    <div className="chat-user-img align-self-center me-3 ms-0">
                        <div className="avatar-xs">
                            <span
                                className="avatar-title rounded-circle online bg-soft-primary text-primary">
                                {name[0].toLocaleUpperCase()}
                            </span>
                        </div>
                    </div>
                    <div className="overflow-hidden text-center">
                        <h5 className="text-truncate font-size-18 m-0">{name}</h5>
                    </div>
                </div>
            </a>
        </li>
    )
}
