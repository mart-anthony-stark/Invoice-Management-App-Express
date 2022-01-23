const Invoice = require("../model/Invoice");

const getInvoices = async (req, res) => {
  try {
    const invoices = await Invoice.find({ user_id: req.user._id });
    res.json(invoices);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

const getInvoiceById = async (req, res) => {
  try {
    const invoice = await Invoice.findOne({
      user_id: req.user._id,
      _id: req.params.id,
    });
    res.json({ param: req.params.id, invoice });
  } catch (error) {
    res.status(500).json(error);
  }
};

const createInvoice = async (req, res) => {
  try {
    const {
      client_id,
      status,
      start_date,
      due,
      payment_terms,
      product_desc,
      items,
    } = req.body;
    const invoice = await new Invoice({
      user_id: req.user._id,
      client_id,
      status,
      start_date,
      due,
      payment_terms,
      product_desc,
      items,
    }).save();
    res.json(invoice);
  } catch (error) {
    res.status(500).json(error);
  }
};

const updateInvoice = async (req, res) => {
  try {
    const updatedInvoice = await Invoice.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedInvoice);
  } catch (error) {
    res.status(500).json(error);
  }
};

const deleteInvoice = async (req, res) => {
  try {
    await Invoice.findOneAndDelete({ _id: req.params.id });
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  getInvoices,
  getInvoiceById,
  createInvoice,
  updateInvoice,
  deleteInvoice,
};
