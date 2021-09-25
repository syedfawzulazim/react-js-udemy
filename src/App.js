import React, { useState } from 'react'
import Cart from "./components/Cart/Cart";
import Header from "./components/Layouts/Header";
import Meals from "./components/Meals/Meals";

function App() {

  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true)
  }

  const hideCartHandler = () => {
    setCartIsShown(false)
  }

  return (
    <div className="App">
      {cartIsShown && <Cart />}
      <Header />
      <main>
        <Meals />
      </main>
    </div>
  );
}

export default App;
