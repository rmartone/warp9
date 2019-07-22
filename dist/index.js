"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const missionlog_1 = require("missionlog");
missionlog_1.log.init({ system: 'INFO' }, (severity, category, msg, params) => {
    console.log(`${severity}: [${category}]`, msg, ...params);
});
missionlog_1.log.info('system', 'hello world');
