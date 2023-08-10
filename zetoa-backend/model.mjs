import mongoose from 'mongoose';
import 'dotenv/config';

mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    { useNewURLParser: true}
);

const database_connection = mongoose.connection;

database_connection.once("open", (fail) => {
    if (fail) {
        res.status(500).json({Error: '500: Connection to the server failed. Try again later.'});
    }
    else {
        console.log("Connected successfully to MongoDB RecipeLog collection utilizing Mongoose.");
    }
    
});


const recipeSchema = mongoose.Schema({
    recipeName: {type: String, required: true },
    cookTime: {type: Number, required: true },
    numIngredients: {type: Number, required: true },
    date: { type: Date, required: true, default: Date.now}
});

const Recipe = mongoose.model("Recipe", recipeSchema);

const makeRecipe = async (rec_name, cookTime, numIngredients, date) => {
    const recipe = new Recipe({
        recipeName: rec_name,
        cookTime: cookTime,
        numIngredients: numIngredients,
        date: date
    })
    return recipe.save();
}


const retrieveRecipe = async () => {
    const recipeQuery = Recipe.find();
    return recipeQuery.exec();
}

const retrieveRecipeByID = async (id) => {
    const recipeQuery = Recipe.findById(id);
    return recipeQuery.exec();
}

const updateRecipe = async (id, rec_name, cookTime, numIngredients, date) => {
    const final = await Recipe.replaceOne({ _id: id }, { 
        recipeName: rec_name,
        cookTime: cookTime,
        numIngredients: numIngredients,
        date: date
    });
    return {
        id: id,
        recipeName: rec_name,
        cookTime: cookTime,
        numIngredients: numIngredients,
        date: date
    }
}

const removeByID = async (id) => {
    const final = await Recipe.deleteOne({ _id: id });
    return final.deletedCount;
}

export { makeRecipe, retrieveRecipe, retrieveRecipeByID, updateRecipe, removeByID };