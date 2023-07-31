import React from "react";
class CartItem extends React.Component{
    render()
    {
        return(
            <div className="cart-item">
                <div className="left-block">
                    <img  style={styles.image}/>
                </div>
                <div className="right-block">
                        <div style={{fontSize:25}}>Phone</div>
                        <div style={{color:'#ccc'}}>10000/-</div>
                        <div  style={{color:'#ccc'}}> 1</div>
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