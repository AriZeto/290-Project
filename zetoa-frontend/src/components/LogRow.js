import React from "react";
import {AiOutlineEdit, AiFillDelete} from 'react-icons/ai';

function LogRow({recipe, onDelete, onEdit}) {
    return (
        <tr>
            <td><AiOutlineEdit onClick={() => onEdit(recipe)} /></td>
            <td><AiFillDelete onClick={() => onDelete(recipe._id)} /></td>
            <td>{recipe.recipeName}</td>
            <td>{recipe.cookTime}</td>
            <td>{recipe.numIngredients}</td>
            <td>{recipe.date.slice(0,10)}</td>
        </tr>
    );
}

export default LogRow;