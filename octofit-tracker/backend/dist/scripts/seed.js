"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const models_1 = require("../models");
// Seed the octofit_db database with test data
async function seedDatabase() {
    const mongoUri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/octofit_db';
    await mongoose_1.default.connect(mongoUri);
    console.log('Connected to MongoDB for seeding');
    await Promise.all([
        models_1.User.deleteMany({}),
        models_1.Team.deleteMany({}),
        models_1.Activity.deleteMany({}),
        models_1.LeaderboardEntry.deleteMany({}),
        models_1.Workout.deleteMany({}),
    ]);
    const users = await models_1.User.insertMany([
        {
            name: 'Ava Chen',
            email: 'ava.chen@example.com',
            role: 'member',
            fitnessGoal: 'Run a half marathon',
        },
        {
            name: 'Noah Patel',
            email: 'noah.patel@example.com',
            role: 'coach',
            fitnessGoal: 'Lead weekly strength sessions',
        },
        {
            name: 'Mina Alvarez',
            email: 'mina.alvarez@example.com',
            role: 'member',
            fitnessGoal: 'Improve mobility',
        },
    ]);
    const teams = await models_1.Team.insertMany([
        {
            name: 'River Runners',
            description: 'Early morning runners focused on endurance',
            members: [users[0]._id, users[2]._id],
            goal: 'Complete five 10K runs this month',
        },
        {
            name: 'Peak Performers',
            description: 'Strength and conditioning team',
            members: [users[1]._id, users[0]._id],
            goal: 'Increase total weekly training load',
        },
    ]);
    await models_1.Activity.insertMany([
        {
            userId: users[0]._id,
            type: 'run',
            durationMinutes: 35,
            caloriesBurned: 420,
            date: new Date('2026-06-20'),
            notes: 'Steady pace along the river trail',
        },
        {
            userId: users[1]._id,
            type: 'strength',
            durationMinutes: 50,
            caloriesBurned: 310,
            date: new Date('2026-06-21'),
            notes: 'Upper body and core focus',
        },
        {
            userId: users[2]._id,
            type: 'yoga',
            durationMinutes: 30,
            caloriesBurned: 180,
            date: new Date('2026-06-22'),
            notes: 'Mobility and recovery flow',
        },
    ]);
    await models_1.LeaderboardEntry.insertMany([
        {
            userId: users[0]._id,
            name: users[0].name,
            score: 95,
            rank: 1,
        },
        {
            userId: users[2]._id,
            name: users[2].name,
            score: 89,
            rank: 2,
        },
        {
            userId: users[1]._id,
            name: users[1].name,
            score: 84,
            rank: 3,
        },
    ]);
    await models_1.Workout.insertMany([
        {
            title: 'HIIT Cardio',
            description: 'Fast intervals for endurance and calorie burn',
            difficulty: 'intermediate',
            durationMinutes: 25,
            focus: 'Cardio',
        },
        {
            title: 'Core Stability',
            description: 'Low-impact full core circuit',
            difficulty: 'beginner',
            durationMinutes: 20,
            focus: 'Core',
        },
        {
            title: 'Strength Builder',
            description: 'Compound movements for strength gains',
            difficulty: 'advanced',
            durationMinutes: 45,
            focus: 'Strength',
        },
    ]);
    console.log(`Seeded ${teams.length} teams, ${users.length} users, activities, leaderboard entries, and workouts.`);
    await mongoose_1.default.disconnect();
}
seedDatabase().catch((error) => {
    console.error('Seed failed:', error);
    process.exit(1);
});
