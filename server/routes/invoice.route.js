const router = require("express").Router();
const invoiceController = require("../controllers/invoice.controller");
const { isAuth } = require("../utils/jwt");

router.get("/", isAuth, invoiceController.getInvoices);
router.get("/:id", isAuth, invoiceController.getInvoiceById);
router.post("/", isAuth, invoiceController.createInvoice);
router.put("/:id", isAuth, invoiceController.updateInvoice);
router.delete("/:id", isAuth, invoiceController.deleteInvoice);

module.exports = router;
