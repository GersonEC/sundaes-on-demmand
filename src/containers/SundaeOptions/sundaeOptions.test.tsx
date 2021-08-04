import { render, screen, waitFor } from "@testing-library/react";
import { ScoopOptionList } from "../../components/SundaeOption/ScoopOptionList";
import { SundaeOptions } from "./SundaeOptions";

describe("Sundae Options", () => {
  test("it displays an image for each scoop option from server", async () => {
    const scoopOptions = [
      { name: "Chocolate", imagePath: "images/chocolate.png" },
      { name: "Vanilla", imagePath: "images/vanilla.png" },
    ];
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
