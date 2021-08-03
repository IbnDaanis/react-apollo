import { PostsGrid } from '../../components/posts/posts-grid/posts-grid.component'
import { useGetPosts } from '../../hooks/useGetPosts'
import './home.page.css'

export const HomePage: React.FC = () => {
  const posts = useGetPosts()
  console.log('POSTS: ', posts)

  return (
    <div className='home'>
      <PostsGrid posts={posts || []} />
    </div>
  )
}
