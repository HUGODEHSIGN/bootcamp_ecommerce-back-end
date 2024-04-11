const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  try {
    // find all categories
    // be sure to include its associated Products
    const category = await Category.findAll({
      include: [{ model: Product, as: 'products' }],
    });
    res.status(200).json(category);
  } catch (err) {
    console.error(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    // find one category by its `id` value
    // be sure to include its associated Products
    const category = await Category.findByPk(req.params.id, {
      where: {
        id: req.params.id,
      },
      include: [{ model: Product, as: 'products' }],
    });
    res.status(200).json(category);
  } catch (err) {
    console.error(err);
  }
});

router.post('/', async (req, res) => {
  try {
    // create a new category
    const category = await Category.create(req.body);
    res.status(200).json(category);
  } catch (err) {
    console.error(err);
  }
});

router.put('/:id', async (req, res) => {
  try {
    // update a category by its `id` value
    const category = await Category.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(category);
  } catch (err) {
    console.error(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const category = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(category);
  } catch (err) {
    console.error(err);
  }
});

module.exports = router;
