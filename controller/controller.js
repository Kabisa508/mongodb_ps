const student = require('../data/student.model');

exports.addStudent = async (req, res) => {
    const { name, course } = req.body;
    try {
        const newStudent = new student({ name, course });
        await newStudent.save();
        res.status(201).json({ 
            message: 'Student added successfully', 
            data: newStudent
         });
    }catch (err){
        res.status(500).json({ 
            message: 'Error adding student', 
            error: err.message 
        });
    }
};

exports.getStudent = async (req, res) => {
    try {
        const students = await student.find();
        res.status(200).json({
            message: 'Students retrieved successfully',
            data: students
        });
    } catch (err) {
        res.status(500).json({
            message: 'Error retrieving students',
            error: err.message
        });
    }
};