const router = require('express').Router();
const { Post } = require('../../models');

router.post('/', async (req, res) => {
  try {
    console.log(req.session);
    // Find the user who matches the posted e-mail address
    const postData = await Post.create({user_id:Number(req.session.user_id),title:req.body.name,content:req.body.content});
    console.log(postData);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

module.exports = router;
