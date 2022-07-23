import React, { useState } from "react";
import "./css-files/myorder-styles.css";
import Logo from '../../assets/vip-my-order/my-order-logo.png';
import BorderColorSharpIcon from '@mui/icons-material/BorderColorSharp';
import profile from '../../assets/vip-my-order/profile.png';
import OrderItems from './OrderItems';
import FilterListIcon from '@mui/icons-material/FilterList';

function Myorder (){
    const [isZoom, setZoom] = useState(false);
    function showFilter() {
        if(!isZoom){
            setZoom(true);
        }else{
            setZoom(false);
        }
    }
  return (
    <div className="myorder-body">
       <div className='myorder-logo'>
         <a href='/'>
           <img src={Logo} alt='logo' />
         </a>
       </div>

    
       <div className='myOrder-maindiv'>
          <img className='profile-img' src={profile} alt='profile'/>
          <div className='myorder-main-section'>  
                <div className='myorder-menu-bar'>
                    <div className='name-section'>
                        <h1 className='name'>Name</h1>
                        <a href='/my-order'><BorderColorSharpIcon style={{color:"white"}} fontSize="small" /></a>
                    </div>
                    <h3 className='email'>Yourmailid@gmail.com</h3>
                    <div className='myorder-linksDiv'>
                        <p>
                            <a href='/my-order' className='anchorLink active'>
                                My Order
                            </a>
                        </p>
                        <p>
                            <a href='/order-history' className='anchorLink'>
                                Order History
                            </a>
                        </p>
                        <p>
                            <a href='/privacy-policy' className='anchorLink'>
                                Privacy Policy
                            </a>
                        </p>
                        <p> 
                            <a href='/terms-and-conditions' className='anchorLink'>
                                Terms & Conditions
                            </a>
                        </p>
                    </div>
               </div>


                <div className='myOrder-section'>
                    <div className="sticky">
                        <div className='order-heading'>
                            <h1 className='my-order-heading'>My Order</h1>
                            <h3 onClick={showFilter} className='filter'><FilterListIcon className='filter-icon'/>FILTER</h3>
                        </div>
                        <div className='show-orders-filter' >
                            <p>Showing all orders</p>
                            {isZoom ? (
                                <div className="showfil">
                                    <p style={{borderBottom: "1px solid grey"}}>
                                        <a href="/">Vodka</a>
                                    </p>
                                    <p>
                                        <a href="/">Ice drinks</a>
                                     </p>
                                </div>
                            ) : null}
                        </div>
                    </div> 
                    {OrderItems.map((item, index)=>{
                        return(
                            <div className='order-div' style={{backgroundImage: `url(${item.bimg})`}}>
                                <div className="order-item">
                                    <img className='appleMartiniBottle' src={item.img} alt='appleMartiniBottle'/>
                                    <div className="order-details">
                                        <div>
                                            <h3 style={{color: `${item.subHeadingColor}`}}>{item.subHeading}</h3>
                                            <p>{item.para1}</p>
                                            <p style={{paddingRight: "1rem"}}>{item.para2}</p>
                                        </div>
                                        <div className='buttons'>
                                            <div className='buttons-row1'>
                                                <button className='buyNowBtn'>Buy Now</button>
                                                <button className='addCartBtn'> Add to Cart</button>
                                            </div>
                                            <button className='superCoinBtn'>Use super Coin</button>
                                        </div>
                                    </div>
                                </div>    
                            </div>
                        );
                    })}
                    
                </div>


            </div>
        </div>
    </div>
  );
}

export default Myorder;