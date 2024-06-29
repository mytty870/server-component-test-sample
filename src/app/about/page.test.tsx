import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import AboutPage from "./page";

describe("AboutPage", () => {
  test("should render correctly", () => {
    render(<AboutPage />);

    expect(screen.getByText("このサイトについて")).toBeInTheDocument();
  })
})