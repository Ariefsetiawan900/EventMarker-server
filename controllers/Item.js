const Item = require("../models/Item");

module.exports = {
  CreateEvent: async (req, res) => {
    try {
      const { title, location, date, participant, img, note } = req.body;

      const newItem = await new Item({
        title,
        location,
        date,
        participant,
        note,
        img,
      });

      //   if (!req.file) {
      //     return res.status(404).json({ message: "Image Not Found" });
      //   }

      if (!title || !location || !date || !participant || !note || !img) {
        res.status(422).json({ message: "Please add all the field" });
      }

      if (note.length === 50) {
        res.status(422).json({ message: "Minimum 50 letters" });
      }

      const savedItem = await newItem.save();
      res.status(201).json(savedItem);
    } catch (err) {
      res.status(500).json({ message: "Internal server error" });
    }
  },

  GetEvent: async (req, res) => {
    try {
    const items = await Item.find()
    res.status(200).json(items)
    } catch (err) {
      res.status(500).json({ message: "Internal server error" });
    }
  },
};
