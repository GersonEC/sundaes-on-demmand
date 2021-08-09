import { render, screen } from "../../test-utils/testing-library-utils";
import { SundaeOptionType } from "../../utils/enum";
import { SundaeSummary } from "./SundaeSummary";

describe("Sundae Summary", () => {
  test("it renders the final scoop order with his total", () => {
    render(
      <SundaeSummary
        optionType={SundaeOptionType.SCOOPS}
        subtotal={"$6.00"}
        sundaes={["Vanilla", "Vanilla", "Vanilla"]}
      />
    );
    const optionType = screen.getByRole("heading", { exact: false });
    expect(optionType).toBeInTheDocument();

    const sundaes = screen.getAllByRole("listitem");
    expect(sundaes).toHaveLength(3);
  });

  test("it renders the final topping order with his total", () => {
    render(
      <SundaeSummary
        optionType={SundaeOptionType.TOPPINGS}
        subtotal={"$4.50"}
        sundaes={["hot fudge", "M&Ms", "Cherries"]}
      />
    );
    const optionType = screen.getByRole("heading", { exact: false });
    expect(optionType).toBeInTheDocument();

    const sundaes = screen.getAllByRole("listitem");
    expect(sundaes).toHaveLength(3);
  });
});
