import React, { Component } from 'react';
export  default class Search extends Component{

constructor(props){

  super(props);
}

render(){
return(
    <div>
        <h1>Welcome to online shopping site!</h1>
        <input type="text" class="form-control" placeholder="search" onChange={(e)=>{this.props.searchText(e.target.value)}}></input>
        <button type="button" class="btn btn-primary btn-lg" onClick={()=>{this.props.search("hey i am clicked")}}></button>
    </div>
)
}
}