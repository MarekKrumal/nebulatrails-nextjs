"use client";

import CheckoutPage from "@/components/CheckoutPage";
import convertToSubcurrency from "@/lib/convertToSubCurrency";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

if (!process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY) {
  throw new Error("NEXT_PUBLIC_STRIPE_PUBLIC_KEY is not defined");
}

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

export default function Stripe() {
  const amount = 49.99;

  return (
    <main className="max-w-6xl mx-auto p-10 text-white border m-10 rounded-md">
      <div>
        <h1 className="text-2xl font-bold">Checkout</h1>
        <h2 className="mt-4">
          You are about to pay <span className="font-bold">${amount}</span>
        </h2>
      </div>

      <div className="mt-6">
        {/* Stripe Elements Context */}
        <Elements
          stripe={stripePromise}
          options={{
            mode: "payment",
            amount: convertToSubcurrency(amount), // Convert dollars to cents
            currency: "usd",
          }}
        >
          {/* Pass amount to CheckoutPage */}
          <CheckoutPage amount={amount} />
        </Elements>
      </div>
    </main>
  );
}
