import React from "react";
import Navbar from './Navabar'
import Cart from './Cart'


class App extends React.Component {
  constructor(){
    super();
    this.state = {
        products:[{
        id:1,
        item:'Phone',
        price :10000,
        quantity: 1,
        img:'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/l/8/r/-original-imaghxemnnnkd8bg.jpeg?q=70'
    
        },
        {
        id:2,
        item:'Earphone',
        price :1000,
        quantity: 1,
        img:'https://rukminim2.flixcart.com/image/612/612/l0sgyvk0/headphone/e/w/c/buds-z2-oneplus-original-imagcg5gfpcg5ndv.jpeg?q=70'
        },
        {
        id:3,
        item:'Charger',
        price :1200,
        quantity: 1,
        img:'https://rukminim2.flixcart.com/image/612/612/xif0q/battery-charger/x/i/y/original-20-watt-adapter-compatible-for-the-black-store-original-imagjnmpepnfryvh.jpeg?q=70'
        }
        
    ]

    }
}

handleIncreaseQuantity=(product)=>{
        console.log('hey please update the product',product);

        const{products}=this.state;
        let index=products.indexOf(product);
        products[index].quantity+=1;
        this.setState({
            product:products,
        })
}
handleDecreaseQuantity=(product)=>{
    console.log('decrease the quantity');
    const{products}=this.state;
    let index=products.indexOf(product);
    if(products[index].quantity>0)
    {products[index].quantity-=1;}
    this.setState({
        product:products,
    })
}
handleDeleteProduct=( id)=>{
    console.log('delete the product',id);
    const{products}=this.state;
   const items= products.filter((item)=>item.id !== id );
   this.setState({
    products :items,
   })

}
getProductCount=()=>{
  let count=0
  const{products}=this.state;
 products.forEach((product)=>{
      count+=product.quantity;
  })
  return count;
}
 getTotalAmount=()=>{
  let total =0 ;
  const{products}=this.state; 
  products.forEach((product)=>{
    total+=product.quantity*product.price;
  })
  return total;
 }
 
render(){
  
    const {handleDecreaseQuantity,handleDeleteProduct,handleIncreaseQuantity}=this
    const{products}=this.state;
  return (
    <div >
      
      <Navbar
        count={this.getProductCount()} 
      />
        <Cart
         products={products} 
         handleIncrease={handleIncreaseQuantity}
         handleDecrease={handleDecreaseQuantity}
         handleDelete={handleDeleteProduct}
        />

        <div style={{fontSize:30,fontWeight:700,marginTop:20}}>
          Total Amount:{this.getTotalAmount()}/-
        </div>
    </div>
  );
}
}

export default App;
