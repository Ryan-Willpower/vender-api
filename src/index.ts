import { initialServer } from "./server";
import { printStartStatusToConsole } from "./utils/logger";

const server = initialServer();

server.listen(80, "0.0.0.0", () => printStartStatusToConsole());
