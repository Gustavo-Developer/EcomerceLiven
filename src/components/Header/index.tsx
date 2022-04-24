import { Cart, Container } from "./styles";

import { Link } from "react-router-dom";
import { MdShoppingBasket } from "react-icons/md";
import React from "react";
import { useCart } from "../../hooks/useCart";

const Header = (): JSX.Element => {
  const { cart } = useCart();
  const cartSize = cart.length;

  return (
    <Container>
      <Link to="/">
        <img
          src="https://liven.tech/_next/image?url=%2Fimages%2Flogo-2x.png&w=256&q=75"
          alt="Liven Logo"
        />
      </Link>

      <Cart to="/cart">
        <div>
          <strong>Meu carrinho</strong>
          <span data-testid="cart-size">
            {cartSize === 1 ? `${cartSize} item` : `${cartSize} itens`}
          </span>
        </div>
        <MdShoppingBasket size={36} color="#FFF" />
      </Cart>
    </Container>
  );
};

export default Header;
