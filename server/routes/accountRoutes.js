const express = require('express');
const { protect } = require('../middleware/authMiddleware');
const Account = require('../models/accountModel');

const router = express.Router();

// Create a new account
router.post('/create', protect, async (req, res) => {
  const { accountNumber, balance } = req.body;

  try {
    const account = await Account.create({
      user: req.user._id,
      accountNumber,
      balance,
    });

    res.status(201).json(account);
  } catch (error) {
    res.status(400).json({ message: 'Error creating account', error });
  }
});

// Get user's accounts
router.get('/my-accounts', protect, async (req, res) => {
  try {
    const accounts = await Account.find({ user: req.user._id });
    res.status(200).json(accounts);
  } catch (error) {
    res.status(400).json({ message: 'Error fetching accounts', error });
  }
});

module.exports = router;

