import { Request, Response } from "express";
import uuidv4 from "uuid/v4";

import NGO from "../database/models/ngo";
import Incident from "../database/models/incident";

class NGOController {
  static async create(req: Request, res: Response) {
    const { name, email, whatsapp, city, uf } = req.body;
    const id = uuidv4();

    await NGO.create({ id, name, email, whatsapp, city, uf });

    return res.json({ id });
  }

  static async list(req: Request, res: Response) {
    const ongs = await NGO.findAll();

    return res.json(ongs);
  }

  static async listIncidents(req: Request, res: Response) {
    const ngoId = req.headers.authorization ?? null;
    const incidents = await Incident.findAll({
      where: { ngoId },
      include: [NGO],
    });
    return res.json(incidents);
  }
}

export default NGOController;
