const express = require('express');
const router = express.Router();
const { upload } = require('../config/cloudinary');
const { 
    getTeamMembers, 
    createTeamMember, 
    deleteTeamMember 
} = require('../Controllers/teamController');

router.get('/', getTeamMembers);
router.post('/', upload.single('image'), createTeamMember);
router.delete('/:id', deleteTeamMember);

module.exports = router;