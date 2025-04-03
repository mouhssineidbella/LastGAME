import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Payment() {
  const navigate = useNavigate();
  const [cartDetails, setCartDetails] = useState([]);

  useEffect(() => {
    // Retrieve cart details from localStorage when component mounts
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartDetails(storedCart);
  }, []);

  const handlePayment = () => {
    if (cartDetails.length === 0) {
      alert("No items in the cart.");
      return;
    }

    // Simulate payment processing (Replace with a real payment API if needed)
    setTimeout(() => {
      alert("Payment Successful!");
      localStorage.removeItem("cart"); // Clear cart after payment
      navigate("/shop"); // Redirect to shop or order confirmation page
    }, 2000);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold text-center mb-6">Payment Information</h2>

      {cartDetails.length > 0 ? (
        <div className="bg-white p-6 rounded-lg shadow-lg mx-auto max-w-lg">
          <h3 className="text-xl font-semibold mb-4">Cart Details</h3>
          {cartDetails.map((item, index) => (
            <div key={index} className="flex items-center space-x-4 border-b py-2">
              <img src={item.image} alt={item.title} className="w-16 h-16 object-cover rounded-lg" />
              <div>
                <h4 className="font-bold">{item.title}</h4>
                <p>Color: {item.color}</p>
                <p>Quantity: {item.quantity}</p>
                <p>{item.price} MAD x {item.quantity}</p>
              </div>
            </div>
          ))}
          <h3 className="text-lg font-bold mt-4">
            Total: {cartDetails.reduce((acc, item) => acc + item.total, 0)} MAD
          </h3>

          <button
            onClick={handlePayment}
            className="w-full mt-4 bg-green-500 text-white py-3 rounded-lg text-lg font-semibold hover:bg-green-600 transition"
          >
            Confirm Payment
          </button>
        </div>
      ) : (
        <p className="text-center text-gray-600">No items in the cart.</p>
      )}
    </div>
  );
}

export default Payment;
