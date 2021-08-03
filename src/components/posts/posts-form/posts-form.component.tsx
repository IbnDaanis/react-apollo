import { useForm } from 'react-hook-form'
import { useCreatePost } from '../../../hooks/useCreatePost'

interface FormData {
  title: string
  body: string
}

export const PostsForm: React.FC = () => {
  const { register, handleSubmit } = useForm<FormData>()

  const createPost = useCreatePost()

  const onSubmit = handleSubmit(({ title, body }) => {
    createPost({ variables: { input: { title, body } } })
  })

  return (
    <div className='posts-form'>
      <form onSubmit={onSubmit}>
        <input type='text' {...register('title')} placeholder='Title' />
        <textarea {...register('body')} placeholder='Body' />
        <input type='submit' />
      </form>
    </div>
  )
}
