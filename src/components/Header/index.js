import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import {FiLogOut} from 'react-icons/fi'
import {AiFillHome} from 'react-icons/ai'
//import {BsFillBriefcaseFill} from 'react-icons/bs'
import './index.css'
import Image from '../Image/im1.jpg'
import { CgProfile } from "react-icons/cg";

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }
  return (
    <>
      <nav className="nav-header">
        <div className="nav-content">
          <div className="nav-bar-mobile-container">
            <Link to="/">
              <img
                src={Image}
                className="website-logo"
                alt="website logo"
              />
            </Link>
            <ul className="nav-bar-mobile-icons-container">
              <li>
                <Link to="/">
                  <AiFillHome className="nav-item-mobile-link" />
                </Link>
              </li>
              <li>
                <Link to="/user">
                  <CgProfile className="nav-item-mobile-link" />
                </Link>
              </li>
              <li>
                <button
                  type="button"
                  className="nav-mobile-btn"
                  onClick={onClickLogout}
                >
                  Click
                  <FiLogOut />
                </button>
              </li>
            </ul>
          </div>

          <div className="nav-bar-large-container">
            <Link to="/">
              <img
                className="website-logo"
                src={Image}
                alt="website logo"
              />
            </Link>
            <ul className="nav-menu">
              <li className="nav-menu-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>

              <li className="nav-menu-item">
                <Link to="/user" className="nav-link">
                  Profile
                </Link>
              </li>
            </ul>
            <div className="large-device-button-container">
              <button
                type="button"
                className="logout-desktop-btn"
                onClick={onClickLogout}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default withRouter(Header)
