const express = require('express');
const db = require('../data/helpers/projectModel')

const router = express.Router();

router.get('/', (req, res) => {
    try {
        db.get()
            .then(projects => {
                res.status(200).json(projects)
            })
            .catch(error => {
                res.status(404).json({
                    message: "Could not find projects"
                })
            })    
    } catch (error) {
        res.status(500).json({
            message: "Server could not find projects"
        })
    }
});

router.get('/:id', (req, res) => {
    const projectId = req.params.id;

    try {
        db.get(projectId)
        .then(project => {
            res.status(200).json(project)
        })
        .catch(error => {
            res.status(404).json({
                message: "Could not find project"
            })
        }) 
    } catch (error) {
        res.status(500).json({
            message: "Server could not find project"
        })
    }
});

module.exports = router;