const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  try {
    // find all tags
    // be sure to include its associated Product data
    const tagData = await Tag.findAll({ include: [{ model: Product }] });
    res.status(200).json(tagData);
  } catch (err) {
    console.error(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    // find a single tag by its `id`
    // be sure to include its associated Product data
    const tagData = await Tag.findByPk(req.params.id, {
      include: [{ model: Product }],
    });
    res.status(200).json(tagData);
  } catch (err) {
    console.error(err);
  }
});

router.post('/', async (req, res) => {
  try {
    // create a new tag
    const tag = await Tag.create(req.body);
    res.status(200).json(tag);
  } catch (err) {
    console.error(err);
  }
});

router.put('/:id', async (req, res) => {
  try {
    // update a tag's name by its `id` value
    const tag = await Tag.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(tag);
  } catch (err) {
    console.error(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    // delete on tag by its `id` value
    const tag = await Tag.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(tag);
  } catch (err) {
    console.error(err);
  }
});

module.exports = router;
