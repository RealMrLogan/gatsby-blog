import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql, Link, PageProps } from 'gatsby'
import { Header } from '../components'

export default function Template(props: PageProps) {
  const post = props.data.markdownRemark
  return (
    <>
      <div className="max-w-prose m-auto">
        <Header />
      </div>
      {/* <Helmet title={`Your Blog Name - ${post.frontmatter.title}`} /> */}
      <div className="prose m-auto">
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </>
  )
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`
