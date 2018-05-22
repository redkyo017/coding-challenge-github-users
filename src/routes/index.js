import express from 'express';
const router = express.Router();


router.get('/', require("./listUsers").default);
router.post('/', require("./getGithubUsers").default);

// module.exports = router;
export default router