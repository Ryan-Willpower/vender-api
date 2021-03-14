import request from "supertest";
import mongoose from "mongoose";
import express from "express";

import { initialServer } from "../server";
import { connectToMongo } from "../utils/mongoose";
import { machineModel } from "../models/machine";

let server: express.Express;
let productId: string;
const machineDocument = {
  address: "Somewhere",
  postal_code: "12345",
  vendor_code: "111000",
};

beforeAll(async () => {
  server = initialServer();

  await connectToMongo(process.env.MONGO_URL);

  await machineModel.create(machineDocument);
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe("Product route", () => {
  it("should create a product and return with ok status", async (done) => {
    const response = await request(server)
      .post(`/product?vendor_id=${machineDocument.vendor_code}`)
      .set("Accept", "application/json")
      .send({ name: "cola", quantity: 13 });

    expect(response.body).toStrictEqual({ status: "ok" });

    done();
  });

  it("should get all products and return with ok status", async (done) => {
    const response = await request(server)
      .get(`/product?vendor_id=${machineDocument.vendor_code}`)
      .set("Accept", "application/json");

    expect(response.body.status).toBe("ok");
    expect(response.body.products).not.toHaveLength(0);

    productId = response.body.products[0].id;

    done();
  });

  it("should edit a product and return with ok status", async (done) => {
    const response = await request(server)
      .patch(`/product/${productId}/?vendor_id=${machineDocument.vendor_code}`)
      .set("Accept", "application/json")
      .send({ quantity: 20 });

    expect(response.body).toStrictEqual({ status: "ok" });

    done();
  });

  it("should delete a product and return with ok status", async (done) => {
    const response = await request(server)
      .delete(`/product/${productId}/?vendor_id=${machineDocument.vendor_code}`)
      .set("Accept", "application/json");

    expect(response.body).toStrictEqual({ status: "ok" });

    done();
  });
});
