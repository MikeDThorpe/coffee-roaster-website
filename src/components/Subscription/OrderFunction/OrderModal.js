import { Button } from '../../global'
let OrderModal = ({ order }) => {
    return (
        <section className="order-modal">
            <div className="order-modal-header">
                <h3>Order Summary</h3>
            </div>
            <p></p>
            <small>Is this correct? You can proceed to checkout or go back to plan selection if something is off. Subscription discount codes can also be redeemed at the checkout. </small>
            <div>
                <h5></h5>
                <Button text="Checkout" />
            </div>
        </section>
    )
}
export default OrderModal;