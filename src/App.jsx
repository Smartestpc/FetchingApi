import { useContext, useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { TogglerCont } from "./Toggler";

function App() {
  const [items, setItems] = useState([]);

  let { increaseCount, cart, setCart } = useContext(TogglerCont);

  const addToCart = (product) => {
    const existingItem = cart.find((item) => item.id === product.id);

    if (existingItem) {
      // If product already in cart, increment quantity
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      // Add new product to cart with quantity 1
      setCart([...cart, { ...product, quantity: 1 }]);
    }
    increaseCount();
  };

  // Fetching the API
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setItems(data.products || data));
  }, []);

  return (
    <div className=" grid grid-cols-5 gap-4 p-4 bg-gray-100 min-h-screen mt-20">
      {Array.isArray(items) &&
        items.map((product) => (
          <div
            key={product.id}
            className=" card p-4 bg-white shadow rounded mb-4 w-[250px] relative flex flex-col gap-2"
          >
            <div className="h-[200px] overflow-hidden flex items-center  justify-center">
              <img
                className="max-h-9/10"
                src={
                  product.thumbnail ||
                  (product.images && product.images[0]) ||
                  ""
                }
                alt={product.title || product.name || "store item"}
              />
            </div>
            <h2 className="text-xl font-bold">
              {product.title || product.name}
            </h2>
            <p className="text-gray-600 whitespace-nowrap overflow-hidden text-ellipsis">
              {product.description}
            </p>
            <p className="font-semibold">${product.price}</p>
            <p className="font-semibold flex items-center gap-2">
              <FaStar />
              {product.rating}
            </p>
            <button
              onClick={() => addToCart(product)}
              className="bg-lime-500 text-white px-4 py-1 rounded-md absolute bottom-2"
            >
              Add to Cart
            </button>
          </div>
        ))}
    </div>
  );
}

export default App;

// import React, { useEffect, useState } from 'react'

// function App() {
//   const [items, setItems] = useState([])

//   useEffect(() => {
//     fetch('https://fake-store-api.mock.beeceptor.com/api/products')
//       .then(res => res.json())
//       .then(res => setItems(res))

//   }, []);
//   return (
//     <div className='grid grid-cols-5 gap-2'>
//       {
//         items.map((products) => (
//           <div key={products.id} className='shadow flex flex-col justify-between rounded-md'>
//             <div className='h-[170px] flex items-center justify-center'>
//               <img className='max-h-[170px]' src="https://placehold.co/600x400" alt="items" />
//             </div>
//             <h2 className='text-2xl'>{products.name}</h2>
//             <p className='text-gray-500 whitespace-nowrap overflow-hidden text-ellipsis'>{products.description}</p>
//             <p>{products.price}</p>
//             <p className='font-bold'>Rating: {products.rating}</p>
//           </div>
//         ))}
//     </div>
//   )
// }

// export default App
