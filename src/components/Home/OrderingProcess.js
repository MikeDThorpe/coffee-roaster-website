import { Button } from '../global'

let OrderingProcess = () => {
    return (
        <section className="ordering-process">
            <h2>How it works</h2>
            <section>
                <article>
                    <h1>01</h1>
                    <h3>Pick your coffee</h3>
                    <p>
                        Select from our ever growing range of artisan coffee. Our beans article
                        ethhically sourced and we support local farmers with fair trade pricing. Every month
                        we introduce new coffee to our range for you to try.
                </p>
                </article>
                <article>
                    <h1>02</h1>
                    <h3>Create a plan</h3>
                    <p>
                        Choose how often you would like your coffee delivered, together with your preferred
                        roast style and grind type. You can pause, skip and cancel your subscription at any time
                        using your online coffee roasters account.
                </p>
                </article>
                <article>
                    <h1>03</h1>
                    <h3>Drink & enjoy!</h3>
                    <p>
                        We'll deliver your first bacth of freshly roasted coffee within 48 hours of your order. Then all you
                        have to do is sit back, relax and enjoy your coffee experience.
                </p>
                </article>
            </section>
            <Button text="Create your plan" link="/subscription" />
        </section>
    )
}

export default OrderingProcess