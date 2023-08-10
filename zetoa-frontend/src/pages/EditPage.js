import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';

export const EditPage = ({recipe}) => {
    
    const [recipeName, setRecipeName] = useState(recipe.recipeName);
    const [cookTime, setCookTime] = useState(recipe.cookTime);
    const [numIngredients, setNumIngredients] = useState(recipe.numIngredients);
    const [date, setDate] = useState(recipe.date.slice(0, 10));

    const navigate = useNavigate();

    const editingRecipe = async () => {

        const response = await fetch(`/log/${recipe._id}`, {

            method: 'PUT',
            body: JSON.stringify({
                recipeName: recipeName,
                cookTime: cookTime,
                numIngredients: numIngredients,
                date: date
            }),
            headers: {
                'Content-Type': 'application/json',
            },

        });

        if (response.status === 200) {
            navigate("/log");
            alert("Recipe has been successfully edited.")
        } else {
            const errorAlert = await response.json();
            navigate("/log");
            alert(`Recipe failed to update. Status indicator: ${response.status}. ${errorAlert.Error}`);
        }

    };

    return (
        <>
        <h2>Editing a Recipe.</h2>
        <article>
            <p>You have selected the icon to edit this recipe. Upon doing so, you have the ability to
                adjust the recipe name, its cooking time (in minutes), the number of ingredients, and the date logged. 
                Feel free to use this as necessary. Once done, you a confirmation message will be displayed on the screen and you will see
                that your modification was made.
            </p>
            <table id="recipes">
                <caption>Editing recipes.</caption>
                <thead>
                    <tr>
                        <th>Edit</th>
                        <th>Delete</th>
                        <th>Recipe Name</th>
                        <th>Cooking Time (In minutes)</th>
                        <th>Number of Ingredients</th>
                        <th>Date</th>
                        <th>Add</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td></td>
                    <td></td>
                    <td><label for="recipeName">
                        <input type="text" value={recipeName} id="recipeName" name="recipeName"
                        onChange={e => setRecipeName(e.target.value)} autoFocus />
                    </label></td>

                    <td><label for="cookTime">
                        <input type="number" value={cookTime} id="cookTime" name="cookTime"
                        onChange={e => setCookTime(e.target.value)} />
                    </label></td>

                    <td><label for="numIngredients">
                        <input type="number" value={numIngredients} id="numIngredients" name="numIngredients"
                        onChange={e => setNumIngredients(e.target.value)} />
                    </label></td>

                    <td><label for="date">
                        <input type="date" id="date" name="date" value={date}
                        onChange={e => setDate(e.target.value)}
                        pattern="\d{2}-\d{2}-\d{2}" />
                    </label></td>

                    <td><button onClick={editingRecipe}>Apply</button></td>
                    </tr>
                </tbody>
            </table>
        </article>
        
        </>
    )

}
 
export default EditPage;