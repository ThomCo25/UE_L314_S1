const db = require("./../models");
const users = db.users;
let self = {};
self.getAll = async (req, res) => {
    try {
        let data = await users.findAll({
            attributes: ["id", "firstname", "lastname"]
        });
        return res.json({
            status: "ok",
            data: data
        })
    } catch (error) {
        res.status(500).json({
            status: "error",
            data: error
        })
    }
}
self.get = async (req, res) => {
    try {
        let id = req.params.id;
        let data = await users.findOne({
            attributes: ["id", "firstname", "lastname"],
            where: {
                id: id
            }
        });
        return res.json({
            status: "ok",
            data: data
        })
    } catch (error) {
        res.status(500).json({
            status: "error",
            data: error
        })
    }
}
self.save = async (req, res) => {
    try {
        let body = req.body;
        let data = await users.create(body);
        return res.json({
            status: "ok",
            data: data
        })
    } catch (error) {
        res.status(500).json({
            status: "error",
            data: error
        })
    }
}
self.update = async (req, res) => {
    try {
        let id = req.params.id;
        let body = req.body;
        let data = await users.update(body, {
            where: {
                id: id
            }
        });
        return res.json({
            status: "ok",
            data: data
        })
    } catch (error) {
        res.status(500).json({
            status: "error",
            data: error
        })
    }
}
self.delete = async (req, res) => {
    try {
        let id = req.params.id;
        let data = await users.destroy({
            where: {
                id: id
            }
        });
        return res.json({
            status: "ok",
            data: data
        })
    } catch (error) {
        res.status(500).json({
            status: "error",
            data: error
        })
    }
}
module.exports = self;