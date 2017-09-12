'use strict';

function convertToRoman(num, uppercase) {
  var roman = '';
  var decimals = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
  var roman = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'];

  
  // loop through the decimal and find the roman equivalant.
  
  for (var i = 0; i < decimals.length; i++) {
    while (num >= decimals[i]) {
      roman += roman[i];
      num -= decimals[i];
    }
  }

  return _.isUndefined(uppercase) ? roman.toLowerCase() : roman;
}

/**
 * @description
 * Makes a call to convertToRoman function.
 */

function numberConverter(CONVERT) {
  var converter = {};

  converter.convert = function (num, format, uppercase) {
    if (!_.isNumber(num) || _.isUndefined(format) || num <= 0) {
      return num;
    }

    var result = null;
    switch (format) {
      case CONVERT.TO_ROMAN: {
        result = convertToRoman(num, uppercase);
        break;
      }
     default: {
        result = num;
      }
    }

    return result;
  };

  converter.toRoman = function (num, uppercase) {
    return this.convert(num, CONVERT.TO_ROMAN, uppercase);
  };

  return converter;
}

function numberConverterFilter(numberConverter) {
  return numberConverter.convert;
}

/**
 * @description
 * Service and filter to convert number in roman number.
 */

angular.module('angularNumberConverter', [])
  .factory('numberConverter', ['CONVERT', numberConverter])
  .filter('numberConverter', ['numberConverter', numberConverterFilter])
  .constant('CONVERT', {
    "TO_ROMAN": "I",
  })
;