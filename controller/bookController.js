const bookModel = require('../models/bookModel');


exports.createBook = async (req, res) => {
    try {
        const { title, autor, gender, year } = req.body;
        const bookModels = new bookModel({ title, autor, gender, year });
        await bookModels.save();
        res.status(201).json({ statut: "success", message: "book add successfully"});
    } catch (error) {
        res.status(500).json({ statut: "error", message: "Internal Server Error" });
    }
};

exports.getAllBooks = async (req, res) => {
    try {
        const bookModels = await bookModel.find();
        res.json(bookModels);
    } catch (error) {
        res.status(500).json({ statut:"error", message: "Internal Server Error" });
    }
};


exports.getBookById = async (req, res) => {
    try {
        const bookModels = await bookModel.findById(req.params.id);
        if (!bookModels) return res.status(404).json({ statut:"error", message: "book not found" });
        res.json(bookModels);
    } catch (error) {
        res.status(500).json({ statut: "error", message: "Internal Server Error" });
    }
};


exports.updatebook = async (req, res) => {
    try {
        const bookModels = await bookModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!bookModels) return res.status(404).json({ statut: "error", message: "book not found" });
        res.json({ statut: "success", message: "book has been updated"});
    } catch (error) {
        res.status(500).json({ statut:"error", message: "Internal Server Error" });
    }
};


exports.deleteBook = async (req, res) => {
    try {
        await bookModel.findByIdAndDelete(req.params.id);
        res.json({ statut: "success", message: "book has been deleted" });
    } catch (error) {
        res.status(500).json({ statut: "error", message: "Internal Server Error"});
    }
};



