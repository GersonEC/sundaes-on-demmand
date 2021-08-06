//import "../../../test-utils/matchmedia.mock";
import { render, screen } from "../../../test-utils/testing-library-utils";
import { SundaeOption } from "../SundaeOption";
import { scoopOptions, toppingOptions } from "../../../utils/stubs";
import { SundaeOptionType } from "../../../utils/enum";

describe("Sundae Option", () => {
  test("it displays an image for scoop option", () => {
    const myMock = jest.fn();
    render(
      <SundaeOption
        name={scoopOptions[0].name}
        imagePath={scoopOptions[0].imagePath}
        optionType={SundaeOptionType.SCOOPS}
        updateItemCount={myMock}
      />
    );
    const scoopImage = screen.getByRole("img", { name: /scoop$/i });
    expect(scoopImage).toBeInTheDocument();
    screen.debug();
  });

  test("it displays an image for topping option", () => {
    const myMock = jest.fn();
    render(
      <SundaeOption
        name={toppingOptions[0].name}
        imagePath={toppingOptions[0].imagePath}
        optionType={SundaeOptionType.TOPPINGS}
        updateItemCount={myMock}
      />
    );
    const toppingImage = screen.getByRole("img", { name: /topping$/i });
    expect(toppingImage).toBeInTheDocument();
  });
});
