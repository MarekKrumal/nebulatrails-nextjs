"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";

export default function SuccessPage() {
  const searchParams = useSearchParams();
  const paymentIntentId = searchParams.get("payment_intent");

  return (
    <main className="max-w-4xl mx-auto p-10 text-white">
      <h1 className="text-3xl font-bold text-green-500">Payment Successful!</h1>
      <p className="mt-4 text-lg">
        Thank you for your payment. Your payment ID is:{" "}
        <span className="font-mono text-yellow-400">
          {paymentIntentId || "N/A"}
        </span>
        .
      </p>

      <div className="mt-6">
        <Link
          href="/"
          className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Go Back to Home
        </Link>
      </div>
    </main>
  );
}
