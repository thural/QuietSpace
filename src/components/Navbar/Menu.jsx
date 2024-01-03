import React, { useState, useContext } from "react"
import styles from "./styles/menuStyles"
import MainContext from "../MainContext"
import savedIcon from "../../assets/bookmark.svg"
import historyIcon from "../../assets/history.svg"
import settingsIcon from "../../assets/settings.svg"
import logoutIcon from "../../assets/log-out.svg"
import menuIcon from "../../assets/menu-line.svg"
import { useSelector } from "react-redux"
import { fetchLogout } from "../../api/requestMethods"
import { LOGOUT_URL } from "../../constants/ApiPath"



const Menu = () => {
  const user = useSelector(state => state.userReducer)

  const classes = styles()
  const { fetchUser } = useContext(MainContext)
  const [display, setDisplay] = useState('none')

  const toggleDisplay = () => {
    if (display === "none") setDisplay("block")
    else setDisplay("none")
  }

  const handleLogout = (event) => {
    event.preventDefault();
    const token = "token feature yet to be imlpemented";
    fetchLogout(LOGOUT_URL, token).then(() => fetchUser());
  }

  return (
    <div style={{ display: user.username ? "block" : "none" }}>
      <div className={classes.icon} onClick={toggleDisplay} style={{ cursor: 'pointer' }}>
        <img src={menuIcon} />
      </div>
      <div className={classes.menuOverlay} style={{ display }} onClick={toggleDisplay}></div>
      <div className={classes.menu} style={{ display }}>
        <div className="menu-item"><p>Saved</p><img src={savedIcon} /></div>
        <div className="menu-item"><p>Activity</p><img src={historyIcon} /></div>
        <div className="menu-item"><p>Settings</p><img src={settingsIcon} /></div>
        <div className="menu-item" onClick={handleLogout}><p>Logout</p><img src={logoutIcon} /></div>
      </div>
    </div>
  )
}

export default Menu