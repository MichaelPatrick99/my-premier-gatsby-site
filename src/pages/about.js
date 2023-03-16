// Step 1: Import React
import * as React from 'react'
import Layout from "../components/layout";
// import index from './index'
import { Link } from 'gatsby'


// Step 2: Define your component
const AboutPage = () => {
  return(
    <Layout pageTitle={"About ME"}>
      <p>I'm the proud creator of this</p>
    </Layout>
  )



  // return (
  //   <main>
  //     <h1>About Me</h1>
  //     <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
  //     <Link to = "/">Back to home</Link>
  //   </main>
  // )
}

export const Head = () => (
  <div>
  <title>About Me</title>
  {/* <meta name='description' content='Your description' /> */}
  </div>
);

// Step 3: Export your component
export default AboutPage