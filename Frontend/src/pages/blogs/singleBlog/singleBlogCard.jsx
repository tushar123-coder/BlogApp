import React from 'react'
import {formatDate} from '../../../utils/formatDate'
import EditorJSHTML from 'editorjs-html'
import { useSelector } from 'react-redux'
import { useGetUserbyIdQuery } from '../../../redux/features/auth/authApi'

const editorJSHTML=EditorJSHTML()
function singleBlogCard({blog}) {
    const {title,description,content,coverImg,category,rating,author,createdAt}=blog||{}
    const htmlContent=editorJSHTML.parse(content).join('')
    
 const {data:user={}}=useGetUserbyIdQuery(author) 
  return (
    <>
    <div className='bg-white p-8'>
      {/* blog header */}
      <div>
        <h1 className='md:text-4xl text-3xl font-medium mb-4'>{title}</h1>
        <p className='mb-6'>{formatDate(createdAt)} by <span className='text-blue-400 cursor-pointer'>{user.email}</span></p>
      </div>

      {/* coverImg */}
      <div>
       <img src={coverImg} alt="Cover Image" className='w-full md:h-[520px] bg-cover' />
      </div>

      {/* blog details */}
      <div>
        <div dangerouslySetInnerHTML={{__html: htmlContent}} className='space-y-3 editorjsdiv'/>

        <div>
            <span className='text-lg font-medium'>Rating: </span>
            <span>{rating} (based on 2,370 reviews)</span>
        </div>
      </div>
    </div>
    </>
  )
}

export default singleBlogCard
 