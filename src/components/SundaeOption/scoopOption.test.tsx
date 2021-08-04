import { render, screen } from "@testing-library/react";
import { ScoopOption } from "./ScoopOption";
import { scoopOptions } from "../../utils/stubs";

describe("Scoop Option", () => {
  test("it displays an image for scoop option", () => {
    render(
      <ScoopOption
        name={scoopOptions[0].name}
        imagePath={scoopOptions[0].imagePath}
      />
    );
    const scoopImage = screen.getByRole("img");
    expect(scoopImage).toBeInTheDocument();
  });
});
