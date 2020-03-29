import { Request, Response } from "express";

import Incident from "../database/models/incident";
import paginate from "../utils/paginate";
import NGO from "../database/models/ngo";

class IncidentController {
  static async create(req: Request, res: Response) {
    const { title, description, value } = req.body;
    const ongId = req.headers.authorization;

    const incident = await Incident.create({
      title,
      description,
      value,
      ongId,
    });

    return res.json({ id: incident.id });
  }

  static async list(req: Request, res: Response) {
    const { page, pageSize } = req.query;
    const incidents = await Incident.findAndCountAll({
      ...paginate({ page, pageSize }),
      include: [NGO],
    });

    return res.json(incidents);
  }

  static async listForNGO(req: Request, res: Response) {
    const ngoId = req.headers.authorization ?? null;
    const incidents = await Incident.findAll({ where: { ngoId } });
    return res.json(incidents);
  }

  static async delete(req: Request, res: Response) {
    const { id } = req.params;
    const ngoId = req.headers.authorization;

    const incident = await Incident.findOne({ where: { id } });

    if (!incident) return res.status(404).json({ error: "Incident not found" });
    if (incident.ngoId !== ngoId)
      return res
        .status(401)
        .json({ error: "This incident does not belong to your NGO" });

    await incident.destroy();

    return res.status(204).send();
  }
}

export default IncidentController;
