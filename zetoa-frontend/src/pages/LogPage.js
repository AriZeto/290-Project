import React from "react";
import { useState, useEffect } from "react";
import { icons } from "react-icons/lib";
import { useNavigate, Link } from "react-router-dom";
import LogTable from "../components/LogTable";
import {IoIosCreate} from 'react-icons/io';
import EditPage from "./EditPage";

function LogPage({setRecipeToEdit}) {

    const navigation = useNavigate()

    const onUpdateRecipe = async recipe => {
        setRecipeToEdit(recipe);
        navigation("/update-recipe");
    }

    const [recipes, setRecipes] = useState([])

    const removeRecipe = async _id => {
        const response = await fetch(`/log/${_id}`, { method: 'DELETE'});
        if (response.status === 204) {
            const newRecipes = recipes.filter(m => m._id !== _id);
            setRecipes(newRecipes);
        } else {
            console.error(`Unable to delete the movie with _id = ${_id}, status code = ${response.status}`);
        }
    };

    const retrieveRecipes = async() => {
        const response = await fetch('/log');
        const data = await response.json();
        setRecipes(data);
    }

useEffect(() => {
    retrieveRecipes();
}, []);

return (
    <>
    <h2>Recipes Table</h2>
    <article>
        <p>
            Within this page, you have the ability to <strong>simplistically</strong> log a shortlist of recipe details.
            These details inc;ide the recipe name, cooking time (in minutes), date the recipe, and a quantity number of ingredients. The purpose of the page
            is not so much to log detailed information per recipe, but more so of a 'quick check' for small recipe details. Throughout the page, you have the ability to 
            modify, delete, or add a recipe detail. These can be done by clicking their icons on the same page. 
        </p>
    </article>
    <Link to="/log-recipe"><IoIosCreate/>Click here to add a new recipe.</Link>
    <LogTable rows={recipes}
    onDelete={removeRecipe}
    onEdit={onUpdateRecipe}>
    </LogTable>
    
    </>
);

} export default LogPage;