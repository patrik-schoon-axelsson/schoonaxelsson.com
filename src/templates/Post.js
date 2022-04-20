import React from 'react';
import Layout from '../components/layout.js';
import Seo from "../components/seo"
import { Container, Row} from 'react-bootstrap';
const Post = (props) =>  {
    
    return (
        <Layout>
            <Seo title={props.pageContext.title} />
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
