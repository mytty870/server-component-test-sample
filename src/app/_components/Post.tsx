import { fetchPost } from "@/lib/dataFetch/fetchPost";

export const Post = async () => {
  const post = await fetchPost();

  return (
    <>
      <p>{post.title}</p>
      <p>{post.body}</p>
    </>
  )
}