const mongoose = require("mongoose");

const SkillScoreSchema = new mongoose.Schema({
    skillName: {
        type: String,
        required: true
    },
    score: {
        type: Number,
        default: 0
    }, // 0–100
});

module.exports = mongoose.model("SkillScore", SkillScoreSchema);