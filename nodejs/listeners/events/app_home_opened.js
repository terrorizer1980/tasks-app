const { reloadAppHome } = require('../../utilities');

module.exports = (app) => {
  app.event('app_home_opened', async ({ client, event, body }) => {
    if (event.tab !== 'home') {
      // Ignore the `app_home_opened` event for everything
      // except home as we don't support a conversational UI
      return;
    }
    try {
      await reloadAppHome(client, event.user, body.team_id, event.view.private_metadata);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
    }
  });
};
