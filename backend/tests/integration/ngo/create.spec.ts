import supertest from "supertest";
import { spawn } from "child-process-promise";

import app from "../../../src/app";
import { undoMigrations, migrate } from "../../dbutils";

describe("NGO", () => {
  beforeEach(async () => {
    await undoMigrations();
    await migrate();
  });

  it("should create a NGO", async () => {
    const response = await supertest(app).post("/ngos").send({
      name: "APAD",
      email: "contato@apad.com.br",
      whatsapp: "31999999999",
      city: "Rio do Sul",
      uf: "SC",
    });

    expect(response.body).toHaveProperty("id");
    expect(response.body.id).toHaveLength(36);
  });

  afterAll(async () => {
    await undoMigrations();
  });
});
