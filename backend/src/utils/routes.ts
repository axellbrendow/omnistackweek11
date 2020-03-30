import express from "express";
import NGOController from "../controllers/NGOController";
import IncidentController from "../controllers/IncidentController";
import SessionController from "../controllers/SessionController";

const routes = express.Router();

routes.route("/sessions").post(SessionController.create);
routes.route("/ngos").post(NGOController.create).get(NGOController.list);
routes.route("/ngos/incidents").get(NGOController.listIncidents);
routes
  .route("/incidents")
  .post(IncidentController.create)
  .get(IncidentController.list);

routes.route("/incidents/:id").delete(IncidentController.delete);

export default routes;
