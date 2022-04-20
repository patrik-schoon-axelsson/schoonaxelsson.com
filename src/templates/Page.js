import React from "react";
import Seo from "../components/seo";
import Layout from '../components/layout';
import { Container, Row } from 'react-bootstrap';

const Page = (props) => {
    return (
        <Layout>
            <Seo title={props.pageContext.title} />
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