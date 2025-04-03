import React, { useState } from 'react';

function Products({ onAddToCart }) {
  const products = [
    { id: 1, title: "Clavier", oldPrice: "300 MAD", price: 199, image: "./images/cassque.png", availableColors: ["White", "Black", "Red"] },
    { id: 2, title: "Souris", oldPrice: "200 MAD", price: 150, image: "./src/assets/CLAVIER.jpg", availableColors: ["Blue", "Red", "Yellow"] },
    { id: 3, title: "Manette de jeu", oldPrice: "350 MAD", price: 250, image: "./src/assets/manette.jpg", availableColors: ["Black", "White", "Red"] },
    { id: 4, title: "Casque audio", oldPrice: "500 MAD", price: 299, image: "./src/assets/souris.jpg", availableColors: ["Red", "White", "Blue"] },
    { id: 5, title: "Webcam", oldPrice: "1500 MAD", price: 1299, image: "./src/assets/cam.png", availableColors: ["Black", "White", "Red"] }
  ];

  const [selectedOptions, setSelectedOptions] = useState({});

  const handleSelectionChange = (productId, field, value) => {
    setSelectedOptions(prevState => ({
      ...prevState,
      [productId]: {
        ...prevState[productId],
        [field]: value
      }
    }));
  };

  const handleAddToCart = (product) => {
    const selected = selectedOptions[product.id] || { color: '', quantity: 1 };
    if (selected.color) {
      onAddToCart(product, selected.color, selected.quantity || 1);
    } else {
      alert('Please select a color before adding to cart.');
    }
  };

  return (

    
    <section className="section-products py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Popular Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {products.map((product) => {
            const selected = selectedOptions[product.id] || { color: '', quantity: 1 };
            return (
              <div key={product.id} className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transform transition-all duration-300">
                <img src={product.image} alt={product.title} className="w-full h-40 object-cover" />
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-700">{product.title}</h3>
                  <p className="text-sm line-through text-gray-500">{product.oldPrice}</p>
                  <p className="text-xl font-bold text-orange-500">{product.price} MAD</p>

                  {/* Select Color */}
                  <div className="mt-2">
                    <label className="block text-gray-700">Select Color:</label>
                    <select
                      value={selected.color}
                      onChange={(e) => handleSelectionChange(product.id, 'color', e.target.value)}
                      className="w-full p-2 mt-2 border border-gray-300 rounded"
                    >
                      <option value="">Select color</option>
                      {product.availableColors.map((color, index) => (
                        <option key={index} value={color}>{color}</option>
                      ))}
                    </select>
                  </div>

                  {/* Select Quantity */}
                  <div className="mt-2">
                    <label className="block text-gray-700">Quantity:</label>
                    <input
                      type="number"
                      value={selected.quantity}
                      onChange={(e) => handleSelectionChange(product.id, 'quantity', parseInt(e.target.value, 10) || 1)}
                      min="1"
                      className="w-full p-2 mt-2 border border-gray-300 rounded"
                    />
                  </div>

                  {/* Add to Cart Button */}
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="mt-4 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-all"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Products;
