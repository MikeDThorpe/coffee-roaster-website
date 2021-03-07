let OrderOption = ({order, createOrder, category, title, description}) => {

    return (
        <section style={order[category] === title ? {backgroundColor: "#0E8784", color: "#fff"} : {backgroundColor: "#E2DEDB"}} onClick={(e) => createOrder(e, category)} className="order-option" id={title}>
            <h5>{title}</h5>
            <p>{description}</p>
        </section>
    )
}
export default OrderOption