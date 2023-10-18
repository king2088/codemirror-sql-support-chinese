/* eslint-disable */
const fs = require('fs')
const path = require('path')
fs.copyFileSync(path.join(__dirname, './sql.js'), path.join(__dirname, '../node_modules/codemirror/mode/sql/sql.js'))
fs.copyFileSync(path.join(__dirname, './sql-hint.js'), path.join(__dirname, '../node_modules/codemirror/addon/hint/sql-hint.js'))