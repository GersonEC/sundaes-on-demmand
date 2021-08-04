import { render, screen } from "@testing-library/react";
import { ScoopOptionList } from "../../components/SundaeOption/ScoopOptionList";
import { scoopOptions } from "../../utils/stubs";

describe("Sundae Options", () => {
  test("it displays an image for each scoop option from server", async () => {
    render(<ScoopOptionList scoopOptions={scoopOptions} />);

    //find images
    const scoopImages = await screen.findAllByRole("img");
    expect(scoopImages).toHaveLength(2);

    //confirm alt text of images
    //@ts-ignore
    const altText = scoopImages.map((item) => item.alt);
    expect(altText).toEqual(["Chocolate scoop", "Vanilla scoop"]);
  });
});
