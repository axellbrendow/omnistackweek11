import { Request, Response } from "express";

import NGO from "../database/models/ngo";
import Incident from "../database/models/incident";
import paginate from "../utils/paginate";
import createUniqueId from "../utils/createUniqueId";

class NGOController {
  static async create(req: Request, res: Response) {
    const { name, email, whatsapp, city, fu } = req.body;
    const id = createUniqueId();

    await NGO.create({ id, name, email, whatsapp, city, fu });

    return res.json({ id });
  }

  static async list(req: Request, res: Response) {
    const { page, pageSize } = req.query;
    const ongs = await NGO.findAndCountAll(paginate({ page, pageSize }));
    return res.json(ongs);
  }

  static async listIncidents(req: Request, res: Response) {
    const { page, pageSize } = req.query;
    const ngoId = req.headers.authorization ?? null;
    const incidents = await Incident.findAndCountAll({
      where: { ngoId },
      include: [NGO],
      ...paginate({ page, pageSize }),
    });
    return res.json(incidents);
  }
}

export default NGOController;
