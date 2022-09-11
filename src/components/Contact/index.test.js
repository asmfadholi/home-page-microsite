import { render, screen } from "@testing-library/react";
import Component from ".";

test("render Contact component", () => {
  render(<Component />);
  const linkElement = screen.getByText("PT. ABC");
  expect(linkElement).toBeInTheDocument();
});
