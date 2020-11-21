import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Trips from "../components/Trips"

const TripsPage = () => (
  <Layout>
    <SEO title="Trips" />
    <Trips heading="Explore More"/>
  </Layout>
)

export default TripsPage
