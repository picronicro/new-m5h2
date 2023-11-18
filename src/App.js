import React from 'react';
import {Route, Routes} from "react-router-dom";
import PostsPage from "./pages/PostsPage";
import Layout from "./components/Layout";
import NewPostPage from "./pages/NewPostPage";
import "./App.css"

function App(props) {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<PostsPage />} />
                    <Route path="form" element={<NewPostPage />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;