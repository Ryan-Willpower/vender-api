import request from "supertest";
import mongoose from "mongoose";
import express from "express";

import { initialServer } from "../server";
import { connectToMongo } from "../utils/mongoose";

let server: express.Express;

beforeAll(async () => {
  server = initialServer();

  await connectToMongo(process.env.MONGO_URL);
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe("User route", () => {
  it("should create user and return with ok status", async (done) => {
    const response = await request(server)
      .post("/user")
      .set("Accept", "application/json")
      .send({ username: "ryan", fullname: "Surasak C." });

    expect(response.body).toStrictEqual({ status: "ok" });

    done();
  });

  it("should get all user and return with ok status", async (done) => {
    const response = await request(server)
      .get("/user")
      .set("Accept", "application/json");

    expect(response.body).toStrictEqual({
      status: "ok",
      user: [{ username: "ryan", fullname: "Surasak C." }],
    });

    done();
  });

  it("should get one user and return with ok status", async (done) => {
    const response = await request(server)
      .get("/user/ryan")
      .set("Accept", "application/json");

    expect(response.body).toStrictEqual({
      status: "ok",
      user: { username: "ryan", fullname: "Surasak C." },
    });

    done();
  });

  it("should edit user and return with ok status", async (done) => {
    const response = await request(server)
      .patch("/user/ryan")
      .set("Accept", "application/json")
      .send({ fullname: "Test Editor" });

    expect(response.body).toStrictEqual({ status: "ok" });

    done();
  });

  it("should delete user and return with ok status", async (done) => {
    const response = await request(server)
      .delete("/user/ryan")
      .set("Accept", "application/json");

    expect(response.body).toStrictEqual({ status: "ok" });

    done();
  });
});
