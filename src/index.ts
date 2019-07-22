import { log } from 'missionlog';

// set the max log level for various subsystem
log.init({ system: 'INFO' }, (severity, category, msg, params): void => {
  // use chalk, send JSON to a service or log objects to the console...
  console.log(`${severity}: [${category}]`, msg, ...params);
});

log.info('system', 'hello world');
