import { render, screen } from "@testing-library/react";
import Component from ".";

test("render about component", () => {
  render(<Component />);
  const linkElement1 = screen.getByText("About 1");
  expect(linkElement1).toBeInTheDocument();

  const linkElement2 = screen.getByText("About 2");
  expect(linkElement2).toBeInTheDocument();
});
