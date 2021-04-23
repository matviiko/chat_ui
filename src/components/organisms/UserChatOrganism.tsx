import * as React from "react";
import {UserHeadMolecule} from "../molecules/UserHeadMolecule";
import {ContentChatMolecule} from "../molecules/ContentChatMolecule";

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

                        <div className="row g-0">

                            <div className="col">
                                <input type="text" className="form-control form-control-lg bg-light border-light"
                                       placeholder="Enter Message..."/>
                            </div>
                            <div className="col-auto">
                                <div className="chat-input-links ms-md-2 me-md-0">
                                    <ul className="list-inline mb-0">
                                        <li className="list-inline-item" data-bs-toggle="tooltip"
                                            data-bs-placement="top" title="Emoji">
                                            <button type="button"
                                                    className="btn btn-link text-decoration-none font-size-16 btn-lg waves-effect">
                                                <i className="ri-emotion-happy-line" />
                                            </button>
                                        </li>
                                        <li className="list-inline-item" data-bs-toggle="tooltip"
                                            data-bs-placement="top" title="Attached File">
                                            <button type="button"
                                                    className="btn btn-link text-decoration-none font-size-16 btn-lg waves-effect">
                                                <i className="ri-attachment-line" />
                                            </button>
                                        </li>
                                        <li className="list-inline-item">
                                            <button type="submit"
                                                    className="btn btn-primary font-size-16 btn-lg chat-send waves-effect waves-light">
                                                <i className="ri-send-plane-2-fill" />
                                            </button>
                                        </li>
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
