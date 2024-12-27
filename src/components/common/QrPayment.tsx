import React from "react";
import { QRCodeCanvas } from "qrcode.react";
import { Button } from "react-bootstrap";

interface QrPaymentProps {
  onPaymentComplete: () => void;
}

export const QrPayment: React.FC<QrPaymentProps> = ({ onPaymentComplete }) => {
  const qrValue = "link.mercadopago.com.ar/eljamunirestaurant"; // Cambia esta URL según sea necesario

  const handlePayment = () => {
    onPaymentComplete(); // Llamada al callback después de confirmar el pago
  };

  return (
    <div className="text-center">
      <h2>Scan the QR Code to pay</h2>
      <QRCodeCanvas value={qrValue} size={256} />
      <Button
        className="mt-3 w-100 p-2 text-white"
        variant="success"
        onClick={handlePayment}
      >
        Confirm Payment with QR
      </Button>
    </div>
  );
};
