import { render, fireEvent } from "@testing-library/react";
import { Checkbox } from "./checkbox";

test("Selecting checkbox should change value true", () => {
    const { getByLabelText } = render(<Checkbox />);
    const checkbox = getByLabelText(/not checked/i);
    fireEvent.click(checkbox);
    expect(checkbox.checked).toEqual(true);
})