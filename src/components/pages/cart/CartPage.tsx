import { useMemo } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

import Swal from "sweetalert2";
import CartEmpty from "./CartEmpty";
import "./CartPage.css";

// Define types for cart items
interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  img: string;
}

export const CartContainer: React.FC = () => {
  const { cart, clearCart, removeFromCart, getTotalPrice } = useCart();

  // Get the total price of the cart
  const total: number = getTotalPrice();

  // Function to clear the cart with a confirmation alert
  const clearWithAlert = () => {
    Swal.fire({
      title: "Are you sure you want to clear the cart?",
      showDenyButton: true,
      confirmButtonText: "Yes, clear it",
      denyButtonText: `No, keep it as is`,
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart();
        Swal.fire("Cart cleared", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Cart remains unchanged", "", "info");
      }
    });
  };

  const isEmpty = useMemo(() => cart.length === 0, [cart]);

  return (
    <div className="cart-container d-flex flex-wrap justify-content-between px-2">
      <div className="d-flex flex-column container-items w-100">
        {isEmpty ? (
          <CartEmpty title={"Cart Empty"} message={"Add products to see your order."} />
        ) : (
          cart.map((item: CartItem) => (
            <div
              key={item.id}
              className="cart-item d-flex align-items-center justify-content-between p-2"
            >
              <img src={item.img} alt={item.name} className=" cart-img-Size" />
              <div className="flex-grow-1 px-3">
                <h5 className="mb-1">{item.name}</h5>
                <p className="mb-1">Price: ${item.price}</p>
                <p className="mb-1">Units: x{item.quantity}</p>
              </div>
              <Button
                variant="contained"
                color="error"
                onClick={() => removeFromCart(item.id)}
              >
                <DeleteIcon />
              </Button>
            </div>
          ))
        )}
      </div>

      {cart.length > 0 && (
        <Link to="/indexmenu">
          <Button variant="contained" color="success">
            + Add More Products
          </Button>
        </Link>
      )}

      {cart.length > 0 && (
        <div className="cart-info d-flex flex-column gap-2 p-3 bg-white rounded shadow">
          <h2 className="text-center text-uppercase">Cart Summary:</h2>
          <div>
            <p className="d-flex flex-colum justify-content-between">
              Number of products:{" "}
              <span className="fw-semibold">{cart.length}</span>
            </p>
            <p className="d-flex flex-colum justify-content-between">
              Total To Be Paid: <span className="fw-semibold">${total}</span>
            </p>
          </div>

          {cart.length > 0 ? (
            <div className="d-flex flex-row justify-content-center gap-2">
              <Button
                onClick={clearWithAlert}
                variant="contained"
                color="error"
              >
                Empty cart
              </Button>
              <Link to="/checkout">
                <Button variant="contained" color="primary">
                  Checkout
                </Button>
              </Link>
            </div>
          ) : (
            <div className="d-flex justify-content-center">
              <Link to="/indexmenu">
                <Button variant="contained" color="success">
                  + Add products
                </Button>
              </Link>
            </div>
          )}

          <div className="text-center mt-3">
            <h2 className="fs-1">The total cart value is: ${total}</h2>
          </div>
        </div>
      )}
    </div>
  );
};
