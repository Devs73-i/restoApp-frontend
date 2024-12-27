import { QrPayment } from "../../common/QrPayment";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import Swal from "sweetalert2";
import { useCart } from "../context/CartContext";
import CartEmpty from "./CartEmpty";

export const Checkout: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    cardNumber: "",
    cvv: "",
    dni: "",
  });
  const [useQrPayment, setUseQrPayment] = useState(false);

  const { clearCart, cart } = useCart(); // clean cart
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateFields = () => {
    const { fullName, cardNumber, cvv, dni } = formData;

    if (!fullName || !cardNumber || !cvv || !dni) {
      Swal.fire({
        icon: "error",
        title: "Missing Information",
        text: "Please fill in all the fields.",
      });
      return false;
    }

    if (cardNumber.length < 16 || isNaN(Number(cardNumber))) {
      Swal.fire({
        icon: "error",
        title: "Invalid Card Number",
        text: "Card number must be 16 digits.",
      });
      return false;
    }
    if (cvv.length !== 3 || isNaN(Number(cvv))) {
      Swal.fire({
        icon: "error",
        title: "Invalid CVV",
        text: "CVV must be 3 digits.",
      });
      return false;
    }
    if (isNaN(Number(dni))) {
      Swal.fire({
        icon: "error",
        title: "Invalid DNI",
        text: "DNI must be a valid number.",
      });
      return false;
    }

    return true;
  };

  const completePurchase = () => {
    clearCart(); // Limpia el carrito.
    Swal.fire({
      icon: "success",
      title: "Thank you!",
      text: "Thank you for your purchase!",
    }).then(() => {
      navigate("/");
    });
  };

  const handleBuy = () => {
    if (validateFields()) {
      completePurchase();
    }
  };

  const handleCashPayment = () => {
    completePurchase();
  };

  return (
    <Container fluid className="d-flex flex-column align-items-center">
      {cart.length > 0 ? (
        <Row className="w-100 justify-content-center">
          <Col xs={12} md={8} lg={6}>
            <h1 className="mb-4 text-center display-2">Payment Process</h1>
            <div className="d-flex flex-column w-full gap-2 justify-content-center mb-3">
              <Button
                variant={useQrPayment ? "secondary" : "primary"}
                onClick={() => setUseQrPayment(false)}
              >
                Use Form
              </Button>
              <Button
                variant={useQrPayment ? "primary" : "secondary"}
                onClick={() => setUseQrPayment(true)}
              >
                Use QR
              </Button>
              <Button variant="success" onClick={handleCashPayment}>
                Pay in Cash
              </Button>
            </div>

            {useQrPayment ? (
              <QrPayment
                onPaymentComplete={() => {
                  clearCart();
                  Swal.fire(
                    "Payment Complete!",
                    "Thank you for your purchase.",
                    "success"
                  );
                  navigate("/");
                }}
              />
            ) : (
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control
                    style={{ backgroundColor: "#F09C8A" }}
                    type="text"
                    name="fullName"
                    placeholder="Enter your full name"
                    value={formData.fullName}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Card Number</Form.Label>
                  <Form.Control
                    style={{ backgroundColor: "#F09C8A" }}
                    type="text"
                    name="cardNumber"
                    placeholder="Enter your card number"
                    value={formData.cardNumber}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>CVV</Form.Label>
                  <Form.Control
                    style={{ backgroundColor: "#F09C8A" }}
                    type="text"
                    name="cvv"
                    placeholder="Enter CVV"
                    value={formData.cvv}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label>DNI</Form.Label>
                  <Form.Control
                    style={{ backgroundColor: "#F09C8A" }}
                    type="text"
                    name="dni"
                    placeholder="Enter your DNI"
                    value={formData.dni}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Button variant="success" className="w-100" onClick={handleBuy}>
                  Confirm Payment
                </Button>
              </Form>
            )}
          </Col>
        </Row>
      ) : (
        <CartEmpty title={"Not Available"} message={"Add products to see the available payment options."} />
      )}

    </Container>
  );
};
