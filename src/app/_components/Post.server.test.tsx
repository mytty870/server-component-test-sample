import { render, screen } from "@testing-library/react";
import { PostContainer, PostPresentation } from "./Post";
import { describe, test, expect } from "vitest";

describe("PostContainer", () => {
  test("should fetch post", async () => {
    const { type, props } = await PostContainer()

    expect(type).toBe(PostPresentation)

    expect(props.post).toEqual({
      userId: 1,
      id: 1,
      title: "sunt",
      body: "quia"
    })
  })
})