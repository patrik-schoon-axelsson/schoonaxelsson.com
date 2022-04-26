import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <h1 className="text-center">404: Not Found</h1>
    <p className="text-center">We found no matching routes here, use <Link to="/">this link</Link> to get back to safe territory!</p>
  </Layout>
)

export default NotFoundPage
