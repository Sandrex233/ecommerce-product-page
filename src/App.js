import { useState } from 'react';
import Navbar from './components/Navbar.jsx'
import Product from './components/Product.jsx';

<<<<<<< HEAD
=======

>>>>>>> 74f0d3b (Image Component)
function App() {
  const [count, setCount] = useState(0)
  const [isClicked, setIsClicked] = useState(false)
  const [isCleared, setIsCleared] = useState(false)

<<<<<<< HEAD
=======


>>>>>>> 74f0d3b (Image Component)
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
