import CoffeeBean from '../../assets/home/desktop/icon-coffee-bean.svg'
import Gift from '../../assets/home/desktop/icon-gift.svg'
import Truck from '../../assets/home/desktop/icon-truck.svg'

let SellingPoints = () => {
    return (
        <section className="selling-points">
            <h3>Why coffeeroasters?</h3>
            <p>A large part of our role is choosing which particular coffees will be featured  in our range. This means working closely with the best coffee growers to give you a more impactful experience on every level.</p>
            <section>
                <article>
                    <img alt="coffee bean icon" src={CoffeeBean} />
                    <div>
                        <h4>Quality Coffee</h4>
                        <p>Discover an outstanding variety of the world's best artisan coffee</p>
                    </div>
                </article>
                <article>
                    <img alt="present icon" src={Gift} />
                    <div>
                        <h4>Exclusive Benefits</h4>
                        <p>Receive special offers and exclusive merchandise when you subscribe</p>
                    </div>
                </article>
                <article>
                    <img alt="delivery truck icon" src={Truck} />
                    <div>
                        <h4>Free shipping</h4>
                        <p>Enjoy free shipping straight to your door. Peak freshness guaranteed</p>
                    </div>
                </article>
            </section>
        </section>
    )
}

export default SellingPoints