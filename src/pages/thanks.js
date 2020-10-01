import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const Thanks = () => (
  <Layout className="thanks-page">
    <div className="wrapper" style={{
      textAlign: "center"
    }}>
      <h1>Got your message</h1>
      <p>Thank you for getting in touch us. We will get back to you shortly.</p>
      <Link to="/" className="button">Lets go back to Homepage</Link>
    </div>

  </Layout>
)

export default Thanks 