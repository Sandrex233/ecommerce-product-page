import { useState } from 'react';
import Navbar from './components/Navbar.jsx'
import Product from './components/Product.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar count={count} />
      <Product count={count} setCount={setCount} />
    </div>
  );
}

export default App;
