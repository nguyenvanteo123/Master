import React, { Component } from 'react'
import ProductItem from './ProductItem'

export default class ProducList extends Component {
    

    render() {
        return (
            <div class="bg-dark">
                <h1 className="text-center text-white pd-1">BEST SMARTPHONE</h1>
                <div class="row bg-dark">
                    <div class="col-3">
                        <ProductItem/>
                    </div>
                    <div class="col-3">
                        <ProductItem/>
                    </div>
                    <div class="col-3">
                        <ProductItem/>
                    </div>
                    <div class="col-3">
                        <ProductItem/>
                    </div>
                </div>
            </div>
        )
    }
}
