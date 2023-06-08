import React from 'react'
import Time from './Time'
import myContext from '../Context/ContexApi'
import { useContext } from 'react'

const LeftContainer = () => {

    const { state } = useContext(myContext)


    return (
        <div className='LeftContainer'>
            <div className="second_container">
                <div className="city_Display">
                   <h1>{state.city}</h1>
                    <h3>{state.country}</h3>
                </div>

                <div className="bottom_Container">
                    <Time />
                    <div className="display_celcuis">
                        <h3>{state.celcuis}°C</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LeftContainer