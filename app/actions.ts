"use server";

export async function registerUser() {
  const res = await fetch("http://localhost:3000/api");

  const response = await res.json();

  if (!res.ok) {
    throw new Error(response.message);
  }

  return response;
}
