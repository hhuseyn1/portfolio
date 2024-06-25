const express = require('express');
const Skill = require('../models/skill');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const skills = await Skill.find();
    res.json(skills);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

router.get('/:id', async (req, res) => {
  try {
    const skill = await Skill.findById(req.params.id);
    if (!skill) {
      return res.status(404).json({ msg: 'Skill not found' });
    }
    res.json(skill);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

router.post('/', async (req, res) => {
  const { name } = req.body;

  try {
    let skill = await Skill.findOne({ name });
    if (skill) {
      return res.status(400).json({ msg: 'Skill already exists' });
    }

    skill = new Skill({
      name,
    });

    await skill.save();
    res.json(skill);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

router.put('/:id', async (req, res) => {
  const { name } = req.body;

  try {
    let skill = await Skill.findById(req.params.id);
    if (!skill) {
      return res.status(404).json({ msg: 'Skill not found' });
    }

    skill.name = name || skill.name;;

    await skill.save();
    res.json(skill);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const skill = await Skill.findById(req.params.id);
    if (!skill) {
      return res.status(404).json({ msg: 'Skill not found' });
    }

    await skill.remove();
    res.json({ msg: 'Skill removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
