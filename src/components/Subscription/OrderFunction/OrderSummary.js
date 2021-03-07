import {Button} from '../../global'

let OrderSummary = ({order, toggleModal}) => {
    let {preferences, type, quantity, grind, delivery} = order;
    let newOrder = [preferences, type, quantity, grind, delivery]

    let orderTotal = 0
    for(const orderItem of newOrder) {
        if(orderItem !== "_____") {
            orderTotal = orderTotal + 1
        }
    }
    return (
        <section className="order-summary">
            <h3>Order Summary</h3>
            <div>
                <h5>
                    "My preferred coffee is <span className="order-summary-entry">{preferences}</span>. 
                    I would like <span className="order-summary-entry">{quantity}</span> of <span className="order-summary-entry">{grind}</span>, <span className="order-summary-entry">{type}</span> coffee delivered <span className="order-summary-entry">{delivery}</span>."
                </h5>
                <Button text="Create plan" disabled={orderTotal === 5 ? false : true} onClick={() => toggleModal()}/>
            </div>
        </section>
    )
}

export default OrderSummary