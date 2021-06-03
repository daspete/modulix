#!/usr/bin/env node
const jiti = require('jiti')(__filename)

jiti('../src/index.js').run(process.argv.slice(2))
    .catch((err) => {
        console.error(err)
    })
