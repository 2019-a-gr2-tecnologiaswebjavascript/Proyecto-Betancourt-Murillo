/**
 * SensorControllerController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  encenderLed : (req, res) => {
    const parametros = req.allParams()
    if(parametros.idLed){
      var Gpio = require('onoff').Gpio
      var LED = new Gpio(4, 'out')
      LED.writeSync(1)
      return res.ok()
    }
  },

  apagarLed : (req, res) => {
    const parametros = req.allParams()
    if(parametros.idLed){
      var Gpio = require('onoff').Gpio
      var LED = new Gpio(4, 'out')
      LED.writeSync(0)
      return res.ok()
    }
  }

};

