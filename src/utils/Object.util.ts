export const keys = Object.keys as <T>(
  arg: T
) => Extract<keyof T, string | number>[];
