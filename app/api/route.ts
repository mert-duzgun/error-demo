export async function GET(request: Request) {
  return new Response(
    JSON.stringify({ message: "This email is already in use!" }),
    {
      status: 409,
    }
  );
}
