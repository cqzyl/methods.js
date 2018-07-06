const { HTMLTrope } = require('./methods/HTMLTrope.js')
const { delURLParameter } = require('./methods/delURLParameter.js')
const { cqAlert } = require('./methods/cqAlert.js')
const { cqLoading } = require('./methods/cqLoading.js')

var global = global || window;

global.cq = {
  HTMLTrope,
  delURLParameter,
  alert: cqAlert,
  loading: cqLoading,
}
