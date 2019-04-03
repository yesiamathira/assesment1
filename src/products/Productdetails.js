import React, { Component } from 'react';
export  default class Productdetails extends Component{

constructor(props)
{
  super(props);
}
render(){


  return(
  <div>

<h4>Product:{this.props.details.name}</h4>
<img src={this.props.details.imageurl}></img>
<h4>Description:{this.props.details.description}</h4>
<h4>Price:{this.props.details.price}</h4>
<button type="button" class="btn btn-primary btn-lg" onClick={()=>{this.props.add("hey i am clicked")}}>Add to cart</button>
  </div>
  )
}
}