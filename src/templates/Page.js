import React from "react";
import Layout from '../components/layout';
import { Container, Row } from 'react-bootstrap';

const Page = (props) => {
    return (
        <Layout>
            <Container>
                <Row>
                    <h2>{props.pageContext.title}</h2>
                    <p dangerouslySetInnerHTML={{__html: props.pageContext.content}} />
                </Row>
            </Container>
        </Layout>
    )
}

export default Page