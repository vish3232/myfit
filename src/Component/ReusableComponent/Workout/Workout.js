import React,{useState} from 'react'
import './Workout.css'
import workoutimage from '../../Assets/Group_238.png'
function Workout() {
    //state declaration
    const [searchKeyword,setsearchKeyword]=useState('Jumping Jack')
    
    return (
        <div className='workout-list-main-container' >
            {/*search bar design started */}
            <div className='search-bar-container' >
                <div className='search-bar-input-container' >
                <input onChange={(e)=>setsearchKeyword(e.target.value)} value={searchKeyword} className='search-bar-input' />
                </div>
                <div className='search-button' >
                    <label className='search-header' >Search</label>
                </div>
            </div>
            {/*search bar design ended */}
            
            {/*search result continer */ }
            <div className='search-result-container' >
                <div className='workout-image-container' >
                    <img className='workout-image' src={workoutimage} />
                </div>
                <div className='workout-content-container' >
                    <div className='workout-header-container' >
                        <div className='name-header' >Name</div>
                        <div className='name-header' >Reps</div>
                        <div className='name-header' >Calorie Burn</div>
                    </div>
                    <div className='value-content-container' >
                        <div className='name-value-header' >Jumping Jack</div>
                        <div className='name-value-header' >05</div>
                        <div className='name-value-header' >30 Burn</div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Workout
