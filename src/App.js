import { useState } from 'react';
import Navbar from './components/Navbar.jsx'
import Product from './components/Product.jsx';

function App() {
  const [count, setCount] = useState(0)
  const [isClicked, setIsClicked] = useState(false)



  return (
    <div>
      <Navbar
        count={count}
        setCount={setCount}
        isClicked={isClicked}
        setIsClicked={setIsClicked}
      />
      <Product
        count={count}
        setCount={setCount}
        isClicked={isClicked}
        setIsClicked={setIsClicked}
      />
    </div>
  );
}

export default App;
