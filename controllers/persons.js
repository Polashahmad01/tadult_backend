const Person = require("../models/Person");

// @desc    Get All Persons
// @route   GET /api/v1/persons
// @access  Public
exports.getPersons = async (req, res, next) => {
    try {
        const persons = await Person.find();

        res.status(200).json({ success: true, count: persons.length, data: persons });
    } catch(error) {
        res.status(400).json({ success: false });
    }
}

// @desc    Create Person
// @route   POST /api/v1/persons
// @access  Private
exports.createPersons = async (req, res, next) => {
    try {
        const person = await Person.create(req.body);

        res.status(200).json({ success: true, data: person });
    } catch(error) {
        res.status(400).json({ success: false });
    }
}

// @desc    Get Single Person
// @route   POST /api/v1/persons/:id
// @access  Public
exports.getPerson = async (req, res, next) => {
    try {
        const person = await Person.findById(req.params.id);

        res.status(200).json({ success: true, data: person });
    } catch(error) {
        res.status(400).json({ success: false });
    }
}

// @desc    Update Person
// @route   PUT /api/v1/persons/:id
// @access  Private
exports.updatePerson = async (req, res, next) => {
    try {
        const person = await Person.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });

        res.status(200).json({ success: true, data: person });
    } catch(error) {
        res.status(400).json({ success: false });
    }
}

// @desc    Delete Person
// @route   DELETE /api/v1/persons/:id
// @access  Private
exports.deletePerson = async (req, res, next) => {
    try {
        const person = await Person.findById(req.params.id);

        await person.remove();

        res.status(200).json({ success: true, data: {} });
    } catch(error) {
        res.status(400).json({ success: false });
    }
}
