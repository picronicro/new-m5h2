import React, {useEffect, useState} from 'react';
import axios from "axios";

function PostsPage(props) {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        async function getPosts() {
            await axios.get("https://dummyjson.com/posts")
                .then(resp => setPosts(resp.data.posts))
        }

        getPosts()
    }, [])

    return (
        <div>
            <h1>Posts</h1>
            {posts && posts.map(post => <div className="post_container">
                <h2>{post.title}</h2>
            </div>)}
        </div>
    );
}

export default PostsPage;