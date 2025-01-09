"use client";

import { useSearchParams } from "next/navigation";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutPage from "@/components/CheckoutPage";
import convertToSubcurrency from "@/lib/convertToSubCurrency";

if (!process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY) {
  throw new Error("NEXT_PUBLIC_STRIPE_PUBLIC_KEY is not defined");
}

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

export default function Checkout() {
  const searchParams = useSearchParams();
  const queryAmount = searchParams.get("amount");
  const amount = queryAmount ? parseFloat(queryAmount) : 0;

  if (!amount || isNaN(amount)) {
    return (
      <div className="p-4 text-white">
        <h2 className="text-2xl font-bold text-red-500">
          Error: No valid amount specified
        </h2>
        <p className="mt-2">Please go back and select a valid plan.</p>
      </div>
    );
  }

  return (
    <div className="p-10 pt-32 text-center text-white">
      <h1 className="text-3xl font-bold mb-4">
        Checkout for ${amount.toFixed(2)}
      </h1>
      <Elements
        stripe={stripePromise}
        options={{
          mode: "payment",
          amount: convertToSubcurrency(amount),
          currency: "usd",
        }}
      >
        <CheckoutPage amount={amount} />
      </Elements>
    </div>
  );
}
