import React from 'react'
import Blogpostcard from '../components/Blogpostcard';
import defaultimg from '../assets/Shipthree.jpg'


const Blogs = ({pagetitle}) => {
  const data =[{
    id:1,
    title:"Blog Post 1",
    description:"This is the first blog post This is the first blog postThis is the first blog postThis is the first blog postThis is the first blog post",
    image:defaultimg,
    btnlink:""
  },
  {
    id:1,
    title:"Blog Post 2",
    description:"This is the first blog post This is the first blog postThis is the first blog postThis is the first blog postThis is the first blog post",
    image:defaultimg,
    btnlink:""
  },
  {
    id:1,
    title:"Blog Post 3",
    description:"This is the first blog post This is the first blog postThis is the first blog postThis is the first blog postThis is the first blog post",
    image:defaultimg,
    btnlink:""
  },
  {
    id:1,
    title:"Blog Post 3",
    description:"This is the first blog postThis is the first blog postThis is the first blog postThis is the first blog post",
    image:defaultimg,
    btnlink:""
  },
  {
    id:1,
    title:"Blog Post 1",
    description:"This is the first blog post This is the first blog postThis is the first blog postThis is the first blog postThis is the first blog post",
    image:defaultimg,
    btnlink:""
  },
  {
    id:1,
    title:"Blog Post 2",
    description:"This is the first blog post This is the first blog postThis is the first blog postThis is the first blog postThis is the first blog post",
    image:defaultimg,
    btnlink:""
  },
  {
    id:1,
    title:"Blog Post 3",
    description:"This is the first blog post This is the first blog postThis is the first blog postThis is the first blog postThis is the first blog post",
    image:defaultimg,
    btnlink:""
  },
  {
    id:1,
    title:"Blog Post 3",
    description:"This is the first blog postThis is the first blog postThis is the first blog postThis is the first blog post",
    image:defaultimg,
    btnlink:""
  },
]
  return (
    <section className="flex flex-col self-center overflow-hidden container mx-auto px-5 py-10">
<div className='flex justify-center text-4xl font-semibold p-10'>
  <h1>{pagetitle}</h1>
</div>
    <div className='grid gap-5 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 '>
      {data.map((item,index)=>(
        <Blogpostcard key={index} 
        title={item.title} 
        description={item.description} 
        image={item.image}
        btnlink={item.btnlink}
                />      ))}
      
    </div>
    </section>
  )
}

export default Blogs;
