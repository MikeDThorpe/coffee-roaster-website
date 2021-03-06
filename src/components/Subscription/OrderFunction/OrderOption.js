let OrderOption = ({createOrder, category, title, description}) => {

    return (
        <section onClick={(e) => createOrder(e, category)} className="order-option" id={title}>
            <h5>{title}</h5>
            <p>{description}</p>
        </section>
    )
}
export default OrderOption