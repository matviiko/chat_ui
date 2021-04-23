import * as React from "react";

export const UserHeadMolecule: React.FC = () => {
    return (
        <div className="p-3 p-lg-4 border-bottom">
            <div className="row align-items-center">
                <div className="col-sm-4 col-8">
                    <div className="d-flex align-items-center">
                        <div className="avatar-xs mx-3">
                            <span
                                className="avatar-title rounded-circle online bg-soft-primary text-primary">
                                D
                            </span>
                        </div>
                        <div className="flex-1 overflow-hidden">
                            <h5 className="font-size-16 mb-0 text-truncate">
                                <a href="#" className="text-reset user-profile-show">
                                    Doris Brown
                                </a>
                                <i className="ri-record-circle-fill font-size-10 text-success d-inline-block ms-1" />
                            </h5>
                        </div>
                    </div>
                </div>
                <div className="col-sm-8 col-4">
                    <ul className="list-inline user-chat-nav text-end mb-0">
                        <li className="list-inline-item d-none d-lg-inline-block me-2 ms-0">
                            <button type="button" className="btn nav-btn user-profile-show">
                                <i className="ri-user-2-line" />
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
