import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';

export const CreatePage = () => {
    const [recipeName, setRecipeName] = useState('Easy Chicken Parm');
    const [cookTime, setCookTime] = useState('60');
    const [numIngredients, setNumIngredients] = useState('7');
    const [date, setDate] = useState();

    const navigation = useNavigate();

    const addingRecipe = async () => {
        const newRecipe = {recipeName, cookTime, numIngredients, date};

        const result = await fetch('/log', { 
            method: 'POST',
            body: JSON.stringify(newRecipe),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if(result.status === 201){
            alert("The recipe was successfully added.");
        } else {
            alert(`Could not add the row, missing input. Status code 400.`);
        }
        navigation("/log");
    };


    return (
        <>
        <h2>Log your recipe.</h2>
        <article>
            <p>Add your simplistic recipe(s) details for the day. You are given the ability to
                provide a recipe name, cooking time (in minutes), a number of ingredients, and date for when 
                you made or want to log this recipe. Feel free and use this as a 'recipe-log', if you wish. Finally, once the details
                are added, select the 'Add' button. Upon clicking, you will see a confirmation and your entry will be added to the page.
            </p>
            <table id="recipes">
                <caption>Adding recipes to the log.</caption>
                <thead>
                    <tr>
                        <th>Edit</th>
                        <th>Delete</th>
                        <th>Recipe Name</th>
                        <th>Cooking Time</th>
                        <th>Number of Ingredients</th>
                        <th>Date</th>
                        <th>Add</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td></td>
                    <td></td>
                    <td><label for="recipeName" class="required">
                        <input type="text" value={recipeName} id="recipeName" name="recipeName"
                        onChange={e => setRecipeName(e.target.value)} required autoFocus />
                    </label></td>

                    <td><label for="cookTime" class="required">
                        <input type="number" value={cookTime} id="cookTime" name="cookTime"
                        onChange={e => setCookTime(e.target.value)} required />
                    </label></td>

                    <td><label for="numIngredients" class="required">
                        <input type="number" value={numIngredients} id="numIngredients" name="numIngredients"
                        onChange={e => setNumIngredients(e.target.value)} />
                    </label></td>

                    <td><label for="date" class="required">
                        <input type="date" id="date" name="date" value={date}
                        onChange={e => setDate(e.target.value)}
                        pattern="\d{2}-\d{2}-\d{2}" />
                    </label></td>

                    <td><button class="confirm" onClick={addingRecipe}>Add</button></td>
                    </tr>
                </tbody>
            </table>
        </article>
        </>
    )

};

export default CreatePage;