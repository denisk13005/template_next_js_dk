import { NextResponse } from "next/server";
const stripe = require("stripe")(
  "sk_test_51L4iIZK8J6YcJIPLZOT6VO3j0nTX0vXV4BiVYEG4fMKQ9sHUelSvCDFiHON61g7Z4ACR0Rqd7LoMlxS7k0bWLDMR00tKIdH317"
);
export async function POST(req: Request) {
  console.log("titi");
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: "T-shirt",
          },
          unit_amount: 2000,
        },
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: "http://localhost:3000/success",
    cancel_url: "http://localhost:3000/cancel",
  });

  // Return a response to acknowledge receipt of the event.
  return NextResponse.redirect(session.url);
}
