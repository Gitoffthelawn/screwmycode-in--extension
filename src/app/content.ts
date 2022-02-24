import {HistoryController} from './controllers/history.controller';
import {State} from './common/state';
import {PlayerController} from './controllers/player.controller';
import {ControlsController} from './controllers/controls.controller';
import {ControlsView} from './views/controls.view';

window.addEventListener('load', async () => {
  const state = new State();
  await state.isReady;

  const player = new PlayerController(state);
  await player.isReady;
  state.attach(player);

  const controlsView = new ControlsView(state);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const controlsController = new ControlsController(state, controlsView);
  state.attach(controlsView);

  const history = new HistoryController(state);
  await history.isReady;
  state.attach(history);
});
