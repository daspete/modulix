#!/usr/bin/env node

require('../src/index.js').run(process.argv.slice(2))
    .catch((err) => {
        console.error(err)
    })
