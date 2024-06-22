import { render, screen } from "@testing-library/react";
import HomePage from "./page";
import { describe, it, test, expect } from "vitest";
 
describe("ArticleList", () => {
  test("should render a list of todo", async () => {
    // このテストは動作しない!
    // render(<HomePage />);
    const result = await HomePage()

    render(result)

    expect(screen.getAllByRole("listitem")).toHaveLength(9);
  });
});