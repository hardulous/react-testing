// src/mocks/handlers.js
import { http, HttpResponse } from "msw";

export const handlers = [
  // Intercept "GET request to https://jsonplaceholder.typicode.com/users" requests...
  http.get("https://jsonplaceholder.typicode.com/users", () => {
    // ...and respond to them using this JSON response.
    return HttpResponse.json([
      {
        name: "Aman Bisht",
      },
      {
        name: "Acey",
      },
      {
        name: "Mayank",
      },
    ]);
  }),
];
