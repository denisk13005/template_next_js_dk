import { NextResponse } from "next/server";

export async function POST(req: Request) {
  console.log("titi");
  const reqData = await req.json();
  try {
    const response = await fetch("https://api.lemonsqueezy.com/v1/checkouts", {
      method: "POST",
      headers: {
        Accept: "application/vnd.api+json",
        "Content-Type": "application/vnd.api+json",
        Authorisation: `Bearer ${process.env.LEMON_SQUEEZY_API_KEY}`,
      },
      body: JSON.stringify({
        data: {
          type: "checkouts",
          relationships: {
            store: {
              data: {
                type: "stores",
                id: process.env.LEMON_SQUEEZY_STORE_ID?.toString(),
              },
            },
            variant: {
              data: {
                type: "variants",
                id: reqData.productId.toString(),
              },
            },
          },
        },
      }),
    });
    console.log(await response.json());
    return NextResponse.json({ response });
  } catch (error) {
    return NextResponse.json({ message: "erreur" });
  }

  // Return a response to acknowledge receipt of the event.
}
