import Title from './Components/Title';
import Cart from './Components/Cart';
import ProductList from './Components/ProductList';

import './App.css';

function App() {
  return (
    <div className="container">
      {/* TITLE : START */}
        <Title/>
      {/* TITLE : END */}

      <div className="row">
        {/* LIST PRODUCT : START */}
          <ProductList />
        {/* LIST PRODUCT : END */}
        
        {/* CART : START */}
          <Cart/>
        {/* CART : END */}
      </div>
	</div>
  );
}

export default App;
