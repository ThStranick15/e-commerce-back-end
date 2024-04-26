const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint
router.use('/api/tags', router)

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try{
  const tags = await Tag.findAll({
    //include: Product
    include: {
      model: Product,
      through: ProductTag
    }
  })

  res.json(tags)
}catch(err){
  res.json({
    message: "Error deleting Tag"
  })
}});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const id = req.params.id
    const tag = await Tag.findByPk(id, {
      //include: Product
      include: {
        model: Product,
        through: ProductTag
      }
    })

    res.json(tag)
  } catch (err) {
    res.json({
      message: "Error deleting Tag"
    })
  }})

router.post('/', async (req, res) => {
  // create a new tag
  try {
    const newTag = req.body.name // category name is inputted
    const tag = await Tag.create({ tag_name: newTag })

    res.json(tag)
  } catch (err) {
    res.json({
      message: "Error deleting Tag"
    })
  }});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try {
    const id = req.params.id
    const updateTag = req.body.name
    const tag = await Tag.update({ tag_name: updateTag }, {
      where: {
        id: id
      }
    })

    res.json(tag)
  } catch (err) {
    res.json({
      message: "Error updating Tag"
    })
  }});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  try {
    const id = req.params.id
    const tag = await Tag.destroy({
      where: {
        id: id
      }
    })

    res.json(tag)
  } catch (err) {
    res.json({
      message: "Error deleting Tag"
    })
  }
});

module.exports = router;
