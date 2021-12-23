import React, { Component } from 'react'
import TopBarHeader from '../../ReusableComponent/TopBarHeader/TopBarHeader'
import './AddExercise.css'
import drag_and_drop from '../../Assets/drag_and_drop.png'
export default class AddExercise extends Component {
    render() {
        return (
            <div className='add-exercise-main-container' >
            <div className='menu-container' >

            </div>
            <div className='add-exercise-sub-container' >
                <TopBarHeader/>
                <div className='add-new-exercise-header' >Add new excercise</div>
                <div className='page-path-header' >{"Home > My > Workout > Add Workout > Add Excerse"}</div>

                <div className='add-exercise-input-container' >
                    <div className='input-main-container' >
                        <div className='title-input-container' >
                            <div className='title-header' >
                            Title
                            </div>
                            <div className='title-input-for-text' >
                                <input className='title-input' />
                            </div>
                        </div>
                        
                        <div className='title-input-container' >
                            <div className='title-header' >
                            Type
                            </div>
                            <div className='title-input-for-text' >
                                <input className='title-input' />
                            </div>
                        </div>
                        
                        <div className='title-input-container' >
                            <div className='title-header' >
                            Instruction
                            </div>
                            <div className='title-input-for-text' >
                                <textarea className='instruction-text-area' />
                            </div>
                        </div>

                        <div className='title-input-container' >
                            <div className='title-header' >
                            Calorie Burn
                            </div>
                            <div className='title-input-for-text' >
                                <input className='calorie-burn-input' />
                            </div>
                        </div>

                        <div className='title-input-container' >
                            <div className='title-header' >
                            Rep / Time
                            </div>
                            <div className='title-input-for-text' >
                                <input className='reps-and-time-input' />
                            </div>
                            
                        </div>

                        <div className='title-input-container' >
                            <div className='title-header' >
                            Thumbnail
                            </div>
                            <div className='thumbail-container' >
                                +
                            </div>
                            
                        </div>

                    </div>
                    <div className='image-upload-container' >
                        <div className='drag-drop-image-header' >Drag and Drop Video or Add Video</div>
                        <div className='drag-drop-image-upload' >
                            <img src={drag_and_drop} className='drag-drop-image' />
                        </div>
                    </div>
                    <div className='close-save-button-container' >
                        <div className='close-button-container' >
                            <div className='close-header' >Close</div>
                        </div>
                        <div className='save-button-container' >
                            <div className='save-header'  >Save</div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}
