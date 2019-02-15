const express = require('express');
const db = require('../data/helpers/projectModel')

const router = express.Router();

router.post('/', (req, res) => {
    const projectInfo = req.body;

    try {
        db.insert(projectInfo)
            .then(project => {
                res.status(201).json(project)
            })
            .catch(error => {
                console.log(error);
                res.status(400).json({
                    message: "Bad request, please provide name and description",
                    error
                })
            })
    } catch (error) {
        res.status(500).json({
            message: "Server could not add project to database"
        })
    }
});

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

router.put('/:id', (req, res) => {
    const projectId = req.params.id;
    const projectInfo = req.body;

    try {
        db.update(projectId, projectInfo)
            .then(project => {
                if(project){
                    res.status(200).json(project)
                }else{
                    res.status(404).json({
                        message: "Project could not be found with this ID",
                    })
                }
            })
            .catch(error => {
                res.status(400).json({
                    message: "Bad request. Provide name and description",
                    error
                })
            })
    } catch (error) {
        res.status(500).json({
            message: "Server could not update project"
        })
    }
});

module.exports = router;