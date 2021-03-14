import request from "supertest";
import mongoose from "mongoose";
import express from "express";

import { initialServer } from "../server";
import { connectToMongo } from "../utils/mongoose";

let server: express.Express;
let vendorCode: number;

beforeAll(async () => {
  server = initialServer();

  await connectToMongo(process.env.MONGO_URL);
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe("Machine route", () => {
  it("should create machine and return with ok status", async (done) => {
    const response = await request(server)
      .post("/machine")
      .set("Accept", "application/json")
      .send({
        address: "Somewhere",
        postal_code: "10240",
      });

    expect(response.body).toStrictEqual({ status: "ok" });

    done();
  });

  it("should get all machine and return with ok status", async (done) => {
    const response = await request(server)
      .get("/machine")
      .set("Accept", "application/json");

    expect(response.body.status).toBe("ok");
    expect(response.body.machines).toHaveLength(1);

    vendorCode = response.body.machines[0].vendor_code;

    done();
  });

  it("should get one machine and return with ok status", async (done) => {
    const response = await request(server)
      .get(`/machine/${vendorCode}`)
      .set("Accept", "application/json");

    expect(response.body.status).toBe("ok");
    expect(response.body.machine.address).toBe("Somewhere");
    expect(response.body.machine.postal_code).toBe("10240");

    done();
  });

  it("should edit machine and return with ok status", async (done) => {
    const response = await request(server)
      .patch(`/machine/${vendorCode}`)
      .set("Accept", "application/json")
      .send({ postal_code: "10100" });

    expect(response.body).toStrictEqual({ status: "ok" });

    done();
  });

  it("should delete machine and return with ok status", async (done) => {
    const response = await request(server)
      .delete(`/machine/${vendorCode}`)
      .set("Accept", "application/json");

    expect(response.body).toStrictEqual({ status: "ok" });

    done();
  });
});
