import express from "express";
import NGOController from "../controllers/NGOController";
import IncidentController from "../controllers/IncidentController";
import SessionController from "../controllers/SessionController";
import ngoValidators from "../validators/ngo";
import sessionValidators from "../validators/session";
import incidentValidators from "../validators/incident";

const routes = express.Router();

routes
  .route("/sessions")
  .post(sessionValidators.create.middleware, SessionController.create);

routes
  .route("/ngos")
  .post(ngoValidators.create.middleware, NGOController.create)
  .get(ngoValidators.list.middleware, NGOController.list);

routes
  .route("/ngos/incidents")
  .get(ngoValidators.listIncidents.middleware, NGOController.listIncidents);

routes
  .route("/incidents")
  .post(incidentValidators.create.middleware, IncidentController.create)
  .get(incidentValidators.list.middleware, IncidentController.list);

routes
  .route("/incidents/:id")
  .delete(incidentValidators.remove.middleware, IncidentController.delete);

export default routes;
