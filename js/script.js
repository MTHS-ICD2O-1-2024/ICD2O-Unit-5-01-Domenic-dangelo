// Copyright (c) 2020 domeic dangelo All rights reserved
//
// Created by: domenic dangelo
// Created on: feb 2025
// This file contains the JS functions for index.html

const randomNumber = Math.floor(Math.random() * 6) + 1


"use strict"

/**
 * This function checks if the user has selected the random number from above.
 */
// eslint-disable-next-line no-unused-vars
function calculate() {
  // input
  const userNumber = parseint(document.getElementById("guess").value)

  // process
  const temperatureInCelsius = (temperatureInFahrenheit - 32) * 5 / 9 

  // output
  document.getElementById("answer").innerHTML =
    "The temperature in celsius is: " + temperatureInCelsius.toFixed(3) + " °C"
}
