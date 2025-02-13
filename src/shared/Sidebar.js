import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { instance } from "../utils/apiUtils";
// import "../App.scss";
const SideBar = (props) => {
  const [listMenu, setListMenu] = useState([]);
  //   const role = sessionStorage.getItem("id_user") ? sessionStorage.getItem("id_user") : 1 ;
  //   useEffect(() => {
  //     instance
  //       .get(`/users/${role}/menu`)
  //       .then((res) => {
  //         setListMenu(res.data.result.data);

  //         // console.log(res.data.result.data.filter(filterMenu));
  //       })
  //       .catch((e) => console.log(e));
  //   }, [role]);
  const { locations } = props;
  const location = locations.pathname;

  return (
    <>
      <div className="app-menu navbar-menu">
        <div className="navbar-brand-box text-center">
          {/* <!-- Dark Logo--> */}
          <Link to="/" className="logo logo-dark">
            <span className="logo-sm">
              <img
                src={require("../assets/images/logo-sm.png")}
                alt=""
                height="30"
              />
            </span>
            <span className="logo-lg">
              <img
                src={require("../assets/images/main-logo.png")}
                alt=""
                height="30"
              />
            </span>
          </Link>
          {/* <!-- Light Logo--> */}
          <Link to="/" className="logo logo-light">
            <span className="logo-sm">
              <img
                src={require("../assets/images/logo-sm.png")}
                alt=""
                height="30"
              />
            </span>
            <span className="logo-lg">
              <img src={require("../assets/images/main-logo.png")} alt="" height="30" />
            </span>
          </Link>
          <button
            type="button"
            className="btn btn-sm p-0 fs-20 header-item float-end btn-vertical-sm-hover"
            id="vertical-hover"
          >
            <i className="ri-record-circle-line"></i>
          </button>
        </div>
        <div id="scrollbar" style={{ backgroundColor: "#008F7A" }}>
          <div className="container-fluid">
            <div id="two-column-menu"></div>
            <ul className="navbar-nav" id="navbar-nav">
              <li className="menu-title opacity-0">
                <span className="p-0" data-key="t-menu">
                  Menu
                </span>
              </li>

              <li className="nav-item">
                <Link
                  className={
                    location === "/dashboard"
                      ? "nav-link menu-link active"
                      : "nav-link menu-link"
                  }
                  to="/dashboard"
                >
                  <i className="ri-dashboard-line"></i>{" "}
                  <span className="fw-600" data-key="test">
                    Dashboard
                  </span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={
                    location === "/inbox"
                      ? "nav-link menu-link active"
                      : "nav-link menu-link"
                  }
                  to="/inbox"
                >
                  <i className="ri-mail-line"></i>{" "}
                  <span className="fw-600" data-key="inbox">
                    Inbox
                  </span>
                </Link>
              </li>
              <li className="nav-item">
                <a
                  className={"nav-link menu-link"}
                  href="#inventory"
                  data-bs-toggle="collapse"
                  role="button"
                  aria-expanded="false"
                  aria-controls="inventory"
                >
                  <i className="ri-folder-check-line"></i>
                  <span className="fw-600" data-key="inventory">
                    inventory
                  </span>
                </a>
                <div className="collapse menu-dropdown" id="inventory">
                  <ul className="nav nav-sm flex-column">
                    <li className="nav-item">
                      <Link
                        to="inventory/request"
                        className={
                          location === "inventory/request"
                            ? "nav-link active"
                            : "nav-link"
                        }
                        data-key="request"
                      >
                        Request
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        to="inventory/distribusi"
                        className={
                          location === "inventory/distribusi"
                            ? "nav-link active"
                            : "nav-link"
                        }
                        data-key="distribusi"
                      >
                        Distribusi
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        to="inventory/monitoring"
                        className={
                          location === "inventory/monitoring"
                            ? "nav-link active"
                            : "nav-link"
                        }
                        data-key="monitoring"
                      >
                        Monitoring
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              
              <li className="nav-item">
                <a
                  className={"nav-link menu-link"}
                  href="#master-data"
                  data-bs-toggle="collapse"
                  role="button"
                  aria-expanded="false"
                  aria-controls="master-data"
                >
                  <i className="ri-database-2-fill"></i>
                  <span className="fw-600" data-key="master-data">
                    Master Data
                  </span>
                </a>
                <div className="collapse menu-dropdown" id="master-data">
                  <ul className="nav nav-sm flex-column">
                    <li className="nav-item">
                      <Link
                        to="master-data/Warehouse"
                        className={
                          location === "master-data/Warehouse"
                            ? "nav-link active"
                            : "nav-link"
                        }
                        data-key="master-data/Warehouse"
                      >
                        Warehouse
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        to="master-data/stock-barang"
                        className={
                          location === "master-data/stock-barang"
                            ? "nav-link active"
                            : "nav-link"
                        }
                        data-key="master-data/stock-barang"
                      >
                        Stock Barang
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        to="master-data/ReStockBarang"
                        className={
                          location === "master-data/ReStockBarang"
                            ? "nav-link active"
                            : "nav-link"
                        }
                        data-key="master-data/ReStockBarang"
                      >
                        ReStockBarang
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        to="master-data/supplier"
                        className={
                          location === "master-data/supplier"
                            ? "nav-link active"
                            : "nav-link"
                        }
                        data-key="master-data/supplier"
                      >
                        Supplier
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        to="master-data/satuan-barang"
                        className={
                          location === "master-data/satuan-barang"
                            ? "nav-link active"
                            : "nav-link"
                        }
                        data-key="master-data/satuan-barang"
                      >
                        Satuan Barang
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        to="master-data/unit-kerja"
                        className={
                          location === "master-data/unit-kerja"
                            ? "nav-link active"
                            : "nav-link"
                        }
                        data-key="master-data/unit-kerja"
                      >
                        Unit Kerja
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              

              <li className="nav-item">
                <a
                  className={"nav-link menu-link"}
                  href="#setting"
                  data-bs-toggle="collapse"
                  role="button"
                  aria-expanded="false"
                  aria-controls="setting"
                >
                  <i className="ri-settings-3-fill"></i>
                  <span className="fw-600" data-key="setting">
                    Setting
                  </span>
                </a>
                <div className="collapse menu-dropdown" id="setting">
                  <ul className="nav nav-sm flex-column">
                    <li className="nav-item">
                      <Link
                        to="#setting"
                        className={
                          location === "setting"
                            ? "nav-link active"
                            : "nav-link"
                        }
                        data-key="setting"
                      >
                        Setting
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              
            </ul>
          </div>
        </div>

        <div className="sidebar-background"></div>
      </div>
    </>
  );
};

export default SideBar;
