import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { FaArrowLeftLong } from "react-icons/fa6";


const Cart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl mb-4">List:</h1>
      {cartItems.length > 0 ? (
        cartItems.map(item => (
          <div key={item.id} className="border bg-slate-100 rounded-xl p-4 mb-4 grid grid-cols-3 gap-11 align-middle justify-evenly">
          
            <h2 className='mt-5 text-2xl font-semibold'>{item.product_name}</h2>
          <img src={item.image_url} alt={item.product_name} className="w-[10vw] h-20 object-cover" />
          
            <button onClick={() => removeFromCart(item.id)} className=" bg-orange-200 hover:bg-red-500 hover:text-white  md:w-[10vw] w-[20vw] lg:w-[10vw] h-[7vh] mt-5 rounded-xl">Remove</button>
          </div>
        ))
      ) : (
        <p>Your cart is empty.</p>
      )}
      <Link to='/'>
      <button className=' text-white mt-10 bg-slate-400 rounded flex justify-center items-center space-x-1.5 p-1.5 gap-1 '><FaArrowLeftLong/> Back</button>
      </Link>
<Footer/>
    </div>
  );
};

export default Cart;
