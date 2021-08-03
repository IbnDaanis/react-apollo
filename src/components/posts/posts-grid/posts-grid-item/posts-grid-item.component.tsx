import { Post } from '../../../../common/interfaces/post.interface'

export const PostsGridItem: React.FC<{ post: Post }> = ({ post }: { post: Post }) => {
  return (
    <div>
      <p>{post.id}</p>
      <p>{post.title}</p>
      <p>{post.body}</p>
    </div>
  )
}
