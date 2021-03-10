import CoffeeCupDesktop from '../../assets/about/desktop/image-quality.jpg'
import CoffeeCupMobile from '../../assets/about/mobile/image-quality.jpg'
import {Button} from '../global'

let OurQuality = () => {
    return (
        <section className="our-quality-container">
            <picture>
                <source media="(min-width: 1000px)" srcset={CoffeeCupDesktop} />
                <img src={CoffeeCupMobile} alt="cup of coffee" />
            </picture>
            <div>
                <h3>Uncompromising Quality</h3>
                <p>
                    Although we work with growers who pay close attention to all stages of harvest and processing, we employ, on our end, a rigorous quality control program to avoid over-roasting or baking the coffee dry. Every bag of coffee is tagged with a roast date and batch number. Our goal is to roast
                    consistent, user-friendly coffee, so that brewing is easy and enjoyable.
                </p>
                <Button text="Create a Plan" link="/coffee-roaster-website/subscription" />
            </div>
        </section>
    )
}

export default OurQuality
