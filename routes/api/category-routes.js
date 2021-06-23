const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

 router.get('/', async (req, res) => {
  console.log("entered category route");
  try {
    const locationData = await Category.findAll();
    //console.log(locationData);
    res.status(200).json(locationData);
  } catch (err) {
    res.status(500).json(err);
  }
  
  
  /*Category.findAll().then((bookData) => {
    res.json(bookData);
  })
  // find all categories
  // be sure to include its associated Products*/
});

router.get('/:id', async (req, res) => {
  
  const locationData = await Category.findByPk(req.params.id).then((locationData) => {
    res.json(locationData);
  });
   
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/', async (req, res) => {
  const newCategory= await Category.create({
    id:req.body.category.id,
    category_name: req.body.category_name
    
    
  })  
    
    .then((newCategory) => {
      // Send the newly created row as a JSON object
  res.json(newCategory);
  
    })
    /*.catch((err) => {
      res.json(err);
    });
  // create a new category*/
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  deletedCategory = await Category.destroy({
    where: {
     id: req.params.id,
    },
  })
    .then((deletedCategory) => {
      res.json(deletedCategory);
    })
    .catch((err) => res.json(err));
});

module.exports = router;
