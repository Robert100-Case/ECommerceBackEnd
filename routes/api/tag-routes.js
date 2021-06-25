const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const tagData = await Tag.findAll({
      include: [{ model: Product }],
    });
    //console.log(locationData);
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
  
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  const tagData = await Tag.findByPk(req.params.id, {
    include: [{ model: Product }],
  }).then((tagData) => {
    res.json(tagData);
  });
});

router.post('/', async (req, res) => {
  const newCategory = await Tag.create(req.body)  
    .then((newCategory) => {
      // Send the newly created row as a JSON object
  res.json(newTag);
  
    })
  
  // create a new tag
});

router.put('/:id', async (req, res) => {
  const updatedTag = await Tag.update(
    {
      // All the fields you can update and the data attached to the request body.
      id:req.body.id,
      tag_name: req.body.tag_name,
    },
    {
      // Gets the books based on the isbn given in the request parameters
      where: {
        id: req.params.id,
      },
    }
  )
    .then((updatedTag) => {
      // Sends the updated book as a json response
      res.json(updatedTag);
    })
    .catch((err) => res.json(err));

  // update a tag's name by its `id` value
});

router.delete('/:id', async (req, res) => {
  try {
    const tagData = await Tag.destroy({
      where: {
        id: req.params.id
      }
    });

    if (!tagData) {
      res.status(404).json({ message: 'No location found with this id!' });
      return;
    }

    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }

  // delete on tag by its `id` value
});

module.exports = router;
