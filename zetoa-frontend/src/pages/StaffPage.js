import React, { useState } from "react";
import StaffRow from "../components/StaffRow.js"


function StaffPage() {

    const [dataResults, settingResults] = useState([]);
    const fetching = () => {
        fetch("https://randomuser.me/api/?results=10")
        .then((response) => response.json())
        .then((response) => { settingResults(response.results)})
        .catch(() => {alert("The random user generator is down. Come back later and check again.")});
    };



    return (
        <>
        <h2>Staff directory</h2>
        <article>

        <p>
            <button id="byServer" onClick={fetching} value="add">Add</button>
            &#160; a total of ten staff members from <a href="randomuser.me">Random User Generator.</a>
        </p>

        <table>
    <caption>Name, email, phone, and address</caption>
    <thead>
        <tr>
            <th>Photo</th>
            <th>Name</th>
            <th>Photo</th>
            <th>Location</th>
        </tr>
    </thead>

    <tbody id="randomUser">
    {dataResults.map((person, i) => <StaffRow person={person} key={i} />)}
    </tbody>
</table>
</article>
        </>
    );
}

export default StaffPage;