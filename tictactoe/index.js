import { postPlay } from './posts/postPlay';
import { TIC_TAC_TOE_URL } from './conts';

const init = (app) => {
  //POST
  app.post(TIC_TAC_TOE_URL, postPlay);
};
export default init;
