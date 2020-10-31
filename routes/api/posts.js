const express = require('express');
const router =  express.Router();

//@router-> GET api/posts
//@desc -> Test Route

router.get('/', (req, res) => res.send('Posts route'));

// export route
module.exports = router;