const router = require("express").Router();
const { isAuth } = require("../utils/jwt");
const clientController = require("../controllers/client.controller");

router.get("/", isAuth, clientController.getClients);
router.get("/:id", isAuth, clientController.getClientById);
router.post("/", isAuth, clientController.createClient);
router.put("/:id", isAuth, clientController.updateClient);
router.delete('/:id', isAuth, clientController.deleteClient)

module.exports = router;
