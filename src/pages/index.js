import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
// import about from './about';


const Home = () => {
    return(
        <Layout pageTitle={"Home Page"}>
            <p>This is my premier Gatsby site</p>
        </Layout>
    )




    // return(
    //     <div>
    //         <h1>Welcome to the home page</h1>
    //         <p>This is my premier gatsby site</p>
    //         <Link to = "/about">Click to learn more</Link>
    //     </div>
    // )
}

export const Head = () => (
    <div>
        <title>
            Home Page
        </title>
    </div>
);

export default Home