"use server";

import { HOST } from "./constants";

export async function registerUser() {
  const res = await fetch(`${HOST}/api`);

  const response = await res.json();

  if (!res.ok) {
    throw new Error(response.message);
  }

  return response;
}
