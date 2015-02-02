'use strict';

Tinytest.add('Actual integration', function (test) {

    var outerElement = document.createElement('div');
    outerElement.value = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in.";
    outerElement.className = 'hidden';
    outerElement.setAttribute('width', '150px');

    var actual = $('.hidden').actual('width');
    test.isNull(actual, 'instantiation OK');
});