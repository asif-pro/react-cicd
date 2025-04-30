import { render, screen } from "@testing-library/react";
import About from "./About.page";
describe("About", () => {
  test("renders About page and Blogs component", () => {
    render(<About />);

    expect(screen.getByText(/about.page/i)).toBeInTheDocument();
  });
});
