import * as React from "react";

export const UserChatOrganism: React.FC = () => {
    return (
        <div className="user-chat w-100 overflow-hidden">
            <div className="d-lg-flex">

                <div className="w-100 overflow-hidden position-relative">
                    <div className="p-3 p-lg-4 border-bottom">
                        <div className="row align-items-center">
                            <div className="col-sm-4 col-8">
                                <div className="d-flex align-items-center">
                                    <div className="d-block d-lg-none me-2 ms-0">
                                        <a
                                           className="user-chat-remove text-muted font-size-16 p-2"><i
                                            className="ri-arrow-left-s-line"></i></a>
                                    </div>
                                    <div className="me-3 ms-0">
                                        <img src="assets/images/users/avatar-4.jpg" className="rounded-circle avatar-xs"
                                             alt=""/>
                                    </div>
                                    <div className="flex-1 overflow-hidden">
                                        <h5 className="font-size-16 mb-0 text-truncate"><a href="#"
                                                                                           className="text-reset user-profile-show">Doris
                                            Brown</a> <i
                                            className="ri-record-circle-fill font-size-10 text-success d-inline-block ms-1"></i>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-8 col-4">
                                <ul className="list-inline user-chat-nav text-end mb-0">
                                    <li className="list-inline-item">
                                        <div className="dropdown">
                                            <button className="btn nav-btn dropdown-toggle" type="button"
                                                    data-bs-toggle="dropdown" aria-haspopup="true"
                                                    aria-expanded="false">
                                                <i className="ri-search-line"></i>
                                            </button>
                                            <div className="dropdown-menu p-0 dropdown-menu-end dropdown-menu-md">
                                                <div className="search-box p-2">
                                                    <input type="text" className="form-control bg-light border-0"
                                                           placeholder="Search.."/>
                                                </div>
                                            </div>
                                        </div>
                                    </li>

                                    <li className="list-inline-item d-none d-lg-inline-block me-2 ms-0">
                                        <button type="button" className="btn nav-btn" data-bs-toggle="modal"
                                                data-bs-target="#audiocallModal">
                                            <i className="ri-phone-line"></i>
                                        </button>
                                    </li>

                                    <li className="list-inline-item d-none d-lg-inline-block me-2 ms-0">
                                        <button type="button" className="btn nav-btn" data-bs-toggle="modal"
                                                data-bs-target="#videocallModal">
                                            <i className="ri-vidicon-line"></i>
                                        </button>
                                    </li>

                                    <li className="list-inline-item d-none d-lg-inline-block me-2 ms-0">
                                        <button type="button" className="btn nav-btn user-profile-show">
                                            <i className="ri-user-2-line"></i>
                                        </button>
                                    </li>

                                    <li className="list-inline-item">
                                        <div className="dropdown">
                                            <button className="btn nav-btn dropdown-toggle" type="button"
                                                    data-bs-toggle="dropdown" aria-haspopup="true"
                                                    aria-expanded="false">
                                                <i className="ri-more-fill"></i>
                                            </button>
                                            <div className="dropdown-menu dropdown-menu-end">
                                                <a className="dropdown-item d-block d-lg-none user-profile-show"
                                                   href="#">View profile <i
                                                    className="ri-user-2-line float-end text-muted"></i></a>
                                                <a className="dropdown-item d-block d-lg-none" href="#"
                                                   data-bs-toggle="modal" data-bs-target="#audiocallModal">Audio <i
                                                    className="ri-phone-line float-end text-muted"></i></a>
                                                <a className="dropdown-item d-block d-lg-none" href="#"
                                                   data-bs-toggle="modal" data-bs-target="#videocallModal">Video <i
                                                    className="ri-vidicon-line float-end text-muted"></i></a>
                                                <a className="dropdown-item" href="#">Archive <i
                                                    className="ri-archive-line float-end text-muted"></i></a>
                                                <a className="dropdown-item" href="#">Muted <i
                                                    className="ri-volume-mute-line float-end text-muted"></i></a>
                                                <a className="dropdown-item" href="#">Delete <i
                                                    className="ri-delete-bin-line float-end text-muted"></i></a>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="chat-conversation p-3 p-lg-4" data-simplebar="init">
                        <div className="simplebar-wrapper" >
                            <div className="simplebar-height-auto-observer-wrapper">
                                <div className="simplebar-height-auto-observer"></div>
                            </div>
                            <div className="simplebar-mask">
                                <div className="simplebar-offset" >
                                    <div className="simplebar-content-wrapper"
                                        >
                                        <div className="simplebar-content" >
                                            <ul className="list-unstyled mb-0">
                                                <li>
                                                    <div className="conversation-list">
                                                        <div className="chat-avatar">
                                                            <img src="assets/images/users/avatar-4.jpg" alt=""/>
                                                        </div>

                                                        <div className="user-chat-content">
                                                            <div className="ctext-wrap">
                                                                <div className="ctext-wrap-content">
                                                                    <p className="mb-0">
                                                                        Good morning
                                                                    </p>
                                                                    <p className="chat-time mb-0"><i
                                                                        className="ri-time-line align-middle"></i> <span
                                                                        className="align-middle">10:00</span></p>
                                                                </div>
                                                                <div className="dropdown align-self-start">
                                                                    <a className="dropdown-toggle" href="#"
                                                                       role="button" data-bs-toggle="dropdown"
                                                                       aria-haspopup="true" aria-expanded="false">
                                                                        <i className="ri-more-2-fill"></i>
                                                                    </a>
                                                                    <div className="dropdown-menu">
                                                                        <a className="dropdown-item" href="#">Copy <i
                                                                            className="ri-file-copy-line float-end text-muted"></i></a>
                                                                        <a className="dropdown-item" href="#">Save <i
                                                                            className="ri-save-line float-end text-muted"></i></a>
                                                                        <a className="dropdown-item" href="#">Forward <i
                                                                            className="ri-chat-forward-line float-end text-muted"></i></a>
                                                                        <a className="dropdown-item" href="#">Delete <i
                                                                            className="ri-delete-bin-line float-end text-muted"></i></a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="conversation-name">Doris Brown</div>
                                                        </div>
                                                    </div>
                                                </li>

                                                <li className="right">
                                                    <div className="conversation-list">
                                                        <div className="chat-avatar">
                                                            <img src="assets/images/users/avatar-1.jpg" alt=""/>
                                                        </div>

                                                        <div className="user-chat-content">
                                                            <div className="ctext-wrap">
                                                                <div className="ctext-wrap-content">
                                                                    <p className="mb-0">
                                                                        Good morning, How are you? What about our next
                                                                        meeting?
                                                                    </p>
                                                                    <p className="chat-time mb-0"><i
                                                                        className="ri-time-line align-middle"></i> <span
                                                                        className="align-middle">10:02</span></p>
                                                                </div>

                                                                <div className="dropdown align-self-start">
                                                                    <a className="dropdown-toggle" href="#"
                                                                       role="button" data-bs-toggle="dropdown"
                                                                       aria-haspopup="true" aria-expanded="false">
                                                                        <i className="ri-more-2-fill"></i>
                                                                    </a>
                                                                    <div className="dropdown-menu dropdown-menu-end">
                                                                        <a className="dropdown-item" href="#">Copy <i
                                                                            className="ri-file-copy-line float-end text-muted"></i></a>
                                                                        <a className="dropdown-item" href="#">Save <i
                                                                            className="ri-save-line float-end text-muted"></i></a>
                                                                        <a className="dropdown-item" href="#">Forward <i
                                                                            className="ri-chat-forward-line float-end text-muted"></i></a>
                                                                        <a className="dropdown-item" href="#">Delete <i
                                                                            className="ri-delete-bin-line float-end text-muted"></i></a>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="conversation-name">Patricia Smith</div>
                                                        </div>
                                                    </div>
                                                </li>

                                                <li>
                                                    <div className="chat-day-title">
                                                        <span className="title">Today</span>
                                                    </div>
                                                </li>

                                                <li>
                                                    <div className="conversation-list">
                                                        <div className="chat-avatar">
                                                            <img src="assets/images/users/avatar-4.jpg" alt=""/>
                                                        </div>

                                                        <div className="user-chat-content">

                                                            <div className="ctext-wrap">
                                                                <div className="ctext-wrap-content">
                                                                    <p className="mb-0">
                                                                        Yeah everything is fine
                                                                    </p>
                                                                    <p className="chat-time mb-0"><i
                                                                        className="ri-time-line align-middle"></i> <span
                                                                        className="align-middle">10:05</span></p>
                                                                </div>
                                                                <div className="dropdown align-self-start">
                                                                    <a className="dropdown-toggle" href="#"
                                                                       role="button" data-bs-toggle="dropdown"
                                                                       aria-haspopup="true" aria-expanded="false">
                                                                        <i className="ri-more-2-fill"></i>
                                                                    </a>
                                                                    <div className="dropdown-menu">
                                                                        <a className="dropdown-item" href="#">Copy <i
                                                                            className="ri-file-copy-line float-end text-muted"></i></a>
                                                                        <a className="dropdown-item" href="#">Save <i
                                                                            className="ri-save-line float-end text-muted"></i></a>
                                                                        <a className="dropdown-item" href="#">Forward <i
                                                                            className="ri-chat-forward-line float-end text-muted"></i></a>
                                                                        <a className="dropdown-item" href="#">Delete <i
                                                                            className="ri-delete-bin-line float-end text-muted"></i></a>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="ctext-wrap">
                                                                <div className="ctext-wrap-content">
                                                                    <p className="mb-0">
                                                                        &amp; Next meeting tomorrow 10.00AM
                                                                    </p>
                                                                    <p className="chat-time mb-0"><i
                                                                        className="ri-time-line align-middle"></i> <span
                                                                        className="align-middle">10:05</span></p>
                                                                </div>
                                                                <div className="dropdown align-self-start">
                                                                    <a className="dropdown-toggle" href="#"
                                                                       role="button" data-bs-toggle="dropdown"
                                                                       aria-haspopup="true" aria-expanded="false">
                                                                        <i className="ri-more-2-fill"></i>
                                                                    </a>
                                                                    <div className="dropdown-menu">
                                                                        <a className="dropdown-item" href="#">Copy <i
                                                                            className="ri-file-copy-line float-end text-muted"></i></a>
                                                                        <a className="dropdown-item" href="#">Save <i
                                                                            className="ri-save-line float-end text-muted"></i></a>
                                                                        <a className="dropdown-item" href="#">Forward <i
                                                                            className="ri-chat-forward-line float-end text-muted"></i></a>
                                                                        <a className="dropdown-item" href="#">Delete <i
                                                                            className="ri-delete-bin-line float-end text-muted"></i></a>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="conversation-name">Doris Brown</div>
                                                        </div>

                                                    </div>
                                                </li>

                                                <li className="right">
                                                    <div className="conversation-list">
                                                        <div className="chat-avatar">
                                                            <img src="assets/images/users/avatar-1.jpg" alt=""/>
                                                        </div>

                                                        <div className="user-chat-content">
                                                            <div className="ctext-wrap">
                                                                <div className="ctext-wrap-content">
                                                                    <p className="mb-0">
                                                                        Wow that's great
                                                                    </p>
                                                                    <p className="chat-time mb-0"><i
                                                                        className="ri-time-line align-middle"></i> <span
                                                                        className="align-middle">10:06</span></p>
                                                                </div>
                                                                <div className="dropdown align-self-start">
                                                                    <a className="dropdown-toggle" href="#"
                                                                       role="button" data-bs-toggle="dropdown"
                                                                       aria-haspopup="true" aria-expanded="false">
                                                                        <i className="ri-more-2-fill"></i>
                                                                    </a>
                                                                    <div className="dropdown-menu dropdown-menu-end">
                                                                        <a className="dropdown-item" href="#">Copy <i
                                                                            className="ri-file-copy-line float-end text-muted"></i></a>
                                                                        <a className="dropdown-item" href="#">Save <i
                                                                            className="ri-save-line float-end text-muted"></i></a>
                                                                        <a className="dropdown-item" href="#">Forward <i
                                                                            className="ri-chat-forward-line float-end text-muted"></i></a>
                                                                        <a className="dropdown-item" href="#">Delete <i
                                                                            className="ri-delete-bin-line float-end text-muted"></i></a>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="conversation-name">Patricia Smith</div>
                                                        </div>

                                                    </div>
                                                </li>

                                                <li>
                                                    <div className="conversation-list">
                                                        <div className="chat-avatar">
                                                            <img src="assets/images/users/avatar-4.jpg" alt=""/>
                                                        </div>

                                                        <div className="user-chat-content">
                                                            <div className="ctext-wrap">

                                                                <div className="ctext-wrap-content">
                                                                    <ul className="list-inline message-img  mb-0">
                                                                        <li className="list-inline-item message-img-list me-2 ms-0">
                                                                            <div>
                                                                                <a className="popup-img d-inline-block m-1"
                                                                                   href="assets/images/small/img-1.jpg"
                                                                                   title="Project 1">
                                                                                    <img
                                                                                        src="assets/images/small/img-1.jpg"
                                                                                        alt=""
                                                                                        className="rounded border"/>
                                                                                </a>
                                                                            </div>
                                                                            <div className="message-img-link">
                                                                                <ul className="list-inline mb-0">
                                                                                    <li className="list-inline-item">
                                                                                        <a href="#">
                                                                                            <i className="ri-download-2-line"></i>
                                                                                        </a>
                                                                                    </li>
                                                                                    <li className="list-inline-item dropdown">
                                                                                        <a className="dropdown-toggle"
                                                                                           href="#" role="button"
                                                                                           data-bs-toggle="dropdown"
                                                                                           aria-haspopup="true"
                                                                                           aria-expanded="false">
                                                                                            <i className="ri-more-fill"></i>
                                                                                        </a>
                                                                                        <div className="dropdown-menu">
                                                                                            <a className="dropdown-item"
                                                                                               href="#">Copy <i
                                                                                                className="ri-file-copy-line float-end text-muted"></i></a>
                                                                                            <a className="dropdown-item"
                                                                                               href="#">Save <i
                                                                                                className="ri-save-line float-end text-muted"></i></a>
                                                                                            <a className="dropdown-item"
                                                                                               href="#">Forward <i
                                                                                                className="ri-chat-forward-line float-end text-muted"></i></a>
                                                                                            <a className="dropdown-item"
                                                                                               href="#">Delete <i
                                                                                                className="ri-delete-bin-line float-end text-muted"></i></a>
                                                                                        </div>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </li>

                                                                        <li className="list-inline-item message-img-list">
                                                                            <div>
                                                                                <a className="popup-img d-inline-block m-1"
                                                                                   href="assets/images/small/img-2.jpg"
                                                                                   title="Project 2">
                                                                                    <img
                                                                                        src="assets/images/small/img-2.jpg"
                                                                                        alt=""
                                                                                        className="rounded border"/>
                                                                                </a>
                                                                            </div>
                                                                            <div className="message-img-link">
                                                                                <ul className="list-inline mb-0">
                                                                                    <li className="list-inline-item">
                                                                                        <a href="#">
                                                                                            <i className="ri-download-2-line"></i>
                                                                                        </a>
                                                                                    </li>
                                                                                    <li className="list-inline-item dropdown">
                                                                                        <a className="dropdown-toggle"
                                                                                           href="#" role="button"
                                                                                           data-bs-toggle="dropdown"
                                                                                           aria-haspopup="true"
                                                                                           aria-expanded="false">
                                                                                            <i className="ri-more-fill"></i>
                                                                                        </a>
                                                                                        <div
                                                                                            className="dropdown-menu dropdown-menu-end">
                                                                                            <a className="dropdown-item"
                                                                                               href="#">Copy <i
                                                                                                className="ri-file-copy-line float-end text-muted"></i></a>
                                                                                            <a className="dropdown-item"
                                                                                               href="#">Save <i
                                                                                                className="ri-save-line float-end text-muted"></i></a>
                                                                                            <a className="dropdown-item"
                                                                                               href="#">Forward <i
                                                                                                className="ri-chat-forward-line float-end text-muted"></i></a>
                                                                                            <a className="dropdown-item"
                                                                                               href="#">Delete <i
                                                                                                className="ri-delete-bin-line float-end text-muted"></i></a>
                                                                                        </div>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </li>
                                                                    </ul>
                                                                    <p className="chat-time mb-0"><i
                                                                        className="ri-time-line align-middle"></i> <span
                                                                        className="align-middle">10:09</span></p>
                                                                </div>

                                                                <div className="dropdown align-self-start">
                                                                    <a className="dropdown-toggle" href="#"
                                                                       role="button" data-bs-toggle="dropdown"
                                                                       aria-haspopup="true" aria-expanded="false">
                                                                        <i className="ri-more-2-fill"></i>
                                                                    </a>
                                                                    <div className="dropdown-menu dropdown-menu-end">
                                                                        <a className="dropdown-item" href="#">Copy <i
                                                                            className="ri-file-copy-line float-end text-muted"></i></a>
                                                                        <a className="dropdown-item" href="#">Save <i
                                                                            className="ri-save-line float-end text-muted"></i></a>
                                                                        <a className="dropdown-item" href="#">Forward <i
                                                                            className="ri-chat-forward-line float-end text-muted"></i></a>
                                                                        <a className="dropdown-item" href="#">Delete <i
                                                                            className="ri-delete-bin-line float-end text-muted"></i></a>
                                                                    </div>
                                                                </div>

                                                            </div>

                                                            <div className="conversation-name">Doris Brown</div>
                                                        </div>

                                                    </div>
                                                </li>

                                                <li className="right">
                                                    <div className="conversation-list">
                                                        <div className="chat-avatar">
                                                            <img src="assets/images/users/avatar-1.jpg" alt=""/>
                                                        </div>

                                                        <div className="user-chat-content">
                                                            <div className="ctext-wrap">

                                                                <div className="ctext-wrap-content">
                                                                    <div className="card p-2 mb-2">
                                                                        <div className="d-flex align-items-center">
                                                                            <div className="avatar-sm me-3 ms-0">
                                                                                <div
                                                                                    className="avatar-title bg-soft-primary text-primary rounded font-size-20">
                                                                                    <i className="ri-file-text-fill"></i>
                                                                                </div>
                                                                            </div>
                                                                            <div className="flex-1">
                                                                                <div className="text-start">
                                                                                    <h5 className="font-size-14 mb-1">admin_v1.0.zip</h5>
                                                                                    <p className="text-muted font-size-13 mb-0">12.5
                                                                                        MB</p>
                                                                                </div>
                                                                            </div>
                                                                            <div className="ms-4 me-0">
                                                                                <ul className="list-inline mb-0 font-size-20">
                                                                                    <li className="list-inline-item me-2 ms-0">
                                                                                        <a href="#"
                                                                                           className="text-muted">
                                                                                            <i className="ri-download-2-line"></i>
                                                                                        </a>
                                                                                    </li>
                                                                                    <li className="list-inline-item dropdown">
                                                                                        <a className="dropdown-toggle text-muted"
                                                                                           href="#" role="button"
                                                                                           data-bs-toggle="dropdown"
                                                                                           aria-haspopup="true"
                                                                                           aria-expanded="false">
                                                                                            <i className="ri-more-fill"></i>
                                                                                        </a>
                                                                                        <div
                                                                                            className="dropdown-menu dropdown-menu-end">
                                                                                            <a className="dropdown-item"
                                                                                               href="#">Share <i
                                                                                                className="ri-share-line float-end text-muted"></i></a>
                                                                                            <a className="dropdown-item"
                                                                                               href="#">Delete <i
                                                                                                className="ri-delete-bin-line float-end text-muted"></i></a>
                                                                                        </div>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                    <p className="chat-time mb-0"><i
                                                                        className="ri-time-line align-middle"></i> <span
                                                                        className="align-middle">10:16</span></p>
                                                                </div>

                                                                <div className="dropdown align-self-start">
                                                                    <a className="dropdown-toggle" href="#"
                                                                       role="button" data-bs-toggle="dropdown"
                                                                       aria-haspopup="true" aria-expanded="false">
                                                                        <i className="ri-more-2-fill"></i>
                                                                    </a>
                                                                    <div className="dropdown-menu dropdown-menu-end">
                                                                        <a className="dropdown-item" href="#">Copy <i
                                                                            className="ri-file-copy-line float-end text-muted"></i></a>
                                                                        <a className="dropdown-item" href="#">Save <i
                                                                            className="ri-save-line float-end text-muted"></i></a>
                                                                        <a className="dropdown-item" href="#">Forward <i
                                                                            className="ri-chat-forward-line float-end text-muted"></i></a>
                                                                        <a className="dropdown-item" href="#">Delete <i
                                                                            className="ri-delete-bin-line float-end text-muted"></i></a>
                                                                    </div>
                                                                </div>

                                                            </div>

                                                            <div className="conversation-name">Patricia Smith</div>
                                                        </div>

                                                    </div>
                                                </li>

                                                <li>
                                                    <div className="conversation-list">
                                                        <div className="chat-avatar">
                                                            <img src="assets/images/users/avatar-4.jpg" alt=""/>
                                                        </div>

                                                        <div className="user-chat-content">
                                                            <div className="ctext-wrap">
                                                                <div className="ctext-wrap-content">
                                                                    <p className="mb-0">
                                                                        typing
                                                                        <span className="animate-typing">
                                                            <span className="dot"></span>
                                                            <span className="dot"></span>
                                                            <span className="dot"></span>
                                                        </span>
                                                                    </p>
                                                                </div>
                                                            </div>

                                                            <div className="conversation-name">Doris Brown</div>
                                                        </div>

                                                    </div>
                                                </li>

                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="simplebar-placeholder" ></div>
                        </div>
                        <div className="simplebar-track simplebar-horizontal" >
                            <div className="simplebar-scrollbar"
                                 ></div>
                        </div>
                        <div className="simplebar-track simplebar-vertical" >
                            <div className="simplebar-scrollbar"
                                 ></div>
                        </div>
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
                                                <i className="ri-emotion-happy-line"></i>
                                            </button>
                                        </li>
                                        <li className="list-inline-item" data-bs-toggle="tooltip"
                                            data-bs-placement="top" title="Attached File">
                                            <button type="button"
                                                    className="btn btn-link text-decoration-none font-size-16 btn-lg waves-effect">
                                                <i className="ri-attachment-line"></i>
                                            </button>
                                        </li>
                                        <li className="list-inline-item">
                                            <button type="submit"
                                                    className="btn btn-primary font-size-16 btn-lg chat-send waves-effect waves-light">
                                                <i className="ri-send-plane-2-fill"></i>
                                            </button>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="user-profile-sidebar">
                    <div className="px-3 px-lg-4 pt-3 pt-lg-4">
                        <div className="user-chat-nav text-end">
                            <button type="button" className="btn nav-btn" id="user-profile-hide">
                                <i className="ri-close-line"></i>
                            </button>
                        </div>
                    </div>

                    <div className="text-center p-4 border-bottom">
                        <div className="mb-4">
                            <img src="assets/images/users/avatar-4.jpg"
                                 className="rounded-circle avatar-lg img-thumbnail" alt=""/>
                        </div>

                        <h5 className="font-size-16 mb-1 text-truncate">Doris Brown</h5>
                        <p className="text-muted text-truncate mb-1"><i
                            className="ri-record-circle-fill font-size-10 text-success me-1 ms-0"></i> Active</p>
                    </div>

                    <div className="p-4 user-profile-desc" data-simplebar="init">
                        <div className="simplebar-wrapper"  >
                            <div className="simplebar-height-auto-observer-wrapper">
                                <div className="simplebar-height-auto-observer"></div>
                            </div>
                            <div className="simplebar-mask">
                                <div className="simplebar-offset" >
                                    <div className="simplebar-content-wrapper" >
                                        <div className="simplebar-content"  >
                                            <div className="text-muted">
                                                <p className="mb-4">If several languages coalesce, the grammar of the
                                                    resulting language is more simple and regular than that of the
                                                    individual.</p>
                                            </div>

                                            <div className="accordion" id="myprofile">

                                                <div className="accordion-item card border mb-2">
                                                    <div className="accordion-header" id="about3">
                                                        <button className="accordion-button" type="button"
                                                                data-bs-toggle="collapse" data-bs-target="#aboutprofile"
                                                                aria-expanded="true" aria-controls="aboutprofile">
                                                            <h5 className="font-size-14 m-0">
                                                                <i className="ri-user-2-line me-2 ms-0 align-middle d-inline-block"></i> About
                                                            </h5>
                                                        </button>
                                                    </div>
                                                    <div id="aboutprofile" className="accordion-collapse collapse show"
                                                         aria-labelledby="about3" data-bs-parent="#myprofile">
                                                        <div className="accordion-body">
                                                            <div>
                                                                <p className="text-muted mb-1">Name</p>
                                                                <h5 className="font-size-14">Doris Brown</h5>
                                                            </div>

                                                            <div className="mt-4">
                                                                <p className="text-muted mb-1">Email</p>
                                                                <h5 className="font-size-14">adc@123.com</h5>
                                                            </div>

                                                            <div className="mt-4">
                                                                <p className="text-muted mb-1">Time</p>
                                                                <h5 className="font-size-14">11:40 AM</h5>
                                                            </div>

                                                            <div className="mt-4">
                                                                <p className="text-muted mb-1">Location</p>
                                                                <h5 className="font-size-14 mb-0">California, USA</h5>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="accordion-item card border">
                                                    <div className="accordion-header" id="attachfile3">
                                                        <button className="accordion-button collapsed" type="button"
                                                                data-bs-toggle="collapse"
                                                                data-bs-target="#attachprofile" aria-expanded="false"
                                                                aria-controls="attachprofile">
                                                            <h5 className="font-size-14 m-0">
                                                                <i className="ri-attachment-line me-2 ms-0 align-middle d-inline-block"></i> Attached
                                                                Files
                                                            </h5>
                                                        </button>
                                                    </div>
                                                    <div id="attachprofile" className="accordion-collapse collapse"
                                                         aria-labelledby="attachfile3" data-bs-parent="#myprofile">
                                                        <div className="accordion-body">
                                                            <div className="card p-2 border mb-2">
                                                                <div className="d-flex align-items-center">
                                                                    <div className="avatar-sm me-3 ms-0">
                                                                        <div
                                                                            className="avatar-title bg-soft-primary text-primary rounded font-size-20">
                                                                            <i className="ri-file-text-fill"></i>
                                                                        </div>
                                                                    </div>
                                                                    <div className="flex-1">
                                                                        <div className="text-start">
                                                                            <h5 className="font-size-14 mb-1">admin_v1.0.zip</h5>
                                                                            <p className="text-muted font-size-13 mb-0">12.5
                                                                                MB</p>
                                                                        </div>
                                                                    </div>

                                                                    <div className="ms-4 me-0">
                                                                        <ul className="list-inline mb-0 font-size-18">
                                                                            <li className="list-inline-item">
                                                                                <a href="#" className="text-muted px-1">
                                                                                    <i className="ri-download-2-line"></i>
                                                                                </a>
                                                                            </li>
                                                                            <li className="list-inline-item dropdown">
                                                                                <a className="dropdown-toggle text-muted px-1"
                                                                                   href="#" role="button"
                                                                                   data-bs-toggle="dropdown"
                                                                                   aria-haspopup="true"
                                                                                   aria-expanded="false">
                                                                                    <i className="ri-more-fill"></i>
                                                                                </a>
                                                                                <div
                                                                                    className="dropdown-menu dropdown-menu-end">
                                                                                    <a className="dropdown-item"
                                                                                       href="#">Action</a>
                                                                                    <a className="dropdown-item"
                                                                                       href="#">Another action</a>
                                                                                    <div
                                                                                        className="dropdown-divider"></div>
                                                                                    <a className="dropdown-item"
                                                                                       href="#">Delete</a>
                                                                                </div>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="card p-2 border mb-2">
                                                                <div className="d-flex align-items-center">
                                                                    <div className="avatar-sm me-3 ms-0">
                                                                        <div
                                                                            className="avatar-title bg-soft-primary text-primary rounded font-size-20">
                                                                            <i className="ri-image-fill"></i>
                                                                        </div>
                                                                    </div>
                                                                    <div className="flex-1">
                                                                        <div className="text-start">
                                                                            <h5 className="font-size-14 mb-1">Image-1.jpg</h5>
                                                                            <p className="text-muted font-size-13 mb-0">4.2
                                                                                MB</p>
                                                                        </div>
                                                                    </div>

                                                                    <div className="ms-4 me-0">
                                                                        <ul className="list-inline mb-0 font-size-18">
                                                                            <li className="list-inline-item">
                                                                                <a href="#" className="text-muted px-1">
                                                                                    <i className="ri-download-2-line"></i>
                                                                                </a>
                                                                            </li>
                                                                            <li className="list-inline-item dropdown">
                                                                                <a className="dropdown-toggle text-muted px-1"
                                                                                   href="#" role="button"
                                                                                   data-bs-toggle="dropdown"
                                                                                   aria-haspopup="true"
                                                                                   aria-expanded="false">
                                                                                    <i className="ri-more-fill"></i>
                                                                                </a>
                                                                                <div
                                                                                    className="dropdown-menu dropdown-menu-end">
                                                                                    <a className="dropdown-item"
                                                                                       href="#">Action</a>
                                                                                    <a className="dropdown-item"
                                                                                       href="#">Another action</a>
                                                                                    <div
                                                                                        className="dropdown-divider"></div>
                                                                                    <a className="dropdown-item"
                                                                                       href="#">Delete</a>
                                                                                </div>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="card p-2 border mb-2">
                                                                <div className="d-flex align-items-center">
                                                                    <div className="avatar-sm me-3 ms-0">
                                                                        <div
                                                                            className="avatar-title bg-soft-primary text-primary rounded font-size-20">
                                                                            <i className="ri-image-fill"></i>
                                                                        </div>
                                                                    </div>
                                                                    <div className="flex-1">
                                                                        <div className="text-start">
                                                                            <h5 className="font-size-14 mb-1">Image-2.jpg</h5>
                                                                            <p className="text-muted font-size-13 mb-0">3.1
                                                                                MB</p>
                                                                        </div>
                                                                    </div>

                                                                    <div className="ms-4 me-0">
                                                                        <ul className="list-inline mb-0 font-size-18">
                                                                            <li className="list-inline-item">
                                                                                <a href="#" className="text-muted px-1">
                                                                                    <i className="ri-download-2-line"></i>
                                                                                </a>
                                                                            </li>
                                                                            <li className="list-inline-item dropdown">
                                                                                <a className="dropdown-toggle text-muted px-1"
                                                                                   href="#" role="button"
                                                                                   data-bs-toggle="dropdown"
                                                                                   aria-haspopup="true"
                                                                                   aria-expanded="false">
                                                                                    <i className="ri-more-fill"></i>
                                                                                </a>
                                                                                <div
                                                                                    className="dropdown-menu dropdown-menu-end">
                                                                                    <a className="dropdown-item"
                                                                                       href="#">Action</a>
                                                                                    <a className="dropdown-item"
                                                                                       href="#">Another action</a>
                                                                                    <div
                                                                                        className="dropdown-divider"></div>
                                                                                    <a className="dropdown-item"
                                                                                       href="#">Delete</a>
                                                                                </div>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="card p-2 border mb-2">
                                                                <div className="d-flex align-items-center">
                                                                    <div className="avatar-sm me-3 ms-0">
                                                                        <div
                                                                            className="avatar-title bg-soft-primary text-primary rounded font-size-20">
                                                                            <i className="ri-file-text-fill"></i>
                                                                        </div>
                                                                    </div>
                                                                    <div className="flex-1">
                                                                        <div className="text-start">
                                                                            <h5 className="font-size-14 mb-1">Landing-A.zip</h5>
                                                                            <p className="text-muted font-size-13 mb-0">6.7
                                                                                MB</p>
                                                                        </div>
                                                                    </div>

                                                                    <div className="ms-4 me-0">
                                                                        <ul className="list-inline mb-0 font-size-18">
                                                                            <li className="list-inline-item">
                                                                                <a href="#" className="text-muted px-1">
                                                                                    <i className="ri-download-2-line"></i>
                                                                                </a>
                                                                            </li>
                                                                            <li className="list-inline-item dropdown">
                                                                                <a className="dropdown-toggle text-muted px-1"
                                                                                   href="#" role="button"
                                                                                   data-bs-toggle="dropdown"
                                                                                   aria-haspopup="true"
                                                                                   aria-expanded="false">
                                                                                    <i className="ri-more-fill"></i>
                                                                                </a>
                                                                                <div
                                                                                    className="dropdown-menu dropdown-menu-end">
                                                                                    <a className="dropdown-item"
                                                                                       href="#">Action</a>
                                                                                    <a className="dropdown-item"
                                                                                       href="#">Another action</a>
                                                                                    <div
                                                                                        className="dropdown-divider"></div>
                                                                                    <a className="dropdown-item"
                                                                                       href="#">Delete</a>
                                                                                </div>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="simplebar-placeholder"  ></div>
                        </div>
                        <div className="simplebar-track simplebar-horizontal"  >
                            <div className="simplebar-scrollbar"
                                  ></div>
                        </div>
                        <div className="simplebar-track simplebar-vertical"  >
                            <div className="simplebar-scrollbar" ></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="audiocallModal" >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body">
                            <div className="text-center p-4">
                                <div className="avatar-lg mx-auto mb-4">
                                    <img src="assets/images/users/avatar-4.jpg" alt=""
                                         className="img-thumbnail rounded-circle"/>
                                </div>

                                <h5 className="text-truncate">Doris Brown</h5>
                                <p className="text-muted">Start Audio Call</p>

                                <div className="mt-5">
                                    <ul className="list-inline mb-1">
                                        <li className="list-inline-item px-2 me-2 ms-0">
                                            <button type="button" className="btn btn-danger avatar-sm rounded-circle"
                                                    data-bs-dismiss="modal">
                                                <span className="avatar-title bg-transparent font-size-20">
                                                    <i className="ri-close-fill"></i>
                                                </span>
                                            </button>
                                        </li>
                                        <li className="list-inline-item px-2">
                                            <button type="button" className="btn btn-success avatar-sm rounded-circle">
                                                <span className="avatar-title bg-transparent font-size-20">
                                                    <i className="ri-phone-fill"></i>
                                                </span>
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="videocallModal" >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body">
                            <div className="text-center p-4">
                                <div className="avatar-lg mx-auto mb-4">
                                    <img src="assets/images/users/avatar-4.jpg" alt=""
                                         className="img-thumbnail rounded-circle"/>
                                </div>

                                <h5 className="text-truncate">Doris Brown</h5>
                                <p className="text-muted mb-0">Start Video Call</p>

                                <div className="mt-5">
                                    <ul className="list-inline mb-1">
                                        <li className="list-inline-item px-2 me-2 ms-0">
                                            <button type="button" className="btn btn-danger avatar-sm rounded-circle"
                                                    data-bs-dismiss="modal">
                                                <span className="avatar-title bg-transparent font-size-20">
                                                    <i className="ri-close-fill"></i>
                                                </span>
                                            </button>
                                        </li>
                                        <li className="list-inline-item px-2">
                                            <button type="button" className="btn btn-success avatar-sm rounded-circle">
                                                <span className="avatar-title bg-transparent font-size-20">
                                                    <i className="ri-vidicon-fill"></i>
                                                </span>
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
