import React from 'react'
import MealItemForm from './MealItemForm';
import styels from './MealItem.module.css'

function MealItem(props) {
    const price = `$${props.price.toFixed(2)}`;
    return (
        <li className={styels.meal}>
            <div>
                <div> <h3> {props.name} </h3> </div>
                <div className={styels.description}> {props.description} </div>
                <div className={styels.price}> {price} </div>
            </div>
            <div>
                <MealItemForm id={props.id} />
            </div>
        </li>
    )
}

export default MealItem
