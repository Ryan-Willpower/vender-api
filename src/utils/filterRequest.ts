import { logger } from "./logger";

/**
 * Filter unuse key and left only use key
 * E.g. obj: `{a: 1, b: 2, c: 3, z: 5}` filter: `['a', 'b']` return {a: 1, 'b': 2}
 */
export function filterOnlyUseKeyAndValue<T>(
  obj: { [key: string]: string },
  filter: string[]
): T {
  logger.info(`>>> Filter the request`);

  if (!obj || Object.keys(obj).length === 0) {
    logger.info(`>>> Return with empty object`);

    return {} as T;
  }

  const filteredObject = Object.keys(obj).reduce((prev, current) => {
    if (current in obj && filter.includes(current)) {
      return { ...prev, [current]: obj[current] };
    }

    return prev;
  }, {}) as T;

  logger.info(`>>> Return with ${JSON.stringify(filteredObject)}`);

  return filteredObject;
}
