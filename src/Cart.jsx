import { useContext } from "react";
import { TogglerCont } from "./Toggler";
import { FaTrash } from "react-icons/fa";

const Cart = () => {
  const { cart, setCart, updateCartCount } = useContext(TogglerCont);

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
    updateCartCount(updatedCart);
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(productId);
    } else {
      const updatedCart = cart.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      );
      setCart(updatedCart);
      updateCartCount(updatedCart);
    }
  };

  const getTotalPrice = () => {
    return cart
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  return (
    <div className="mt-20 p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>
      {cart.length === 0 ? (
        <p className="text-gray-600 text-lg">Your cart is empty</p>
      ) : (
        <div className="bg-white rounded shadow p-6">
          <table className="w-full text-left">
            <thead className="border-b">
              <tr>
                <th className="pb-3">Product</th>
                <th className="pb-3">Price</th>
                <th className="pb-3">Quantity</th>
                <th className="pb-3">Total</th>
                <th className="pb-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id} className="border-b py-4">
                  <td className="py-4">{item.title}</td>
                  <td className="py-4">${item.price}</td>
                  <td className="py-4">
                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) =>
                        updateQuantity(item.id, parseInt(e.target.value))
                      }
                      className="w-12 px-2 py-1 border rounded"
                    />
                  </td>
                  <td className="py-4">
                    ${(item.price * item.quantity).toFixed(2)}
                  </td>
                  <td className="py-4">
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 flex items-center gap-2"
                    >
                      <FaTrash /> Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mt-6 text-right">
            <p className="text-2xl font-bold">Total: ${getTotalPrice()}</p>
            <button className="mt-4 bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600">
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
