import { render, screen } from "@testing-library/react";
import { HomePagePresentation } from "./page";
import { describe, test, expect } from "vitest";
import { Todo } from "@/types/types";
import { todos } from "@/test/fixtures/todos";
 
const emptyTodos: (Todo & { postNode: React.ReactNode })[] = [];
describe("HomePagePresentation", () => {


  test("should render a list of todo", () => {
    render(<HomePagePresentation
      todos={todos.map((todo) => ({
        ...todo,
        postNode: <div>Post</div>,
      }))}
        />)


    expect(screen.getAllByRole("listitem")).toHaveLength(3);
  });

  test("should render a message when there is no todo", () => {
    render(<HomePagePresentation todos={emptyTodos} />)

    expect(screen.getByText("Todo が存在しないようです")).toBeInTheDocument();
  })
});