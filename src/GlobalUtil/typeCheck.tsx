const positiveIntegerCheck: Function = (
  key: any,
  value: number
): [boolean, string | null] => {
  if (value > 0 && Number.isInteger(value)) {
    return [true, null];
  }
  return [false, String(key) + ' must be a positive integer but got ' + value];
};

export {positiveIntegerCheck};
