const mongoose = require("mongoose");
const skillScores = require("./skillScoreModel")

const ChildSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },

        age: {
            type: Number,
            required: true,
        },

        gender: {
            type: String,
            enum: ["male", "female", "other"],
        },

        language: {
            type: String,
            default: "English",
        },

        dyslexiaLevel: {
            type: String,
            enum: ["Mild", "Moderate", "Severe"],
            default: "Mild",
        },

        dyslexiaProfile: {
            type: String,
            enum: ["Phonological", "Visual", "Mixed"],
            default: "Phonological",
        },

        skillScores: [SkillScoreSchema],

        createdAt: {
            type: Date,
            default: Date.now,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Child", ChildSchema);
