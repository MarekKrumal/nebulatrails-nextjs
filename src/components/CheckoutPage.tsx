"use client";

import {
  useElements,
  useStripe,
  PaymentElement,
} from "@stripe/react-stripe-js";
import React, { useState, useEffect } from "react";

interface CheckoutPageProps {
  amount: number;
}

export default function CheckoutPage({ amount }: CheckoutPageProps) {
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchClientSecret = async () => {
      try {
        const res = await fetch("/api/payment-intent", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ amount }), // Send amount in dollars
        });

        if (!res.ok) {
          const errorResponse = await res.json();
          console.error("Error fetching client secret:", errorResponse);
          setErrorMessage(
            errorResponse.error || "Failed to fetch client secret."
          );
          return;
        }

        const data = await res.json();
        console.log("Fetched clientSecret:", data.clientSecret); // Debugging log
        setClientSecret(data.clientSecret);
      } catch (error) {
        console.error("Error fetching client secret:", error);
        setErrorMessage("Error fetching payment intent.");
      }
    };

    fetchClientSecret();
  }, [amount]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);

    if (!stripe || !elements || !clientSecret) {
      setErrorMessage("Stripe is not ready or clientSecret is missing.");
      setLoading(false);
      return;
    }

    // Validate customer input using elements.submit()
    const { error: validationError } = await elements.submit();
    if (validationError) {
      setErrorMessage(validationError.message || "Input validation failed.");
      setLoading(false);
      return;
    }

    const { error } = await stripe.confirmPayment({
      elements,
      clientSecret,
      confirmParams: {
        return_url: `${window.location.origin}/success`,
      },
    });

    if (error) {
      setErrorMessage(error.message || "An unexpected error occurred.");
      setLoading(false);
    }
  };

  if (!clientSecret) {
    return <p>Loading payment...</p>;
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-10 flex bg-white border border-gray-700 text-white p-14 rounded-sm flex-col space-y-9 max-w-xl mx-auto"
    >
      <PaymentElement />
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}

      <button
        type="submit"
        disabled={!stripe || loading}
        className="px-6 py-6 bg-blue-700 text-white font-bold rounded hover:bg-blue-800 disabled:bg-gray-400 text-xl"
      >
        {loading ? "Processing..." : `Pay $${amount}`}
      </button>
    </form>
  );
}
