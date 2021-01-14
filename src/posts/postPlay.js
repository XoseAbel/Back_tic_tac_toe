import makeNextMove from './makeNextMove';

const postPlay = async (req, res) => {
  const { matchId, position, figure, nextMove, boardState } = req.body;
  try {
    const updatedBoard = makeNextMove(position, figure, nextMove, boardState);
    console.log(updatedBoard);
    res.status(200).json({ matchId, boardState: updatedBoard });
    //lanzamiento de errores
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
export { postPlay };
