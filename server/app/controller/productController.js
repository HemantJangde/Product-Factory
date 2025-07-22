const Note = require("../Model/ProductModel.js");

async function findAll(req, res) {
    try {
        const notes = await Note.find().sort({ createdAt: -1 });
        res.status(200).json(notes);
    } catch (error) {
        console.log(`Error in findAll controller`, error);
        res.status(500).json({ message: "Internal server error" });
    }
}

async function findNotesById(req, res) {
    try {
        const note = await Note.findById(req.params.id);
        if (!note) return res.status(404).json({ message: "Product not found" });
        res.status(200).json(note);
    } catch (error) {
        console.log(`Error in findNotesById controller`, error);
        res.status(500).json({ message: "Internal server error" });
    }
}

async function create(req, res) {
    try {
        const { product, content, price, profilePicture } = req.body;

        if (!product || !content || !price) {
            return res.status(400).json({ message: "Product name, description, and price are required" });
        }

        const insertNote = new Note({ product, content, price, profilePicture });
        const savedNote = await insertNote.save();
        res.status(201).json(savedNote);
    } catch (error) {
        console.log(`Error in create controller`, error);
        res.status(500).json({ message: "Internal server error" });
    }
}

async function update(req, res) {
    try {
        const { product, content, price, profilePicture } = req.body;

        const updateNote = await Note.findByIdAndUpdate(
            req.params.id,
            { product, content, price, profilePicture },
            { new: true }
        );

        if (!updateNote) {
            return res.status(404).json({ message: "Product not found" });
        }

        res.status(200).json(updateNote);
    } catch (error) {
        console.log(`Error in update controller`, error);
        res.status(500).json({ message: "Internal server error" });
    }
}

async function deleteone(req, res) {
    try {
        const deleteNote = await Note.findByIdAndDelete(req.params.id);
        if (!deleteNote) return res.status(404).json({ message: "Product not found" });
        res.status(200).json({ message: 'Product deleted successfully' });
    } catch (error) {
        console.log(`Error in deleteone controller`, error);
        res.status(500).json({ message: "Internal server error" });
    }
}

module.exports = {
    deleteone,
    create,
    findAll,
    findNotesById,
    update
};
