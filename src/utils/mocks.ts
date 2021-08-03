import { rest } from "msw";
import { setupServer } from "msw/node";

export const handlers = [
  rest.get("http://localhost:3030/scoops", (req, res, ctx) => {
    ctx.json([
      { name: "Chocolate", imagePath: "images/chocolate.png" },
      { name: "Vanilla", imagePath: "images/vanilla.png" },
    ]);
  }),
];

// This configures a request mocking server with the given request handlers.
export const server = setupServer(...handlers);
