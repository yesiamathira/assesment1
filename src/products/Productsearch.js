import React, { Component } from 'react';
import ProductDetails from './Productdetails';
export  default class ProductList extends Component{

constructor(props)
{
  super(props);
this.state={
 products: [{"name":"car",imageurl:"https://upload.wikimedia.org/wikipedia/en/thumb/d/dc/Baahubali_The_Beginning_Movie_Poster.jpg/220px-Baahubali_The_Beginning_Movie_Poster.jpg",description:"Car is yellow color,made 2 years back",price:"3 lakh"},
 {"name":"jeans",imageurl:"https://upload.wikimedia.org/wikipedia/en/thumb/d/dc/Baahubali_The_Beginning_Movie_Poster.jpg/220px-Baahubali_The_Beginning_Movie_Poster.jpg",description:"Jeans is blue color,rayo matrial",price:"300"}
]
};

}
render(){
let listOfProductsDisplayed='';
if(this.props.search==''){
  listOfProductsDisplayed=this.state.products.map((product,index)=>{
      return <ProductDetails key={index} details={product}/>
    })
}
else{
  let filterProducts=this.state.products.filter((product,index)=>{
    return product.name.includes(this.props.search) 
  });

  listOfProductsDisplayed=filterProducts.map((product,index)=> {return <ProductDetails key={index} details={product}/>
})

}






// let listofMoviesDisplayed = this.state.movies.map((movie,index)=>{
//   return <MovieDetails key={index} details={movie}/>
// })
  return(
  <div>

  
  {listOfProductsDisplayed}
  
  </div>
  )
}
}