import { render, screen } from "@testing-library/react";
import { SundaeOptionType } from "../../utils/enum";
import { SundaeOptionsContainer } from "./SundaeOptionsContainer";

describe("Sundae Options Container", () => {
  test("it renders the correct images based on optionType", async () => {
    render(<SundaeOptionsContainer optionType={SundaeOptionType.SCOOPS} />);

    const scoopImages = await screen.findAllByRole("img");
    expect(scoopImages).toHaveLength(2);
  });
});
