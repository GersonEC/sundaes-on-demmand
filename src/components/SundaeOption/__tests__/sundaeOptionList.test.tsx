import { render, screen } from "../../../test-utils/testing-library-utils";
import { SundaeOptionList } from "../SundaeOptionList";
import { scoopOptions, toppingOptions } from "../../../utils/stubs";
import { SundaeOptionType } from "../../../utils/enum";

describe("Sundae Options", () => {
  test("it displays an image for each scoop option from server", async () => {
    render(
      <SundaeOptionList
        sundaeOptions={scoopOptions}
        optionType={SundaeOptionType.SCOOPS}
      />
    );

    //find images
    const scoopImages = await screen.findAllByRole("img", { name: /scoop$/i });
    expect(scoopImages).toHaveLength(2);

    //confirm alt text of images
    //@ts-ignore
    const altText = scoopImages.map((item) => item.alt);
    expect(altText).toEqual(["Chocolate scoop", "Vanilla scoop"]);
  });

  test("it displays an image for each topping option from server", async () => {
    render(
      <SundaeOptionList
        sundaeOptions={toppingOptions}
        optionType={SundaeOptionType.TOPPINGS}
      />
    );

    //find images
    const toppingImages = await screen.findAllByRole("img", {
      name: /topping$/i,
    });
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
