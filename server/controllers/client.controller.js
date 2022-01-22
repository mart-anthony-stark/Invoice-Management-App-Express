const Client = require("../model/Client");

const getClients = async (req, res) => {
  try {
    const clients = await Client.find({ user_id: req.user._id });
    res.json(clients);
  } catch (error) {
    res.status(500).json(error);
  }
};

const getClientById = async (req, res) => {
  try {
    const client = await Client.findOne({
      user_id: req.user._id,
      _id: req.params.id,
    });
    res.json({ param: req.params.id, client });
  } catch (error) {
    res.status(500).json(error);
  }
};

const createClient = async (req, res) => {
  try {
    const { name, email, street_address, city, zip_code, country } = req.body;
    const client = await new Client({
      user_id: req.user._id,
      name,
      email,
      street_address,
      city,
      zip_code,
      country,
    }).save();
    res.json(client);
  } catch (error) {
    res.status(500).json(error);
  }
};

const updateClient = async (req, res) => {
  try {
    const updatedClient = await Client.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedClient);
  } catch (error) {
    res.status(500).json(error);
  }
};

const deleteClient = async (req, res) => {
  try {
    await Client.findOneAndDelete({ _id: req.params.id });
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  getClients,
  getClientById,
  createClient,
  updateClient,
  deleteClient,
};
