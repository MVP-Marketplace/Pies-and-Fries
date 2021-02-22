const router = require('express').Router(),
  {
    createUser,
    loginUser,
    requestPasswordReset,
  } = require('../../controllers/users');

router.post('/', createUser);

router.post('/login', loginUser);
router.patch('/resetpassword', requestPasswordReset);

module.exports = router;
