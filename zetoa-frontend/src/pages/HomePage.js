import React from "react"
import { Link } from "react-router-dom";

function HomePage() {
    return (
        <>
            <h2>Welcome to my homepage. :)</h2>
            <p>
                This site was created utilizing a broad set of technologies. These include HTML, CSS, JavaScript, Node, Express, the React framework, database management with MongoDB and Mongoose, etc.
                The purpose of this website was to build a full-stack MERN (MongoDB, Express, React, Node) application that incorporates a feature-rich frontend and backend showcasing my understanding of web development.
            </p>
            <p>
                Throughout this website, you will be able to access some unique feature sets. Beginning with the Homepage, a page to add, log, edit, or remove Recipes (see 'Logging Recipe'), view 'Topics' to showcase web development concepts, view a Gallery (utilizing Flex), Order product (Showcasing forms), and utilize the randomAPI to view a random curated list of ten staff members.
                It may not look like a lot, however there was a lot of effort and understanding built in to incorporate this site in a design that follows heuristic usability standards and also feature-rich. I hope you enjoy the time visiting this site.
            </p>

            <h3>Feel free and checkout my social media profiles.</h3>
            <Link to="https://www.linkedin.com/in/ariel-zeto-4b9084199/">LinkedIn</Link>
            <br></br>
            <Link to="https://github.com/AriZeto">GitHub</Link>
        </>
    );
}
    
export default HomePage;