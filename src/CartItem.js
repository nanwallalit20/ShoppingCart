import React from "react";
class CartItem extends React.Component{
    constructor(){
        super();
        this.state = {
            item:'Phone',
            price :10000,
            quantity: 1,
            img:'https://media.istockphoto.com/id/1318420912/vector/mock-up-screen-phone.jpg?s=612x612&w=0&k=20&c=z7RTcOE_vnT9eRcSEQhw0EVVRDb9JdDPaApfyO5nFxM='
        }
    }
    // this.increaseQuantity=this.increaseQuantity.bind(this) for calling function but it is little bit massy so we use arrow function
    increaseQty=()=>{
        // this is method 1 of set state it will use when previous state not required
       // we dont know that when this setState method will execute their execution as it is asynchrounous in nature so we we will use call back for the executing just after compliting the execution 
        this.setState({
            
            quantity:this.state.quantity+1
        },()=>{
            console.log(this.state.quantity)
        })
       

        // method-2 when prev state requires

        // this.setState((prevState)=>{
        //        return{
        //         quantity:prevState.quantity+1
        //        } 
        // })
    
    }
    decreaseQty=()=>{
        this.setState((prevState)=>{
            
                if(prevState.quantity>1){
                   return{
                    quantity:prevState.quantity-1
                   }
                }
               
        
        })
    }


    
    render()
    {
       
        const {item ,price,quantity,img} =this.state
        return(
            <div className="cart-item">
                <div className="left-block">
                    <img  style={styles.image} alt='' src={img}/>
                </div>
                <div className="right-block">
                        <div style={{fontSize:25}}>{item}</div>
                        <div style={{color:'#777'}}>{price}</div>
                        <div style={{color:'#777'}}> {quantity}</div>
                    <div className="cart-item-actions">
                        <img className="action-icons" src="https://cdn-icons-png.flaticon.com/128/10099/10099568.png" alt="+" onClick={this.increaseQty} />
                        <img className="action-icons" src="https://cdn-icons-png.flaticon.com/128/6861/6861762.png" alt="-" onClick={this.decreaseQty} />
                        <img className="action-icons" src="https://cdn-icons-png.flaticon.com/128/6861/6861362.png" alt="X"  />

                     </div>
                </div>
                

            </div>
            
        )
       
    }
 
}
const styles={
    image:{
        height:110,
        width:110,
        borderRadius:4,
        backgroundColor:'#ccc',

    }
}
export default CartItem;