import { render, screen } from "@testing-library/react";
import Component from ".";

test("render header component", () => {
  render(<Component />);
  const linkElement = screen.getByText("Website test");
  expect(linkElement).toBeInTheDocument();
});
