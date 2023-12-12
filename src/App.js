import React, { useEffect, useState } from "react";
import axios from 'axios';
import Card from "./Card";

function App() {
  const [products, setProducts] = useState([]);
  const [kidFriendlyProducts, setKidFriendlyProducts] = useState([]);
  const [milletsProducts, setMilletsProducts] = useState([]);
  const [valueProducts, setValueProducts] = useState([]);
  const [loading, setLoading] = useState(true); // New loading state

  useEffect(() => {
    const url = 'https://bookshelf2.onrender.com/api/products';
    axios.get(url)
      .then(response => {
        setProducts(response.data);

        // Filter products based on sectionName
        const kidFriendly = response.data.filter(product => product.sectionName === 'Kid');
        const millets = response.data.filter(product => product.sectionName === 'Millet');
        const value = response.data.filter(product => product.sectionName === 'Value');

        // Set state for each section
        setKidFriendlyProducts(kidFriendly);
        setMilletsProducts(millets);
        setValueProducts(value);

        setLoading(false); // Set loading to false once data is loaded
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false); // Set loading to false in case of an error
      });
  }, []);

  const hello = () => {
    console.log(products);
  };

  return (
    <div className="App">
      <div className="navbar">
        <img className="logo" src="logo.png" alt="Logo"></img>
      </div>
      <div className="body">
        {loading && (
          <div className="loader-container">
            <div className="loader"></div>
          </div>
        )}
        {!loading && (
          <>
            <div className="first">
              <span className="text" id="label">Value</span>
              <div className="card-container">
                {valueProducts.map(product => (
                  <Card key={product._id} product={product} />
                ))}
              </div>
            </div>
            <div className="second">
              <span className="text" id="label">Kid Friendly</span>
              <div className="card-container">
                {kidFriendlyProducts.map(product => (
                  <Card key={product._id} product={product} />
                ))}
              </div>
            </div>
            <div className="third">
              <span className="text" id="label">Millets</span>
              <div className="card-container">
                {milletsProducts.map(product => (
                  <Card key={product._id} product={product} />
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
