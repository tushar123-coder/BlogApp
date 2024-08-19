import React from 'react'
import { useParams } from 'react-router-dom'
import { useFetchBlogByIdQuery } from '../../../redux/features/blogs/blogsApi';
import SingleBlogCard from './singleBlogCard';
import CommentCard from '../comments/CommentCard';
import Relatedblog from './realtedblog'
function singleBlog() {
    const {id}=useParams();
     const {data:blog,error,isLoading}=useFetchBlogByIdQuery(id)
  return (
    <div className='text-primary container mx-auto mt-8'>
      <div>
        {isLoading && <div>Loading....</div>}
        {error && <div>Something went Wrong...... </div>}
        {
            blog && (
                <div className='flex flex-col lg:flex-row justify-between items-start md:gap-12 gap-8' >
                    <div className='lg:w-2/3 w-full'>
                        <SingleBlogCard  blog={blog.post}/>
                        <CommentCard comments={blog?.comments}/>
                    </div>
                    <div className='bg-white lg:w-1/3 w-full'>
                    <Relatedblog/>
                    </div>
                </div>
            )
        }
      </div>
    </div>
  )
}

export default singleBlog
