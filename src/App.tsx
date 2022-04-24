import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./hooks/useCart";
import GlobalStyles from "./styles/global";
import Header from "./components/Header";
import React from "react";
import Routes from "./routes";
import { ToastContainer } from "react-toastify";

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <CartProvider>
        <GlobalStyles />
        <Header />
        <Routes />
        <ToastContainer autoClose={3000} />
      </CartProvider>
    </BrowserRouter>
  );
};

export default App;
