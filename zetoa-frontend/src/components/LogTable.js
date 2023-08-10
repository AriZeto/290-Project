import React from "react";
import LogRow from './LogRow';

function LogTable({rows, onDelete, onEdit}) {
    return (
        <table id="recipes">
            <thead>
                <tr>
                    <th>Edit</th>
                    <th>Delete</th>
                    <th>Recipe Name</th>
                    <th>Cooking Time (Minutes)</th>
                    <th>Number of Ingredients</th>
                    <th>Date</th>
                </tr>
            </thead>
            <tbody>
                {rows.map((row, i) => <LogRow recipe={row}
                onDelete={onDelete}
                onEdit={onEdit}
                key={i} /> )}
            </tbody>
        </table>
    );
}

export default LogTable;