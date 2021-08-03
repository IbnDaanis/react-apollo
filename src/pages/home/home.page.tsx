import { Post } from '../../common/interfaces/post.interface'
import { PostsGrid } from '../../components/posts/posts-grid/posts-grid.component'
import './home.page.css'

export const HomePage: React.FC = () => {
  const posts: Post[] = [
    {
      id: '1',
      title: 'One',
      body: 'First body'
    }
  ]

  return (
    <div className='home'>
      <PostsGrid posts={posts} />
    </div>
  )
}
