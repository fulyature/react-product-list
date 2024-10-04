import Header from "./components/header/Header";
import Product from "./components/products/Product";

import { categories, products } from "./helper/data.js";

function App() {
  return (
    <div>
      <Header categorieS={categories} />
      <Product productS={products} />
    </div>
  );
}

export default App;
