import React from 'react'
import './Card.css'
import cardImage from '../../Assets/cardimage.jpg'
function Card() {
    return (
        <div className="card-main-container" >
            <img className="card-img" src={cardImage} />
            <div className="card-header-container"  >
             <span className="card-header" > Female Fat Loss - </span> <br/> 
             <span className="card-subheader" > High Carbohydrate</span>
            </div>
            <div className="gender-value-container" >
                <div className="gender-value-header-container" >
                    <div className="gender-header" >Gender</div>
                    <div className="gender-value-header" >Female</div>
                </div>
                
                <div className="weight-value-header-container" >
                    <div className="weight-header" >Weight</div>
                    <div className="weight-value-header" >60 kg / 132 Lbs</div>
                </div>
                    
            </div>
            <div className="note-container" >
                <div className="note-header" >
                Note :
                </div>
                <div className="note-value-header" >
                This is a special nutrition plan for woman age between 18-50...
                </div>

            </div>
        </div>
    )
}

export default Card
