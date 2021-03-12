import mongoose from "mongoose";

import { logger } from "./logger";

export async function connectToMongo() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const db = mongoose.connection;

    db.on("error", (err) => {
      throw err;
    });
  } catch (error) {
    logger.error(`!!! Failed to connect to MongoDB : ${error.message}`);
  }
}
