import { render, screen, fireEvent } from "@testing-library/react";
import Button from ".";
import "@testing-library/jest-dom";

describe("<Button />", () => {
  it("should render its children", () => {
    // Arrange: Render the Button component with specific children.
    render(<Button>Click Me</Button>);

    // Act:  (Implicit) The component has been rendered.

    // Assert: Verify that the children ("Click Me") are present in the rendered output.
    expect(screen.getByText("Click Me")).toBeInTheDocument();
  });

  it("should call the onClick handler when clicked", () => {
    // Arrange:  Create a mock function to simulate the onClick handler.
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click Me</Button>);

    // Act: Simulate a click event on the button.
    fireEvent.click(screen.getByRole("button"));

    // Assert: Check that the mock function was called exactly once.
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("should apply the provided className", () => {
    // Arrange: Render the Button with a custom className.
    render(<Button className="primary-button">Click Me</Button>);

    // Act: (Implicit) The component is rendered.

    // Assert: Verify that the button element has the specified className.
    expect(screen.getByRole("button")).toHaveClass("primary-button");
  });

  it("should render with an empty className if none is provided", () => {
    // Arrange: Render the button without any className prop.
    render(<Button>Click Me</Button>);

    // Act: (Implicit) The component is rendered

    // Assert: Check that the button element does not have any extra class names other than the default ones.  We check for an empty string.
    expect(screen.getByRole("button")).toHaveAttribute("class", "");
  });
});
