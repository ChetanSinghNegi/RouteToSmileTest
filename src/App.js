import { useEffect, useState } from "react";
import ProductList from "./Product/ProductList";
import "./styles.css";

export default function App() {
  const [loading, setLoading] = useState(false); //loading state
  const [data, setData] = useState([]); //products data
  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      const response = await fetch("https://dummyjson.com/products");
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const responseData = await response.json();
      setData(responseData.products);
      setLoading(false);
    };
    fetchProduct().catch((error) => {});
  }, []);

  //deleting logic
  const deleting = (id) => {
    const tempData = data;
    delete tempData.id;
    delete tempData[id];

    tempData.filter((item) => item.id !== id);
    console.log("hello", tempData);
    setData(tempData);
  };

  return (
    <div className="App">
      <div>List Of Products</div>
      {loading && <div>Loading Please wait</div>}
      {!loading && <ProductList items={data} deleting={deleting} />}
    </div>
  );
}
