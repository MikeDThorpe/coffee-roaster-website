import Danche from '../../assets/home/desktop/image-danche.png';
import Granespresso from '../../assets/home/desktop/image-gran-espresso.png';
import Piccollo from '../../assets/home/desktop/image-piccollo.png';
import Planalto from '../../assets/home/desktop/image-planalto.png';


let CoffeeSelection = () => {
    return (
        <section className="coffee-selection">
            <h2>Our Collection</h2>
            <section>
                <article>
                    <img alt="Gran espresso coffee" src={Granespresso} />
                    <div>
                        <h3>Gran Espresso</h3>
                        <p>Light and flavourful blend with cocoa and black pepper for an intense taste</p>
                    </div>
                </article>
                <article>
                    <img alt="Piccollo coffee" src={Piccollo} />
                    <div>
                        <h3>Planalto</h3>
                        <p>Brazilian dark roast with a rich, velvety body and hints of fruits and nuts</p>
                    </div>
                </article>
                <article>
                    <img alt="Planalto coffee" src={Planalto} />
                    <div>
                        <h3>Piccolo</h3>
                        <p>Mild and smooth blend featuring notes of toasted almond and dried cherry</p>
                    </div>
                </article>
                <article>
                    <img alt="Danche coffee" src={Danche} />
                    <div>
                        <h3>Danche</h3>
                        <p>Ethiopian hand-harvested blend densely packed with vibrant fruity flavours</p>
                    </div>
                </article>
            </section>
        </section>
    )
}
export default CoffeeSelection