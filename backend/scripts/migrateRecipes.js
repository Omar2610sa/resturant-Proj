require("dotenv").config();

const mongoose = require("mongoose");
const Recipe = require("../models/recipe.model");
const dns = require("node:dns");

dns.setServers(["8.8.8.8", "1.1.1.1"]);

const migrateRecipes = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);

        console.log("Database connected");

        // Read raw documents to avoid Mongoose schema casting
        const recipes = await Recipe.collection.find({}).toArray();

        let migratedCount = 0;

        for (const recipe of recipes) {
            const update = {};

            // Migrate title
            if (typeof recipe.title === "string") {
                update.title = {
                    ar: recipe.title,
                    en: null,
                };
            }

            // Migrate description
            if (typeof recipe.description === "string") {
                update.description = {
                    ar: recipe.description,
                    en: null,
                };
            }

            // Migrate ingredients
            if (Array.isArray(recipe.ingredients)) {
                update.ingredients = {
                    ar: recipe.ingredients,
                    en: null,
                };
            }
            // Migrate instructions
            if (Array.isArray(recipe.instructions)) {
                update.instructions = {
                    ar: recipe.instructions,
                    en: null,
                };
            }

            // Skip already migrated documents
            if (Object.keys(update).length === 0) {
                continue;
            }

            await Recipe.collection.updateOne(
                { _id: recipe._id },
                { $set: update }
            );

            migratedCount++;
        }

        console.log(`${migratedCount} recipes migrated successfully`);
    } catch (error) {
        console.error("Migration failed:", error);
    } finally {
        await mongoose.disconnect();
    }
};

migrateRecipes();
