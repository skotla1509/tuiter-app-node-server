import * as tuitsDao from './tuits-dao.js';

const createTuit = async (req, res) => {
    const newTuit = req.body;
    newTuit.title = newTuit.tuit;
    tuitsDao.createTuit(newTuit)
        .then((result) => {
            res.json(result);
        })
        .catch((error) => {
            res.sendStatus(400);
        });
}

const findTuits  = async (req, res) => {
    const tuits = await tuitsDao.findTuits();
    res.json(tuits);
};

const updateTuit = async (req, res) => {
    const tuitdIdToUpdate = req.params.tid;
    const updates = req.body;
    tuitsDao.updateTuit(tuitdIdToUpdate, updates)
        .then((result) => {
            res.sendStatus(200);
        })
        .catch((error) => {
            res.sendStatus(400);
        });
}

const deleteTuit = async (req, res) => {
    const tuitdIdToDelete = req.params.tid;
    tuitsDao.deleteTuit(tuitdIdToDelete)
        .then((result) => {
            res.sendStatus(200);
        })
        .catch((error) => {
            res.sendStatus(400);
        });
}

export default (app) => {
    app.post('/api/tuits', createTuit);
    app.get('/api/tuits', findTuits);
    app.put('/api/tuits/:tid', updateTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
};
