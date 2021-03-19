import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <StaticImage
      src="../images/st_logo.png"
      width={300}
      quality={95}
      formats={["AUTO", "WEBP", "png"]}
      alt="Spiros Tsiasiotis Diamond Logo"
      style={{
        marginBottom: `1.45rem`,
        width: `100%`
      }}
    />
  </Layout>
)

export default IndexPage