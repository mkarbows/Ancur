"use strict";

// const Stampery = require('stampery');
$.Stampery.require('stampery');

window.Stampery = (() => {
  return {
    init: () => {

      var stamperyButton = $('#stampery-button');

      var stampery = new Stampery('342463c4-3cbe-4d63-b1fe-48d7a9c13c3d');

      stamperyButton.click(() => {
        console.log('clicked');
        const hash = stampery.hash('the piano has been drinking ' + Math.random());
        stampery.stamp(hash).then((stamp) => {
          return console.log(stamp);
        }).catch((err) => {
          return console.error(err);
        });

      })
    }
  }
})();
