import React from "react"
import {Link} from "react-router-dom"
export default class Navbar extends React.Component{
    Logout = () => {
        localStorage.removeItem("token")
        localStorage.removeItem("admin")
        window.location = "/login"
    }
    render(){
        return(
            <div className="navbar navbar-expand-lg bg-dark navbar-dark">
                <a className="navbar-brand">
                    COM.STORE
                </a>

                {/* show and hide menu */}
                <button className="navbar-toggler" data-toggle="collapse"
                data-target="#menu">
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* menu */}
                <div id="menu" className="navbar-collapse collpase">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">
                                HOME
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/product" className="nav-link">
                                PRODUCT
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/customer" className="nav-link">
                                CUSTOMERS
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/transaction" className="nav-link">
                                TRANSACTION
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/admin" className="nav-link">
                                ADMINISTRATOR
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" onClick={() => this.Logout()}>
                                LOGOUT
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

