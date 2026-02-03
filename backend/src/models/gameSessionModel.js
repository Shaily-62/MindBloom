const mongoose = require("mongoose");

const GameSessionSchema = new mongoose.Schema(
    {
        childId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Child",
            required: true,
        },

        sessionType: {
            type: String,
            enum: ["Screening", "Training"],
            required: true,
        },

        gamesPlayed: [
            {
                gameType: String,
                accuracy: Number,
                avgResponseTime: Number,
            },
        ],

        totalScore: {
            type: Number,
            default: 0,
        },

        duration: {
            type: Number, // minutes
        },

        createdAt: {
            type: Date,
            default: Date.now,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("GameSession", GameSessionSchema);
