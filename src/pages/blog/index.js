import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../../components/layout';

const BlogIndex = ({data}) => {
    
return (
    <Layout>
    <table className="table">
        <thead>
            <tr>
                <th scope="col" className='text-center'>Post: </th>
                <th scope="col" className='text-center'>Published: </th>
            </tr>
        </thead>
        <tbody>
        {data.allWpPost.edges.map(item => 
        <tr key={item.node.id}>
            <td>
                <Link to={`/blog/${item.node.slug}`}>{item.node.title}</Link>
            </td>
            <td>
                {new Date(item.node.dateGmt).toLocaleString()}
            </td>
        </tr>)}
        </tbody>
    </table>
    </Layout>
)

}

export const query = graphql`
query BlogIndexQuery {
    allWpPost(sort: {fields: date, order: DESC}) {
        edges {
            node {
                id
                slug
                title
                dateGmt
                author {
                    node {
                        name
                    }
                }
            }
        }
    }
}
`

export default BlogIndex