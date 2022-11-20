import posts from "./tuits.js";
let tuits = posts;

const newTuitTemplate = {
    likes: 0,
    liked: false,
    dislikes: 0,
    replies: 0,
    retuits: 0,
    time: 'just now',
    image: 'nasa_logo.jpg',
    username: 'NASA',
    handle: '@nasa',
    topic: 'Space',
    isVerified: false
}

const createTuit = (req, res) => {
    const newTuit = {
        ...req.body,
        ...newTuitTemplate
    };
    newTuit.title = newTuit.tuit;
    newTuit._id = (new Date()).getTime() + '';
    tuits.unshift(newTuit);
    res.json(newTuit);
}

const findTuits  = (req, res) => {
    res.json(tuits);
};

const updateTuit = (req, res) => {
    const tuitdIdToUpdate = req.params.tid;
    const updates = req.body;
    const tuitIndex = tuits.findIndex((t) => t._id === tuitdIdToUpdate);
    tuits[tuitIndex] = {...tuits[tuitIndex], ...updates};
    res.sendStatus(200);
}


const deleteTuit = (req, res) => {
    const tuitdIdToDelete = req.params.tid;
    tuits = tuits.filter((t) => t._id !== tuitdIdToDelete);
    res.sendStatus(200);
}

export default (app) => {
    app.post('/api/tuits', createTuit);
    app.get('/api/tuits', findTuits);
    app.put('/api/tuits/:tid', updateTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
};
