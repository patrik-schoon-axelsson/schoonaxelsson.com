import React from "react";
import Layout from '../components/layout'
const Page = (props) => {
    return (
        <Layout>
            <h2>{props.pageContext.title}</h2>
            <p dangerouslySetInnerHTML={{__html: props.pageContext.content}} />
        </Layout>
    )
}

export default Page