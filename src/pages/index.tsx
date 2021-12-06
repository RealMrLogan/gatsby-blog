import React from "react"
import { Link, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import { PostPreview, Header } from '../components'

export default function Index({ data }) {
  const { edges: posts } = data.allMarkdownRemark
  return (
    <main className='max-w-5xl m-auto px-6 font-inter'>
      <Header />
      <div className="grid grid-cols-1 gap-5 md:grid-cols-12">
        {React.Children.toArray(posts
          .filter(post => post.node.frontmatter.title.length > 0)
          .map(({ node: post }, index) => {
            const { title, date, path, featuredImage, featuredImageAlt, tags } = post.frontmatter
            return (
              <PostPreview title={title} excerpt={post.excerpt} date={date} to={path} img={{ src: featuredImage, alt: featuredImageAlt }} tags={tags.split(', ')} large={index === 0} />
            )
          }))}
      </div>
    </main>
  )
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
            featuredImage {
              childImageSharp {
                gatsbyImageData(
                  quality: 90
                  formats: [AUTO, WEBP]
                )
              }
            }
            featuredImageAlt
            tags
          }
        }
      }
    }
  }
`