import { render, screen } from "../../test-utils/testing-library-utils";
import userEvent from "@testing-library/user-event";
import { SundaeOptionType } from "../../utils/enum";
import { SundaeOptionsContainer } from "./SundaeOptionsContainer";
import { server } from "../../utils/mocks";
import { rest } from "msw";

describe("Sundae Options Container", () => {
  test("update scoop subtotal when scoops change", async () => {
    server.resetHandlers(
      rest.get("http://localhost:3030/scoops", (req, res, ctx) =>
        res(
          ctx.json([
            { name: "Chocolate", imagePath: "images/chocolate.png" },
            { name: "Vanilla", imagePath: "images/vanilla.png" },
          ])
        )
      )
    );

    render(<SundaeOptionsContainer optionType={SundaeOptionType.SCOOPS} />);

    //make sure total starts out $0.00
    const scoopsSubtotal = screen.getByText(/scoops total:/i, {
      exact: false,
    });
    expect(scoopsSubtotal).toHaveTextContent("0.00");

    //update vanilla scoops to 1 and check the subtotal
    /*const vanillaInput = await screen.findByText(/vanilla/i);*/
    const vanillaInput = await screen.findByRole("spinbutton", {
      name: /vanilla/i,
    });
    userEvent.clear(vanillaInput);
    userEvent.type(vanillaInput, "1");
    expect(scoopsSubtotal).toHaveTextContent("2.00");

    //update chocolate scoops to 2 and check subtotal
    const chocolateInput = await screen.findByRole("spinbutton", {
      name: /chocolate/i,
    });
    userEvent.clear(chocolateInput);
    userEvent.type(chocolateInput, "2");
    expect(scoopsSubtotal).toHaveTextContent("4.00");
  });

  test("update toppings subtotal when toppings change", async () => {
    server.resetHandlers(
      rest.get("http://localhost:3030/toppings", (req, res, ctx) =>
        res(
          ctx.json([
            { name: "Cherries", imagePath: "images/cherries.png" },
            { name: "M&Ms", imagePath: "images/m-and-ms.png" },
            { name: "Hot fudge", imagePath: "images/hot-fudge.png" },
          ])
        )
      )
    );
    render(<SundaeOptionsContainer optionType={SundaeOptionType.TOPPINGS} />);

    //make sure total starts out $0.00
    const toppingsTotal = screen.getByText(/toppings total:/i, {
      exact: false,
    });
    expect(toppingsTotal).toHaveTextContent("0.00");

    //update vanilla scoops to 1 and check the subtotal
    //const cherriesCheckbox = await screen.findByText(/cherries/i);
    const cherriesCheckbox = await screen.findByRole("checkbox", {
      name: /cherries/i,
    });
    userEvent.click(cherriesCheckbox);
    expect(toppingsTotal).toHaveTextContent("1.50");

    // add hot fudge and check subtotal
    /*const hotFudgeCheckbox = await screen.findByRole("checkbox", {
      name: /hot fudge/i,
    });
    userEvent.click(hotFudgeCheckbox);
    expect(toppingsTotal).toHaveTextContent("3.00");*/

    // remove hot fudge and check subtotal
    userEvent.click(cherriesCheckbox);
    expect(toppingsTotal).toHaveTextContent("0.00");
  });
});
