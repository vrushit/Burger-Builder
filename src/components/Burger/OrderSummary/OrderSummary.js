import React,  { Component } from 'react';

import Aux from '../../../hoc/Aux';

import Button from '../../UI/Button/Button';


class  OrderSummary extends Component{

    componentWillUpdate() {
        console.log('[OrderSummary Will Update]');
    }

    render(){

        const ingredientSummary = Object.keys(this.props.ingredients).map(IgKey => {
            return ( <li key={IgKey}><span style={{textTransform: 'capitalize'}}>{IgKey}</span>: {this.props.ingredients[IgKey]}</li>);
    
        });

        return(
            <Aux>
            <h3>Your Order</h3>
            <p>A delicious Burger with a follwing Ingredients</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price : {this.props.price.toFixed(2)}</strong></p>
            <p>Continue to Checkout?</p>
            <Button btnType = "Danger"
            clicked ={this.props.purchaseCancelled}
            >CANCEL</Button>
            <Button btnType = "Success"
            clicked = {this.props.purchaseContinued}
            >CONTINUE</Button>
        </Aux>
        );
    }
}


export default OrderSummary;
