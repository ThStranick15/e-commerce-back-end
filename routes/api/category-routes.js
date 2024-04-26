const router = require('express').Router();
const { Category, Product } = require('../../models');
const { update } = require('../../models/Product');

// The `/api/categories` endpoint
router.use('/api/categories', router)

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
  const categories = await Category.findAll({
    include: Product
  })

  res.json(categories)
}catch(err){
  res.json({
    message: "Error getting Category"
  })
}
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try{
  const id = req.params.id
  const category = await Category.findByPk(id,{
    include: Product
  })

  res.json(category)
}catch(err){
  res.json({
    message: "Error getting Category"
  })
}
});

router.post('/', async (req, res) => {
  // create a new category
  try{
  const newCategory = req.body.name // category name is inputted
  const category = await Category.create({category_name: newCategory})

  res.json(category)
  }catch(err){
    res.json({
      message: "Error posting Category"
    })
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try{
  const id = req.params.id
  const updateCategory = req.body.name
  const category = await Category.update({category_name: updateCategory},{
    where: {
      id: id
    }
  })

  res.json(category)
}catch(err){
  res.json({
    message: "Error updating Category"
  })
}
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try{
  const id = req.params.id
  const category = await Category.destroy({
    where: {
      id: id
    }
  })

  res.json(category)
}catch(err){
  res.json({
    message: "Error deleting Category"
  })
}
});

module.exports = router;
