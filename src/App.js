import { useState } from 'react';
import Navbar from './components/Navbar.jsx'
import Product from './components/Product.jsx';

function App() {
  const [count, setCount] = useState(0)
  const [isClicked, setIsClicked] = useState(false)
  const [isCleared, setIsCleared] = useState(false)



  return (
    <div>
      <Navbar
        count={count}
        isClicked={isClicked}
        isCleared={isCleared}
        setIsCleared={setIsCleared}
      />
      <Product
        count={count}
        setCount={setCount}
        isClicked={isClicked}
        setIsClicked={setIsClicked}
        isCleared={isCleared}
        setIsCleared={setIsCleared}
      />
    </div>
  );
}

export default App;
