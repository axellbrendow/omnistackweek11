import { Request, Response } from "express";

import NGO from "../database/models/ngo";

class SessionController {
  static async create(req: Request, res: Response) {
    const { id } = req.body;

    const ngo = await NGO.findOne({ where: { id } });

    if (!ngo) return res.status(404).json({ error: "NGO not found" });

    return res.json({ name: ngo.name });
  }
}

export default SessionController;
