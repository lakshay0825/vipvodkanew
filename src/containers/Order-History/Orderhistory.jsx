import React, { useState } from "react";
import "./css-files/orderhistory-styles.css";
import Logo from '../../assets/order-history/order-history-logo.png';
import BorderColorSharpIcon from '@mui/icons-material/BorderColorSharp';
import profile from '../../assets/order-history/profile.png';
import OrderHistoryItems from './OrderHistoryItems';
import FilterListIcon from '@mui/icons-material/FilterList';

function Orderhistory(){
    const [isZoom, setZoom] = useState(false);
    function showFilter() {
        if(!isZoom){
            setZoom(true);
        }else{
            setZoom(false);
        }
    }
  return (
    <div className="orderhistory-body">
       <div className='orderhistory-logo'>
         <a href='/'>
           <img src={Logo} alt='logo' />
         </a>
       </div>

    
       <div className='orderHistory-maindiv'>
          <img className='profile-img' src={profile} alt='profile'/>
          <div className='orderHistory-main-section'>  
                <div className='orderHistory-menu-bar'>
                    <div className='name-section'>
                        <h1 className='name'>Name</h1>
                        <a href='/my-order'><BorderColorSharpIcon style={{color:"white"}} fontSize="small" /></a>
                    </div>
                    <h3 className='email'>Yourmailid@gmail.com</h3>
                    <div className='linksDiv'>
                        <p>
                            <a href='/my-order' className='anchorLink'>
                                My Order
                            </a>
                        </p>
                        <p>
                            <a href='/order-history' className='anchorLink active'>
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


                <div className='order-section'>
                    <div className="sticky">
                        <div className='order-heading'>
                            <h1 className='my-order-heading'>Order History</h1>
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
                    {OrderHistoryItems.map((item, index)=>{
                        return(
                            <div className='order-history-item'>
                                <div className="order-history-item-details">
                                    <div className="item-img">
                                    <img src={item.img} alt='item-img'/>
                                    </div>
                                    <div className="order-history-details">
                                    <h3>{item.subHeading}</h3>
                                    <p>{item.price}</p>
                                    <button className='buy-Again-Btn'>Buy Again</button>
                                    </div> 
                                    <p className="order-date">{item.date}</p>
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

export default Orderhistory;