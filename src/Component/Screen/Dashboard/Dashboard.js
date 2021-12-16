import React from 'react'
import Card from '../../ReusableComponent/Card/Card'
import './Dashboard.css'
function Dashboard() {
    return (
        <div className="dashboard-main-container" >
        <div className="dashboard-main-header-container" >
            <div>
                <div className="feature-name-header" >
                Nutrition plan
                </div>
                <div className="routing-path-container" >
                {"Home > Nutrition plan"}
                </div>
            </div>

            <div className="Add-new-plan-container" >
                <div className="add-icon-container" >
                <i className="material-icons add-icon">add</i>
           
                </div>
                <div className="add-new-plan-header" >
                Add New Plan
                </div>
            </div>

            
        </div>
        <div className="search-bar-container" >
                    <input placeholder="Search For Plan" className="input-container" />
                <div className="search-icon-container" >
                <i className="material-icons search-icon">search</i>
                </div>
        </div>
        <div className="cardList-main-container" >
        <Card/>
        <Card/>
        <Card/>
        <Card/>

        </div>

        <div className="cardList-main-container" >
        <Card/>
        <Card/>
        <Card/>
        <Card/>

        </div>
        
        <div className="cardList-main-container" >
        <Card/>
        <Card/>
        <Card/>
        <Card/>

        </div>
        
        </div>
    )
}

export default Dashboard
