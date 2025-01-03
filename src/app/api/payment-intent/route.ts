import Stripe from "stripe";
import { NextRequest, NextResponse } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2024-12-18.acacia",
});

export async function POST(request: NextRequest) {
  try {
    const { amount }: { amount: number } = await request.json();

    if (!amount || typeof amount !== "number") {
      return NextResponse.json(
        { error: "Invalid amount provided" },
        { status: 400 }
      );
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amount * 100), // Convert dollars to cents
      currency: "usd",
      automatic_payment_methods: { enabled: true },
    });

    return NextResponse.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error occurred.";
    console.error("Error in /api/payment-intent:", errorMessage);
    return NextResponse.json(
      { error: `Internal Server Error: ${errorMessage}` },
      { status: 500 }
    );
  }
}
