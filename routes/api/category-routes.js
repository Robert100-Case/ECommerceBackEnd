const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

 router.get('/', async (req, res) => {
//  console.log("entered category route");
try {
  const categoryData = await Category.findAll({
    include: [{ model: Product }],
  });
  res.status(200).json(categoryData);
} catch (err) {
  res.status(500).json(err);
}
  
  // find all categories
  // be sure to include its associated Products*/
});

router.get('/:id', async (req, res) => {
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      include: [{ model: Product }],
    });

   
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});
  
  /*const categoryData = await Category.findByPk(req.params.id).then((categoryData) => {
    res.json(categoryData);
  });
   
  // find one category by its `id` value
  // be sure to include its associated Products
});*/

router.post('/', async (req, res) => {
  const newCategory = await Category.create(req.body)  
    .then((newCategory) => {
      // Send the newly created row as a JSON object
  res.json(newCategory);
  
    })
    /*.catch((err) => {
      res.json(err);
    });
  // create a new category*/
});

router.put('/:id',  async (req, res) => {
  // update a category by its `id` value
const updatedCategory = await Category.update(
    {
      // All the fields you can update and the data attached to the request body.
      id:req.body.id,
      category_name: req.body.category_name,
    },
    {
      // Gets the books based on the isbn given in the request parameters
      where: {
        id: req.params.id,
      },
    }
  )
    .then((updatedCategory) => {
      // Sends the updated book as a json response
      res.json(updatedCategory);
    })
    .catch((err) => res.json(err));

  /*Category.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((prodct) => {
      // find all associated tags from ProductTag
      return ProductTag.findAll({ where: { product_id: req.params.id } });
    })
    .then((productTags) => {
      // get list of current tag_ids
      const productTagIds = productTags.map(({ tag_id }) => tag_id);
      // create filtered list of new tag_ids
      const newProductTags = req.body.tagIds
        .filter((tag_id) => !productTagIds.includes(tag_id))
        .map((tag_id) => {
          return {
            product_id: req.params.id,
            tag_id,
          };
        });
      // figure out which ones to remove
      const productTagsToRemove = productTags
        .filter(({ tag_id }) => !req.body.tagIds.includes(tag_id))
        .map(({ id }) => id);

      // run both actions
      return Promise.all([
        ProductTag.destroy({ where: { id: productTagsToRemove } }),
        ProductTag.bulkCreate(newProductTags),
      ]);
    })
    .then((updatedProductTags) => res.json(updatedProductTags))
    .catch((err) => {
      // console.log(err);
      res.status(400).json(err);
    });
*/
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
