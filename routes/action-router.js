const express = require('express');

const db = require('../data/helpers/actionModel')

const router = express.Router();

router.post('/', (req, res) => {
    const actionInfo = req.body;
    
    try {
        db.insert(actionInfo)
            .then(action => {
                res.status(200).json(action)
            })
            .catch(error => {
                res.status(400).json({
                    message: "Bad request, please provide project_id, description, and notes",
                    error
                })
            })
    } catch (error) {
        res.send(500).json({
            message: "Server could not add action",
            error
        })
    }
});

router.get('/', (req, res) => {
    db.get()
        .then(actions => {
            res.status(200).json(actions);
        })
        .catch(error => {
            res.status(500).json({
                message: "Server couldn't get actions",
                error
            })
        })
});

router.delete('/:id', (req, res) => {
    const actionId = req.params.id;
    
    db.remove(actionId)
        .then(action => {
            if(action){
                res.status(200).json({
                    message: "Action was deleted"
                })
            }else{
                res.status(404).json({
                    message: "Action could not be found with this ID",
                })
            }
        })
        .catch(error => {
            res.status(500).json({
                message: "Server could not remove action",
                error
            })
        })
});

module.exports = router;