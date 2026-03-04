const Team = require('../Models/Team');
const { cloudinary } = require('../config/cloudinary');

exports.getTeamMembers = async (req, res) => {
    try {
        const members = await Team.find().sort({ order: 1, createdAt: -1 });
        res.status(200).json(members);
    } catch (error) {
        res.status(500).json({ message: "Server Error", error: error.message });
    }
};

exports.createTeamMember = async (req, res) => {
    try {
        const { name, role, bio, order } = req.body;

        if (!req.file) {
            return res.status(400).json({ message: "Please upload an image" });
        }

        const newMember = await Team.create({
            name,
            role,
            bio,
            order,
            image: {
                url: req.file.path,   
                public_id: req.file.filename 
            }
        });

        res.status(201).json(newMember);
    } catch (error) {
        res.status(400).json({ message: "Data Validation Failed", error: error.message });
    }
};

exports.deleteTeamMember = async (req, res) => {
    try {
        const member = await Team.findById(req.params.id);
        if (!member) return res.status(404).json({ message: "Member not found" });

        await cloudinary.uploader.destroy(member.image.public_id);
        
        await member.deleteOne();
        res.status(200).json({ message: "Member and Image deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Delete Failed", error: error.message });
    }
};