import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
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
  it("form works: text written into the input fileds will be semt to the onCreateCharacter function", () => {
    const mockOnCreateCharacter = jest.fn();
    render(<CreateCharacterForm onCreateCharacter={mockOnCreateCharacter} />);

    const nameInput = screen.getByLabelText("Name of Character:");
    userEvent.type(nameInput, "Beer");

    const houseInput = screen.getByLabelText("House:");
    userEvent.type(houseInput, "Tegernseer");

    const button = screen.getByRole("button");
    userEvent.click(button);

    expect(mockOnCreateCharacter).toHaveBeenCalledWith({
      name: "Beer",
      house: "Tegernseer",
    });
  });
});
