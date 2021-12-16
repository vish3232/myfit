import React from 'react'
import './TopBarHeader.css'
function TopBarHeader() {
    return (
        <div className="top-bar-main-container" >
            <div className="search-bar-main-container" >
                <div> <i className="material-icons search-icon">search</i></div>
                <div> <input className="search-bar-textinput" placeholder="Search here..." /> </div>
            </div>
            <div className="profile-and-icon-container" >
            <div className="notification-container" >
                <div className="notifications-icon-counter-container counter-header" >01</div>
                <div className="notification-icon-container" >
                <i className="material-icons notifications-icon">notifications_none</i>
                </div>
            </div>
            <div className="msg-container" >
                <div className="msg-counter-container msg-counter-header" >12</div>
                <div className="msg-icon-container" >
                <i className="material-icons msg-icon">message</i>
                </div>
            </div>
            <div>
            <div className="profile-name-header" >
            Hello, Pradip
            </div>
            <div className="position-header" >
            Yoga Trainer
            </div>

            </div>
            <div className="profile-container" >
                
            </div>
            </div>
            
        </div>
    )
}

export default TopBarHeader
