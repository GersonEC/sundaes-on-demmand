import { render, screen } from "@testing-library/react";
import { SundaeOption } from "../SundaeOption";
import { scoopOptions, toppingOptions } from "../../../utils/stubs";
import { SundaeOptionType } from "../../../utils/enum";

describe("Sundae Option", () => {
  test("it displays an image for scoop option", () => {
    render(
      <SundaeOption
        name={scoopOptions[0].name}
        imagePath={scoopOptions[0].imagePath}
        optionType={SundaeOptionType.SCOOPS}
      />
    );
    const scoopImage = screen.getByRole("img");
    expect(scoopImage).toBeInTheDocument();
  });

  test("it displays an image for topping option", () => {
    render(
      <SundaeOption
        name={toppingOptions[0].name}
        imagePath={toppingOptions[0].imagePath}
        optionType={SundaeOptionType.TOPPINGS}
      />
    );
    const toppingImage = screen.getByRole("img");
    expect(toppingImage).toBeInTheDocument();
  });
});
