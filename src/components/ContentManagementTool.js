import React,{useState} from 'react';
import './ContentManagementTool.css';

const ContentManagementTool=()=>{
    const [title,setTitle]=useState('');
    const [content,setContent]=useState('');
    const [selectedImange,setSelectedImage]=useState(null);
    const [blogPosts, setBlogPosts] = useState([]);



    const handleTitileChange=(e)=>{
        setTitle(e.target.value);
    };
    const handleContentChange=(e)=>{
        setContent(e.target.value);
    };
    const handleSelectedImage=(e)=>{
        setSelectedImage(e.target.files[0]);
    };
    const handleAddBlogPost=(e)=>{
        if(title && content && selectedImange){
            const newBlogPost={
                title,
                content,
                imageUrl: URL.createObjectURL(selectedImange),
            };
            setTitle('');
            setContent('');
            setSelectedImage(null);
            setBlogPosts([...blogPosts, newBlogPost]);
        };
    }

return(
    <div className='ContentManagementTool'>
        <h1>CONTENT MANAGEMENT TOOL</h1>
        <div>
            <label>Title : </label>
            <input type='text' value={title} onChange={handleTitileChange}/>
        </div>
        <div>
            <label>Content : </label>
            <textarea value={content} onChange={handleContentChange} />
        </div>
        <div>
            <label>Image : </label>
            <input type='file' accept='image/*' onChange={handleSelectedImage}/>
        </div>
        <button onClick={handleAddBlogPost}>Add Blog Post</button>
        
        <div>
            {blogPosts.map((post,index)=>(
                <div key={index}>
                    <h2>
                        {post.title};
                    </h2>
                    <p>{post.content}</p>
                    <img src={post.imageUrl}  alt='Blog Post' width="200"/>
                </div>
            ))}
        </div>
    </div>
);
};

export default ContentManagementTool;