const router = require('express').Router()
const store = require('../../controllers/store')

router.get('/', store.getItems)
router.post('/create', store.createItem )
router.put('/update', store.updateItem)
router.delete('/delete', store.deleteItem)

module.exports = router;
