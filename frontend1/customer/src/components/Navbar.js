import React from "react"
import {Link} from "react-router-dom"
export default class Navbar extends React.Component{
    Logout = () => {
        localStorage.removeItem("token")
        localStorage.removeItem("customer")
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
                                PRODUCTS
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/cart" className="nav-link">
                                CART
                            </Link>
                        </li>
                        
                        <li className="nav-item">
                            <Link to="/transaction" className="nav-link">
                                TRANSACTIONS
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