import React, { Component } from 'react'
import Header1 from './Header1'
import ProducList from './ProducList'
import Promotion from './Promotion'
import Slide from './Slide'


export default class BaiTapLayout1 extends Component {
    render() {
        return (
            <div>
                <Header1/>
                <Slide/>
                <ProducList/>
                <Promotion/>    
            </div>
        )
    }
}
