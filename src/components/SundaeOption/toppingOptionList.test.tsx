import { render, screen } from "@testing-library/react";
import { ToppingOptionList } from "./ToppingOptionList";
import { toppingOptions } from "../../utils/stubs";

describe("Sundae Options", () => {
  test("it displays an image for each topping option from server", async () => {
    render(<ToppingOptionList toppingOptions={toppingOptions} />);

    //find images
    const toppingImages = await screen.findAllByRole("img");
    expect(toppingImages).toHaveLength(3);

    //confirm alt text of images
    //@ts-ignore
    const altText = toppingImages.map((item) => item.alt);
    expect(altText).toEqual([
      "Cherries topping",
      "M&Ms topping",
      "Hot fudge topping",
    ]);
  });
});
