import { render, screen } from "@testing-library/react";
import { PostPresentation } from "./Post";
import { describe, test, expect } from "vitest";
import { postFixture } from "@/test/fixtures/post";

describe("Post", () => {
  test ("should render a post", async () => {
    render (<PostPresentation post={postFixture} />);

    expect(screen.getByText("sunt aut facere repellat provident occaecati excepturi optio reprehenderit")).toBeInTheDocument();
  })
})