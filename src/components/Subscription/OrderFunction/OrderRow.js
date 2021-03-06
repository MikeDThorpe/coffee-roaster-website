import React, {useState} from 'react'
import OrderOption from './OrderOption'

let OrderRow = ({order, createOrder, category, number, title, content}) => {
    const [display, setDisplay] = useState(false);
    let [optionOne, optionTwo, optionThree] = content

    return (
        <section className="order-row" id="number">
            <div>
                <h4><span style={order[category] === "_____" ? {color: "#FDD6BA"} : {color: "#0E8784"}}>{number}</span> {title}</h4>
                <svg style={display ? {transform: "scaleY(-1)"} : {transform: "scaleY(1)"}} onClick={() => setDisplay(!display)} width="19" height="13" xmlns="http://www.w3.org/2000/svg"><path d="M15.949.586l2.828 2.828-9.096 9.096L.586 3.414 3.414.586l6.267 6.267z" fill="#0E8784" fillRule="nonzero"/></svg>
            </div>
            <section style={ display ? {display: "block"} : {display: "none"}}>
            <OrderOption createOrder={createOrder} category={category} title={optionOne.option} description={optionOne.description} />
            <OrderOption createOrder={createOrder} category={category} title={optionTwo.option} description={optionTwo.description} />
            <OrderOption createOrder={createOrder} category={category} title={optionThree.option} description={optionThree.description} />
            </section>
        </section>
    )
}
export default OrderRow