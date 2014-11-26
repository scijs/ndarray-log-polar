var baboon = require('luminance')(require('baboon-image'))
var ndarray = require('ndarray')
var toPolar = require('../polar')
var imshow = require('ndarray-imshow')

imshow(toPolar(ndarray(new Float64Array(512*512), [512,512]), baboon))
