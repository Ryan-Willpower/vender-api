import request from "supertest";

import { initialServer } from "../server";

describe("Server", () => {
  describe("GET /healthcheck", () => {
    it("should return with ok status", async (done) => {
      const server = initialServer();

      const response = await request(server)
        .get("/healthcheck")
        .set("Accept", "application/json");

      expect(response.body).toStrictEqual({ status: "ok" });

      done();
    });
  });
});
