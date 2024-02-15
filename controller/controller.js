const Users = require("../model/users");
exports.postController = async (req, res, next) => {
try {
    const post = await Users.create(req.body);
    res.status(201).json(post);
} catch (error) {
    res.status(400).json(error);
}
};
exports.getController = async (req, res, next) => {
try {
    const get = await Users.find();
    res.status(200).json(get);
    if (!get) {
    res.status(404).json("not found");
    }
} catch (error) {
    res.status(400).json(error);
}
};
exports.getOneController = async (req, res, next) => {
try {
    const getOne = await Users.findById(req.params.id);
    res.status(200).json(getOne);
} catch (error) {
    res.status(400).json(error);
}
};
