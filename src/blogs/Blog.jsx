import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const BlogSummary = ({ title, excerpt, slug, img }) => {
    return (
        <div className="bg-[#00000030] rounded-lg  shadow-equal shadow-[#150b46] saturate-100 backdrop-blur-md p-4">
            <Link to={`/blog/${slug}`}>
                <img src={img} className=' rounded-md mb-2  '>
                </img>
                <h1 className=' text-white text-xl  font-cabinet font-bold mt-4'>{title}</h1>
                <p className='mb-2  text-gray-400 text-[13px] lg:text-[15px] font-satoshi font-normal '>
                    {excerpt}
                </p>
            </Link>

        </div >
    );
};

const BlogList = ({ blogs }) => {

    return (
        <div className='flex flex-col gap-10 my-10 px-6'>
            <div className='flex  max-w-5xl mx-auto'>
                <h1 className='font-cabinet font-extrabold  text-white text-4xl lg:text-5xl '>Blogs</h1>
            </div>

            <div className="mx-auto  max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-10 text-white ">
                {blogs.map((blog) => (
                    <BlogSummary key={blog.slug} {...blog} />
                ))}
            </div>
        </div>
    );
};

export default BlogList;

