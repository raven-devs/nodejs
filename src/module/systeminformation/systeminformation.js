const si = require('systeminformation');

si.inetChecksite('https://snyk.io', (result) => console.log(result));
