import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { CartContext } from '../context/CartContext';
import Loader from '../components/Loader';
import Footer from '../components/Footer';

const ProductDetails = () => {
  const { barcode } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchProductDetails = async () => {
      const response = await axios.get(`https://world.openfoodfacts.org/api/v0/product/${barcode}.json`);
      setProduct(response.data.product);
    };

    fetchProductDetails();
  }, [barcode]);

  return (
    <div className=" lg:mt-18  z-10 md:mt-15 mt-10 lg:flex  p-4 lg:p-10 gap-10 justify-center align-middle border rounded-xl">
      {product ? (
        <>
          <img src={product.image_url} alt={product.product_name} className="w-[40vw] h-64 object-cover" />
          <div className='flex flex-col gap-4'>
          <h1 className="text-2xl mt-1">{product.product_name}</h1>
          <p>{product.ingredients_text}</p>
          <ul>
          <li>Energy: {product.nutriments['energy-kcal']} kcal</li>
        <li>Fat: {product.nutriments['fat']} g</li>
        <li>Carbohydrates: {product.nutriments['carbohydrates']} g</li>
        <li>Proteins: {product.nutriments['proteins']} g</li>
          </ul>
          <p>Nutrition: {product.nutriments.energy} kcal</p>
          <button onClick={() => addToCart(product)} className=" bg-orange-400 text-white w-[30vw] p-1  lg:w-[10vw]  lg:p-3 md:p-3 rounded-lg transition-all duration-150 ease-in hover:bg-orange-600" >
            Add to Cart
          </button>
          </div>
        </>
      ) : <Loader/>}
        <Footer/>
    </div>
    
  );
};

export default ProductDetails;
