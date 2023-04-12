import { TransformFnParams } from 'class-transformer';

export const checkValueIsNotSpaces = ({ value }: TransformFnParams) => {
  if (typeof value === 'string') {
    return value.trim();
  }
  return value;
};
