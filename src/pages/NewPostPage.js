import React from 'react';
import {useNavigate} from "react-router-dom";
import axios from "axios";

function NewPostPage(props) {
    const navigate = useNavigate()

    async function addPost(e) {
        e.preventDefault()
        await axios.post("https://dummyjson.com/posts/add", {
            userId: 69,
            title: e.target.title.value
        })
            .then(resp => {
                navigate("/")
            })
    }

    return (
        <div>
            <form className="form" onSubmit={addPost}>
                <input type="text" name="title" placeholder="title" />
                <button>submit</button>
            </form>
        </div>
    );
}

export default NewPostPage;