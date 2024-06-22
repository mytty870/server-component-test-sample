import { http, HttpResponse } from 'msw'
import { todos } from '../fixtures/todos'

export const handlers = [
  http.get("https://jsonplaceholder.typicode.com/todos", () => {
    return HttpResponse.json(todos, { status: 200})
  }),
  http.get("https://jsonplaceholder.typicode.com/posts/1", () => {
    return HttpResponse.json({
      "userId": 1,
      "id": 1,
      "title": "sunt",
      "body": "quia"
    })
  })
]