import { MessageCircle, ThumbsUp } from "lucide-react"

const blogs = [

    {
      title:"abcd",
      author:"aman",
      likes:153,
      comments:25,
    },
    {
        title:"My Amazing Blog Title 4",
        author:"Huxn",
        likes:50,
        comments:14,
    },
    {
        
        title:"My Amazing Blog Title 4",
        author:"John",
        likes:50,
        comments:14,
    },
    
]


const PopularBlogs = () => {

  return (

    <div>
        <h2 className="text-xl font-bold mb-5">Popular Blogs</h2>
        <ul>
            {
                blogs.map((blog,index) => (
                    <li key={index} className="mb-4">
                        <div className="flex justify-between items-center">
                            <span className="font-bold mb-2">{blog.title}</span>
                        </div>

                      <span className="text-gray-600">Publish by {blog.author}</span>

                      <div className="flex items-center mt-2">

                        <MessageCircle size = {16} />

                      <span className="text-gray-500 mr-5 ml-1">{blog.likes}</span>

                      <ThumbsUp size={16} />
                      <span className="text-gray-500 mr-2 ml-2">{blog.comments}</span>
                      </div>

                    </li>
                ))
            }
        </ul>
    </div>

  )

}

export default PopularBlogs