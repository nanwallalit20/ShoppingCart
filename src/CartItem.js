import React from "react";

const CartItem= (props)=> {
    
   
       
        const {item ,price,quantity,img} =props.product
        const{product,handleIncrease,handleDecrease,handleDelete}=props
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
                        <img className="action-icons" src="https://cdn-icons-png.flaticon.com/128/10099/10099568.png" alt="+" onClick={()=>handleIncrease(product)} />
                        <img className="action-icons" src="https://cdn-icons-png.flaticon.com/128/6861/6861762.png" alt="-" onClick={()=>handleDecrease(product)} />
                        <img className="action-icons" src="https://cdn-icons-png.flaticon.com/128/6861/6861362.png" alt="X" onClick={()=>handleDelete(product.id)} />

                     </div>
                </div>
                

            </div>
            
        )
       
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