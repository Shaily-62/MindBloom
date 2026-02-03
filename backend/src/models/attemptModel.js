const mongoose = require("mongoose");

const AttemptSchema = new mongoose.Schema(
    {
        childId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Child",
            required: true,
        },

        gameType: {
            type: String,
            enum: [
                "PhonemeDiscrimination",
                "RapidNaming",
                "LetterOrientation",
                "WordBlending",
            ],
            required: true,
        },

        skill: {
            type: String, // phonemic awareness, visual processing, fluency
            required: true,
        },

        stimulus: {
            type: String, // e.g. "ba vs da", "b vs d"
        },

        response: {
            type: String,
        },

        isCorrect: {
            type: Boolean,
            required: true,
        },

        responseTime: {
            type: Number, // milliseconds
        },

        createdAt: {
            type: Date,
            default: Date.now,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Attempt", AttemptSchema);
