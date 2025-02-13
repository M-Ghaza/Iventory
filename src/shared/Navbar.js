import React, { useState } from 'react'
// import "../App.scss";

const Navbar = () => {
    const [darkMode, setDarkmode] = useState(false);
    const [fullscreen,setFullScreen] = useState(false);

    const handleFullScreen = () => {
        setFullScreen(!fullscreen)
        document.body.classList.toggle("fullscreen-enable")
                    document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement
                        ? document.cancelFullScreen
                            ? document.cancelFullScreen()
                            : document.mozCancelFullScreen
                            ? document.mozCancelFullScreen()
                            : document.webkitCancelFullScreen && document.webkitCancelFullScreen()
                        : document.documentElement.requestFullscreen
                        ? document.documentElement.requestFullscreen()
                        : document.documentElement.mozRequestFullScreen
                        ? document.documentElement.mozRequestFullScreen()
                        : document.documentElement.webkitRequestFullscreen && document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
    }
    const handledarkMode = async () => { 
        setDarkmode(!darkMode)
        
        let mode;
        if(darkMode == true){
            mode = "light";
        }else{
            mode = "dark";
        }
        document.documentElement.setAttribute('data-bs-theme',mode)
        console.log(mode);
        
    }
    const minimizeSidebar = () => {
        var e = document.documentElement.clientWidth;
        console.log(document.documentElement.getAttribute("data-layout"));
        
        document.querySelector(".hamburger-icon").classList.toggle("open")
        document.documentElement.getAttribute("data-sidebar-size") == "sm" ? document.documentElement.setAttribute("data-sidebar-size", "") : document.documentElement.setAttribute("data-sidebar-size", "sm")
            "horizontal" === document.documentElement.getAttribute("data-layout") && (document.body.classList.contains("menu") ? document.body.classList.remove("menu") : document.body.classList.add("menu"))
           
            // "vertical" === document.documentElement.getAttribute("data-layout") &&
            //     (e <= 1025 && 767 < e
            //         ? (document.body.classList.remove("vertical-sidebar-enable"),
            //           "sm" == document.documentElement.getAttribute("data-sidebar-size") ? document.documentElement.setAttribute("data-sidebar-size", "") : document.documentElement.setAttribute("data-sidebar-size", "sm"))
            //         : 1025 < e
            //         ? (document.body.classList.remove("vertical-sidebar-enable"),
            //           "lg" == document.documentElement.getAttribute("data-sidebar-size") ? document.documentElement.setAttribute("data-sidebar-size", "sm") : document.documentElement.setAttribute("data-sidebar-size", "lg"))
            //         : e <= 767 && (document.body.classList.add("vertical-sidebar-enable"), document.documentElement.setAttribute("data-sidebar-size", "lg"))),
            // "semibox" === document.documentElement.getAttribute("data-layout") &&
            //     (767 < e
            //         ? "show" == document.documentElement.getAttribute("data-sidebar-visibility")
            //             ? "lg" == document.documentElement.getAttribute("data-sidebar-size")
            //                 ? document.documentElement.setAttribute("data-sidebar-size", "sm")
            //                 : document.documentElement.setAttribute("data-sidebar-size", "lg")
            //             : (document.getElementById("sidebar-visibility-show").click(), document.documentElement.setAttribute("data-sidebar-size", document.documentElement.getAttribute("data-sidebar-size")))
            //         : e <= 767 && (document.body.classList.add("vertical-sidebar-enable"), document.documentElement.setAttribute("data-sidebar-size", "lg"))),
            // "twocolumn" == document.documentElement.getAttribute("data-layout") && (document.body.classList.contains("twocolumn-panel") ? document.body.classList.remove("twocolumn-panel") : document.body.classList.add("twocolumn-panel"));
    }

    return(
        <>
<div class="layout-width">
        <div class="navbar-header">
            <div class="d-flex">
                {/* <!-- LOGO --> */}
                <div class="navbar-brand-box horizontal-logo">
                    <a href="index.html" class="logo logo-dark">
                        <span class="logo-sm">
                        <img src={require("../assets/images/logo_pendek.png")} alt="" height="30"/>
                        {/* <img src="assets/images/logo_pendek.png" alt="" height="30"/> */}
                        </span>
                        <span class="logo-lg">
                        <img src={require("../assets/images/main-logo.png")} alt="" height="30"/>
                        {/* <img src="assets/images/main-logo.png" alt="" height="30"/> */}
                        </span>
                    </a>

                    <a href="index.html" class="logo logo-light">
                        <span class="logo-sm">
                        <img src={require("../assets/images/logo_pendek.png")} alt="" height="30"/>
                        </span>
                        <span class="logo-lg">
                            {/* <img src="assets/images/main-logo.png" alt="" height="30"/> */}
                        <img src={require("../assets/images/main-logo.png")} alt="" height="30"/>

                        </span>
                    </a>
                </div>

                <button type="button" class="btn btn-sm px-3 fs-16 header-item vertical-menu-btn topnav-hamburger" id="topnav-hamburger-icon" onClick={minimizeSidebar}>
                    <span class="hamburger-icon">
                        <span></span>
                        <span></span>
                        <span></span>
                    </span>
                </button>

                {/* <!-- App Search--> */}
                <form class="app-search d-none d-md-block">
                   
                    <div class="dropdown-menu dropdown-menu-lg" id="search-dropdown">
                        <div data-simplebar style={{maxHeight:320}}>
                            {/* <!-- item--> */}
                            <div class="dropdown-header">
                                <h6 class="text-overflow text-muted mb-0 text-uppercase">Recent Searches</h6>
                            </div>

                            <div class="dropdown-item bg-transparent text-wrap">
                                <a href="index.html" class="btn btn-soft-secondary btn-sm rounded-pill">how to setup <i class="mdi mdi-magnify ms-1"></i></a>
                                <a href="index.html" class="btn btn-soft-secondary btn-sm rounded-pill">buttons <i class="mdi mdi-magnify ms-1"></i></a>
                            </div>
                            {/* <!-- item--> */}
                            <div class="dropdown-header mt-2">
                                <h6 class="text-overflow text-muted mb-1 text-uppercase">Pages</h6>
                            </div>

                            {/* <!-- item--> */}
                            <a href="javascript:void(0);" class="dropdown-item notify-item">
                                <i class="ri-bubble-chart-line align-middle fs-18 text-muted me-2"></i>
                                <span>Analytics Dashboard</span>
                            </a>

                            {/* <!-- item--> */}
                            <a href="javascript:void(0);" class="dropdown-item notify-item">
                                <i class="ri-lifebuoy-line align-middle fs-18 text-muted me-2"></i>
                                <span>Help Center</span>
                            </a>

                            {/* <!-- item--> */}
                            <a href="javascript:void(0);" class="dropdown-item notify-item">
                                <i class="ri-user-settings-line align-middle fs-18 text-muted me-2"></i>
                                <span>My account settings</span>
                            </a>

                            {/* <!-- item--> */}
                            <div class="dropdown-header mt-2">
                                <h6 class="text-overflow text-muted mb-2 text-uppercase">Members</h6>
                            </div>

                            <div class="notification-list">
                                {/* <!-- item --> */}
                                <a href="javascript:void(0);" class="dropdown-item notify-item py-2">
                                    <div class="d-flex">
                                        <img src="assets/images/users/avatar-2.jpg" class="me-3 rounded-circle avatar-xs" alt="user-pic"/>
                                        <div class="flex-grow-1">
                                            <h6 class="m-0">Angela Bernier</h6>
                                            <span class="fs-11 mb-0 text-muted">Manager</span>
                                        </div>
                                    </div>
                                </a>
                                {/* <!-- item --> */}
                                <a href="javascript:void(0);" class="dropdown-item notify-item py-2">
                                    <div class="d-flex">
                                        <img src="assets/images/users/avatar-3.jpg" class="me-3 rounded-circle avatar-xs" alt="user-pic"/>
                                        <div class="flex-grow-1">
                                            <h6 class="m-0">David Grasso</h6>
                                            <span class="fs-11 mb-0 text-muted">Web Designer</span>
                                        </div>
                                    </div>
                                </a>
                                {/* <!-- item --> */}
                                <a href="javascript:void(0);" class="dropdown-item notify-item py-2">
                                    <div class="d-flex">
                                        <img src="assets/images/users/avatar-5.jpg" class="me-3 rounded-circle avatar-xs" alt="user-pic"/>
                                        <div class="flex-grow-1">
                                            <h6 class="m-0">Mike Bunch</h6>
                                            <span class="fs-11 mb-0 text-muted">React Developer</span>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div class="text-center pt-3 pb-1">
                            <a href="pages-search-results.html" class="btn btn-primary btn-sm">View All Results <i class="ri-arrow-right-line ms-1"></i></a>
                        </div>
                    </div>
                </form>
            </div>

            <div class="d-flex align-items-center">

                <div class="dropdown d-md-none topbar-head-dropdown header-item">
                    <button type="button" class="btn btn-icon btn-topbar btn-ghost-secondary rounded-circle" id="page-header-search-dropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i class="bx bx-search fs-22"></i>
                    </button>
                    <div class="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0" aria-labelledby="page-header-search-dropdown">
                        <form class="p-3">
                            <div class="form-group m-0">
                                <div class="input-group">
                                    <input type="text" class="form-control" placeholder="Search ..." aria-label="Recipient's username"/>
                                    <button class="btn btn-primary" type="submit"><i class="mdi mdi-magnify"></i></button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                

                

                

                <div class="ms-1 header-item d-none d-sm-flex">
                    <button type="button" onClick={handleFullScreen} class="btn btn-icon btn-topbar btn-ghost-secondary rounded-circle" data-toggle="fullscreen">
                    <i class={fullscreen == true ? "ri-fullscreen-exit-line fs-22" : "ri-fullscreen-line fs-22"}></i>
                    </button>
                </div>

                <div class="ms-1 header-item d-none d-sm-flex">
                    <button type="button" onClick={handledarkMode} class="btn btn-icon btn-topbar btn-ghost-secondary rounded-circle light-dark-mode">
                    <i class={darkMode == false ? "ri-moon-line fs-22" : "ri-sun-line"}></i>
                    </button>
                </div>

                

                <div class="dropdown ms-sm-3 header-item topbar-user">
                    <button type="button" class="btn" id="page-header-user-dropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span class="d-flex align-items-center">
                            <img class="rounded-circle header-profile-user" src={require("../assets/images/user-dummy-img.jpg")} alt="Header Avatar"/>
                            <span class="text-start ms-xl-2">
                                <span class="d-none d-xl-inline-block ms-1 fw-medium user-name-text">Test</span>
                                <span class="d-none d-xl-block ms-1 fs-12 user-name-sub-text">Founder</span>

                            </span>
                        </span>
                    </button>
                    <div class="dropdown-menu dropdown-menu-end">
                        {/* <!-- item--> */}
                        <h6 class="dropdown-header">Welcome User!</h6>
                        
                        <a class="dropdown-item" href="logout.php"><i class="mdi mdi-logout text-muted fs-16 align-middle me-1"></i> <span class="align-middle" data-key="t-logout">Logout</span></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
        </>
    )
}

export default Navbar;