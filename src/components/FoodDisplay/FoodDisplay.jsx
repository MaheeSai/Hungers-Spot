import React from 'react'
import { useContext } from 'react'
import {StoreContext} from '../../context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'
import './FoodDisplay.css'

const FoodDisplay = ({category}) => {

    const {food_list} =useContext(StoreContext)


  return (
    <>
    <div className='container'>
    <div className='food-display' id='food-display' >
        <h1>Top Dishes Near You</h1>
        <div className="food-display-list">
            {
                food_list.map((item,index)=>{
                    if(category==='All' || category===item.category){
                        return <FoodItem key={index} {...item} />
                    }
                    
                })
            }
        </div>
    </div>
    </div>
    </>
  )
}

export default FoodDisplay



