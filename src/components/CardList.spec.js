import { render, screen } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import CardList from "./CardList";

describe("CardList", () => {
  const name = "Harry";
  const house = "Gryffindor";

  it("renders", () => {
    render(
      <Router>
        <CardList name={name} house={house} />
      </Router>
    );
    const link = screen.getByRole("link");
    expect(link).toBeInTheDocument();
  });

  it("displays the text Harry from Gryffindor", () => {
    render(
      <Router>
        <CardList name={name} house={house} />
      </Router>
    );

    const text = screen.getByText("Harry from Gryffindor");

    expect(text).toBeInTheDocument();
  });
});
