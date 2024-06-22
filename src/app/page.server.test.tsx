import { describe, expect, test } from "vitest";
import HomePageContainer, { HomePagePresentation } from "./page";

describe("HomePagePresentation", () => {
  test("should fetch todos", async () => {
    const { type, props } = await HomePageContainer()

    expect(type).toBe(HomePagePresentation)

    expect(props.todos).toHaveLength(3)

    expect(props.todos[0]).toEqual({
      userId: 1,
      id: 1,
      title: "delectus aut autem",
      completed: false,
      postNode: expect.any(Object)
    })
  })

})
