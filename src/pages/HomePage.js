import React from 'react'
import {HeroBanner, CoffeeSelection, SellingPoints, OrderingProcess} from '../components/Home'

let HomePage = () => {
    return ( 
        <div>
            <HeroBanner />
            <CoffeeSelection />
            <SellingPoints />
            <OrderingProcess />
        </div>
    )
}

export default HomePage