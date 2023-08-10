import 'dotenv/config';
import express from 'express';
import * as recipelog from './model.mjs';

const app = express()
const PORT = process.env.PORT;

app.use(express.json());

app.post('/log', (req, res) => {
    recipelog.makeRecipe(
        req.body.recipeName,
        req.body.cookTime,
        req.body.numIngredients,
        req.body.date
    )

    .then(recipe => {
        res.status(201).json(recipe);
    })

    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'Making of a recipe document failed due to user input, check grammar and try again.'});
    });
});

app.get('/log', (req, res) => {
    recipelog.retrieveRecipe()
    .then(recipe => {
        if (recipe !== null) {
            res.json(recipe);
        } else {
            res.status(404).json({Error: 'The recipe document could not be found.'});
        }
    })
    .catch(error => {
        console.log(error);
        res.status(400).json({Error: 'The request to fetch the recipe document failed due to user input, check grammar and try again.'});
    });
});

app.put('/log/:id', (req, res) => {
    recipelog.updateRecipe(
        req.params.id,
        req.body.recipeName,
        req.body.cookTime,
        req.body.numIngredients,
        req.body.date
    )
    .then(recipe => {
        res.json(recipe);
    })
    .catch(error => {
        console.log(error);
        res.status(400).json({ error: 'Request to update or replace the document failed due to user input, check grammar and try again.'})
    });
});

app.delete('/log/:id', (req, res) => { 
    recipelog.removeByID(req.params.id)
        .then(deletedCount => {
            if (deletedCount === 1) {
                res.status(204).send();
            } else {
                res.status(404).json({ Error: 'This document does not exist.'});
            }
    })
    .catch(error => {
        console.log(error);
        res.send({ Error: 'User request to delete by the ID has failed.'});
    });
});

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}...`)
});