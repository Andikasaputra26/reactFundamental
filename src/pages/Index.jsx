import React, { useState,useEffect } from 'react';
import postsData from '../posts.json'
import Article from '../components/Article'
import Search from '../components/Search'

const Home = () => {
    const [posts, setPosts] = useState(postsData);
    const [totalPosts, setTotal] = useState(0);

    const onSearchChange = (value) => {
        const filter = postsData.filter((item) => item.title.includes(value));
        setPosts(filter);
        setTotal(filter.length);
    };

//    useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/posts')
//     .then((response) => response.json())
//     .then((json) => setExternalPosts(json));
//    },[]);

    return (
        <>
            <h1>Simple Blog</h1>
            <Search onSearchChange={onSearchChange} totalPosts ={totalPosts}/>
            {posts.map((props,index) => (
                <Article {...props} key={index}/>
            ))}
        </>
    );
};

export default Home;