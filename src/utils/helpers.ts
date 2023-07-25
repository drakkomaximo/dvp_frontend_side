export const findStringIntoArray = ({
  compareOne,
  compareTwo,
}: {
  compareOne: string[];
  compareTwo: string;
}) => {
  return compareOne.includes(compareTwo);
};
