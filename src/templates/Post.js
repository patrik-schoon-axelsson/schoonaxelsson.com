import React from 'react';
import Layout from '../components/layout.js';
import { Container, Row} from 'react-bootstrap';
const Post = (props) =>  {
    console.log(props)
    return (
        <Layout>
        <Container>
            <Row>
                <h1 className="text-center">{props.pageContext.title}</h1>
                </Row>
            <Row>
            <div dangerouslySetInnerHTML={{__html: props.pageContext.content}} />
            </Row>
        </Container>
        </Layout>
    )
};

export default Post
