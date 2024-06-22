import { fetchPost } from "@/lib/dataFetch/fetchPost";
import { Post } from "@/types/types";

export const PostContainer = async () => {
  const post = await fetchPost();

  return (
    <PostPresentation post={post} />
  )
}

export const PostPresentation = ({ post }: { post: Post }) => {
  return (
    <>
      <p>{post.title}</p>
      <p>{post.body}</p>
    </>
  )
}