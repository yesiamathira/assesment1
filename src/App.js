// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
        
//       </div>
//     );
//   }
// }

// export default App;
import React, { Component } from 'react';
import Search from './Search';
import ProductList from './products/Productlist';


// import Image from './Image'
// import Content from './Content'


export  default class App extends Component{



constructor(props)
{
  super();
this.state={
   counter:0,
  searchQuery:''
};
this.handleSearchClick=this.handleSearchClick.bind(this);
this.handleChange=this.handleChange.bind(this);
}
handleSearchClick(data){
  console.log(data);
  let currentState=this.state;
  currentState.counter++;
  this.setState(currentState);
}
handleChange(data){
  console.log(data);
  let currentState=this.state;
  currentState.searchQuery=data;
  this.setState(currentState);
}


render(){


  return(
    <div className="container">
    {/* <h1 className='abc'>Hello react</h1>
    <h1>Hello react</h1>
    <Label name="Athira"/>
    <Label name="Athira"/>
    <Label name="Athira"/>
    <Textbox email="athira@gmail.com" />  */}
    
    {/* <Image/>
    <Content/> */}
    {/* <Product/> */}
    
    <Search
    searchText={this.handleChange}
    search={this.handleSearchClick}
   />
    <label className="badge">Items in Cart:{this.state.counter}</label>
    <ProductList search={this.state.searchQuery}
    add={this.handleSearchClick}/>
    </div>
  )
}





}