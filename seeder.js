const fs = require("fs");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const colors = require("colors");

// Load env vars
dotenv.config();

// Load models
const Person = require("./models/Person");

// Connect to Database
mongoose.connect(process.env.MONGO_URI);

// Read JSON files
const persons = JSON.parse(fs.readFileSync(`${__dirname}/_data/persons.json`, "utf-8"));

// Import Data to Database
const importData = async () => {
    try {
        await Person.create(persons);

        console.log(`Data imported...`.green.inverse);
        process.exit();
    } catch(error) {
        console.log(error);
    }
}

// Delete data from database
const deleteData = async () => {
    try {
        await Person.deleteMany();

        console.log(`Data Destroyed...`.red.inverse);
        process.exit();
    } catch(error) {
        console.log(error);
    }
}

if(process.argv[2] === "-i") {
    importData();
} else if(process.argv[2] === "-d") {
    deleteData();
}
