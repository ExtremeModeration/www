import React from "react"
import NavBar from "./NavBar"
import Layout from "./Layout"

export default {
  title: "Global/layout",
}

export const layout = () => (
  <Layout title="ExtremeModeration">
    <div>Global Layout</div>
  </Layout>
)

export const navBar = () => <NavBar title="ExtremeModeration" />
