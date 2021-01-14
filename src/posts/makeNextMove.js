export default (position, figure, nextMove, boardState) => {
  const CPUfigure = figure === 'X' ? 'O' : 'X';
  let result = [...boardState];
  console.log(nextMove, position);
  if (!nextMove && position === 'Second') {
    const validCorners = [0, 2, 6, 8];
    const choseCorner =
      validCorners[Math.floor(Math.random() * validCorners.length)];
    result.splice(choseCorner, 1, CPUfigure);
  }
  return result;
};
