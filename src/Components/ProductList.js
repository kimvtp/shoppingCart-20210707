import React, { Component } from "react";
import { connect } from 'react-redux';

import ProductItem from "./ProductItem";

class ProductList extends Component {
    constructor(props){
        super(props);
        this.state = {
            productList: [
                {
                    id: "product-01",
                    productName: "Herbal tea",
                    description: "This is Herbal tea",
                    image: {
                        src: "aplusautomation.jpg",
                        alt: "aplusautomation"
                    },
                    price: 5,
                    canBuy: true
            
                },
                {
                    id: "product-02",
                    productName: "Cake ABC",
                    description: "this is Cake ABC",
                    image: {
                        src: "aplus-media.jpg",
                        alt: "aplus-media"
                    },
                    price: 2,
                    canBuy: false
            
                },
                {
                    id: "product-03",
                    productName: "Cookies",
                    description: "This is Cookies",
                    image: {
                        src: "robo_fig_combo.jpg",
                        alt: "charmander"
                    },
                    price: 3,
                    canBuy: true
            
                },
                {
                    id: "product-04",
                    productName: "Clothes",
                    description: "This is Clothes",
                    image: {
                        src: "aplusautomation.jpg",
                        alt: "aplusautomation"
                    },
                    price: 3,
                    canBuy: false
            
                },
                {
                    id: "product-05",
                    productName: "Okiela",
                    description: "Okiela",
                    image: {
                        src: "robo_fig_combo.jpg",
                        alt: "charmander"
                    },
                    price: 3,
                    canBuy: true
            
                },
              
            ]
        }
    }
    render() {
        let {productList} = this.state;
        let itemList = null;
        if (productList.length !==0 ) {
            itemList = productList.map((item, index) => {
                return <ProductItem key={index+1} product={item} />
            })
        }
        
		return (
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
            <div className="panel panel-primary"> 
                <div className="panel-heading"><h1 className="panel-title">List Products</h1></div> 
                    <div className="panel-body" id="list-product">
                        {itemList}
                    </div>
                </div>
            </div>
        );
	}
    
  }
    
 export default connect(null, null ) (ProductList);