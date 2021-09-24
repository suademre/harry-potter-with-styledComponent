import { render, screen } from "@testing-library/react";
import CreateCharacterForm from "./CreateCharacterForm";

describe("CreateCharacterForm", () => {
  it("renders from elements", () => {
    const mockOnCreateCharacter = jest.fn();
    render(<CreateCharacterForm onCreateCharacter={mockOnCreateCharacter} />);

    const nameInput = screen.getByLabelText("Name of Character:");
    expect(nameInput).toBeInTheDocument();

    const houseInput = screen.getByLabelText("House:");
    expect(houseInput).toBeInTheDocument();

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });
});
