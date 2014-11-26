'use strict'

module.exports = toPolar

var ops = require('ndarray-ops')
var warp = require('ndarray-warp')

function toPolar(polar, rect, center) {
  var ntheta = polar.shape[0]
  var nr     = polar.shape[1]
  if(!center) {
    center = [rect.shape[0]/2, rect.shape[1]/2]
  }
  var maxDiam = 0.0
  for(var i=0; i<2; ++i) {
    maxDiam += Math.pow(Math.max(center[0], rect.shape[0]-center[0]), 2)
  }
  maxDiam = Math.sqrt(maxDiam)
  ops.assigns(polar, 0)

  warp(polar, rect, function(out, inp) {
    var t = inp[1] / ntheta * Math.PI * 2.0
    var r = Math.exp(Math.log(maxDiam) * inp[0] / nr)
    out[0] = r * Math.cos(t) + center[0]
    out[1] = r * Math.sin(t) + center[1]
  })

  return polar
}