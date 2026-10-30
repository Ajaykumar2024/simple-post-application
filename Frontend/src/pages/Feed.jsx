import React, { use, useEffect, useState } from 'react'
import axios from 'axios'

const Feed = () => {
    const [posts,setPosts] =useState([
        {   _id:"1",
            image:"https://ik.imagekit.io/lmposht7x/image_5o1ePWligN.jpg?updatedAt=1793070780473",
            caption:'caption1'
        },
        // {   id:"1",
        //     image:"https://ik.imagekit.io/lmposht7x/image_5o1ePWligN.jpg?updatedAt=1793070780473",
        //     caption:'caption1'
        // },
        // {   id:"1",
        //     image:"https://ik.imagekit.io/lmposht7x/image_5o1ePWligN.jpg?updatedAt=1793070780473",
        //     caption:'caption1'
        // },
        //  {   id:"1",
        //     image:"https://ik.imagekit.io/lmposht7x/image_5o1ePWligN.jpg?updatedAt=1793070780473",
        //     caption:'caption1'
        // },
        // {   id:"1",
        //     image:"https://ik.imagekit.io/lmposht7x/image_5o1ePWligN.jpg?updatedAt=1793070780473",
        //     caption:'caption1'
        // },
        // {   id:"1",
        //     image:"https://ik.imagekit.io/lmposht7x/image_5o1ePWligN.jpg?updatedAt=1793070780473",
        //     caption:'caption1'
        // }
    ])
 
    useEffect(()=>{
        axios.get('http://localhost:3000/posts')
        .then((res)=>{
            console.log(res.data.posts)
            setPosts(res.data.posts)
        })
    },[])

 return (
  <section className='feed-section flex flex-wrap justify-start items-center gap-4 p-4 pt-10'>
    {posts.length > 0 ? (
        posts.map((post) => (
            <div className='post-card w-90 h-100 overflow-hidden rounded border shadow-sm' key={post._id}>
                <img
                    src={post.image}
                    alt=""
                    className='block w-full h-90 object-cover'
                />
                <p className='p-2'>{post.caption}</p>
            </div>
        ))
    ) : (
        <h1>No Post available</h1>
    )}
</section>
  )
}

export default Feed
