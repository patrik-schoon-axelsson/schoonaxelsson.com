import React from 'react';
import Layout from '../components/layout.js';

const Post = (props) =>  {
    console.log(props)
    return (
        <Layout>
        <h1>{props.pageContext.title}</h1>
        
        <div dangerouslySetInnerHTML={{__html: props.pageContext.content}} />
        </Layout>
    )
};

export default Post
