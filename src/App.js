import React from "react";
import Navbar from './Navabar'
import Cart from './Cart'
import { addDoc, collection, getDocs ,getFirestore, onSnapshot, doc, updateDoc, deleteDoc, query, where, orderBy} from 'firebase/firestore'; 


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        products:[],
        loading:true

    }
   
}
componentDidMount(){
 
  const firestore = getFirestore(this.props.firebaseApp);
  const db = collection(firestore, 'Products')
  //we will use getdocs for fetching document from db and use onsnapshot method rendering real time updates from db
//query the data
const q=query(db,where('price','==',99990 ),orderBy('price','asc'));

  onSnapshot(q, (snapshot)=>{
   const products= snapshot.docs.map((doc)=>{
      const data=doc.data();
      data['id']=doc.id;
      return data;
    })

    this.setState({
      products : products ,
      loading:false
    })
      
  })

}

handleIncreaseQuantity=(product)=>{
      const firestore = getFirestore(this.props.firebaseApp);
      const db = collection(firestore, 'Products');
        const{products}=this.state;
        let index=products.indexOf(product);
        // products[index].quantity+=1;
        // this.setState({
        //     product:products,
        // })
        const updatedQuantity = products[index].quantity + 1

        const productDocRef = doc(db, products[index].id);
        
       
        updateDoc(productDocRef,{
          quantity:updatedQuantity
        })
        .then(()=>{
          console.log('quantity increases ')
        })
        .catch(err=>{
          console.log('error in updating');
        })
       


}
handleDecreaseQuantity=(product)=>{
  const firestore = getFirestore(this.props.firebaseApp);
    const db = collection(firestore, 'Products');
    console.log('decrease the quantity');
    const{products}=this.state;
    let index=products.indexOf(product);
    if(products[index].quantity>0)
    {
    const updatedQuantity = products[index].quantity - 1
    const productDocRef = doc(db, products[index].id);
        
       
        updateDoc(productDocRef,{
          quantity:updatedQuantity
        })
        .then(()=>{
          console.log('quantity decreases ')
        })
        .catch(err=>{
          console.log('error in updating',err);
        })
      }   
    // this.setState({
    //     product:products,
       
    // })
}
handleDeleteProduct=( id)=>{
    console.log('delete the product',id);
    const{products}=this.state;
    const firestore = getFirestore(this.props.firebaseApp);
    const db = collection(firestore, 'Products')
  
  //  const items= products.filter((item)=>item.id !== id );
  //  this.setState({
  //   products :items,
  //  })

  const product=doc(db,id);
  deleteDoc(product)
  .then(()=>{
    console.log('delete product successfully!!')
  })
  .catch(err=>{
    console.log('err',err);
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
 newProduct=()=>{
  const firestore = getFirestore(this.props.firebaseApp);
  const db = collection(firestore, 'Products');
  const newItem={
    item:'Speaker',
    price:5000,
    quantity:4,
    imageURL:"https://images.unsplash.com/photo-161896"
  }
  addDoc(db,newItem)
  .then((itemRef)=>{
    console.log(itemRef);
  })
  .catch(err=>{
    console.log('err',err);
  })
 }
 
render(){
  
    const {handleDecreaseQuantity,handleDeleteProduct,handleIncreaseQuantity}=this
    const{products,loading}=this.state;
  return (
    <div >
      
      <Navbar
        count={this.getProductCount()} 
      />
      <button onClick={this.newProduct} style={{fontSize:20,backgroundColor:'lightgray',padding:10,cursor:"pointer"}}>Add product</button>
        <Cart
         products={products} 
         handleIncrease={handleIncreaseQuantity}
         handleDecrease={handleDecreaseQuantity}
         handleDelete={handleDeleteProduct}
        />
        {loading && <h1>Loading.....</h1>}

        <div style={{fontSize:30,fontWeight:700,marginTop:20}}>
          Total Amount:{this.getTotalAmount()}/-
        </div>
    </div>
  );
}
}

export default App;
