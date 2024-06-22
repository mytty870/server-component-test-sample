import { Post, Todo } from "@/types/types";

export async function fetchPost(): Promise<Post> {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts/1');
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  const post: Post = await res.json();
  return post
}