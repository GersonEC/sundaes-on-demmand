import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SundaeOptionType } from "../../utils/enum";
import { SundaeOptionsContainer } from "./SundaeOptionsContainer";

describe("Sundae Options Container", () => {
  test("it renders the correct images based on optionType", async () => {
    render(<SundaeOptionsContainer optionType={SundaeOptionType.SCOOPS} />);

    const scoopImages = await screen.findAllByRole("img");
    expect(scoopImages).toHaveLength(2);
  });

  test("update scoop subtotal when scoops change", async () => {
    render(<SundaeOptionsContainer optionType={SundaeOptionType.SCOOPS} />);

    //make sure total starts out €0.00
    const scoopsSubtotal = screen.getByText(/scoops total: €/i, {
      exact: false,
    });
    expect(scoopsSubtotal).toHaveTextContent("0.00");

    //update vanilla scoops to 1 and check the subtotal
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
});
