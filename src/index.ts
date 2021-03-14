import { initialServer } from "./server";
import { printStartStatusToConsole } from "./utils/logger";
import { connectToMongo } from "./utils/mongoose";

const server = initialServer();

connectToMongo()
  .then(() => {
    server.listen(80, "0.0.0.0", () => printStartStatusToConsole());
  })
  .catch((error) => {
    printStartStatusToConsole(error);
  });
