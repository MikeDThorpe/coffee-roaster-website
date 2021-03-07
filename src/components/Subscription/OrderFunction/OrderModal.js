import { Button } from '../../global'

let OrderModal = ({ toggleModal, order, show, orderPrice }) => {
    let {preferences, type, quantity, grind, delivery} = order;

    return (
        <main className="background" style={ show ? {display: "flex"} : {display: "none"}}>
            <section className="order-modal">
                <div className="modal-cross" onClick={() => toggleModal()}></div>
                <div className="order-modal-header">
                    <h4>Order Summary</h4>
                </div>
                <div className="order-modal-body">
                    <p>
                    "My preferred coffee is <span className="order-summary-entry">{preferences}</span>. 
                    I would like <span className="order-summary-entry">{quantity}</span> of <span className="order-summary-entry">{grind}</span>, <span className="order-summary-entry">{type}</span> coffee delivered <span className="order-summary-entry">{delivery}</span>."
                    </p>
                    <small>Is this correct? You can proceed to checkout or go back to plan selection if something is off. Subscription discount codes can also be redeemed at the checkout. </small>
                    <div>
                        <h5>{orderPrice}<br/>/month</h5>
                        <Button text="Checkout" />
                    </div>
                </div>
            </section>
        </main>
    )
}
export default OrderModal