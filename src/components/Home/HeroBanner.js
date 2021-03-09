import {Button} from '../global'

let HeroBanner = () => {
    return (
        <section className="home-hero-banner">
            <div>
                <h1>
                    Great coffee made simple
                </h1>
                <p>
                    Start your morning with the world's best coffees. Our expertly curated
                    artisan coffees are delivered directly to your day at a time that suits you.
                </p>
                <Button text="Create Plan" link="/coffee-roaster-website/subscription"/>
            </div>
        </section>
    )
}

export default HeroBanner
