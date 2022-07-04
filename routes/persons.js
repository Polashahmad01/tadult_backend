const express = require("express");

const { getPersons, createPersons, getPerson, updatePerson, deletePerson } = require("../controllers/persons");

const router = express.Router();

router
    .route("/")
    .get(getPersons)
    .post(createPersons);

router
    .route("/:id")
    .get(getPerson)
    .put(updatePerson)
    .delete(deletePerson);

module.exports = router;
