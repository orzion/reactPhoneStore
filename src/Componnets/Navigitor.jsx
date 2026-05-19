import { Link,NavLink } from "react-router";
function Navigitor() {
  return (
    <>
       <header className="header">
        <nav className="main-nav">
            <ul className="nav-items">
                <li className="nav-item">
                    <div className="contain-logo">
                        <NavLink className="logo" to="/"><img width="100px" height="100px"
                                src="./images/phone-store-logo.png" alt="logo"/></NavLink>
                    </div>
                </li>
                <li className="nav-item">
                    <NavLink to="/login" className="nav-link sinup-nav">login/sinup</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/category" className="nav-link">category</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="./favorites" className="nav-link">favorites</NavLink>
                </li>
                <li className="nav-item">
                    <a href="" className="nav-link">contact me</a>
                </li>
                <li className="nav-item"><a href="" className="buy-btn"><i className="fa-solid fa-cart-shopping"></i>
                    cart</a>
                </li>
            </ul>
        </nav>
    </header>
    </>
  )
}

export default Navigitor;