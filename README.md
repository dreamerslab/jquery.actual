# Javascript Actual Plugin

Get the actual width/height of invisible DOM elements in pure javascript without jQuery. Based on [dreamerslab/jquery.actual](https://github.com/dreamerslab/jquery.actual)



## Description

Javascript has trouble finding the width/height of invisible DOM elements. With element or its parent element has css property 'display' set to 'none'. `document.querySelector('.hiddden').width();` will return 0 instead of the actual width; This plugin simply fix it.

## Documentation

### actual( method[, options] )

- `method` - string with name of css property (width, height etc.)
- `options` (object): An object containing additional options for the function. Possible properties are:
    - `absolute` (boolean, default: false): Whether to return the absolute value of the result.
    - `clone` (boolean, default: false): Whether to return a clone of the result instead of the original value.
    - `display` (string, default: "block"): The value to be used for the display CSS property of the result.
    - `convertToNumber` (boolean, default: false): Whether to convert the result to a number before returning it.

<!-- todo: add info about return -->

## Browser Compatibility

- [Firefox](http://mzl.la/RNaI) 2.0+
- [Internet Explorer](http://bit.ly/9fMgIQ) 6+
- [Safari](http://bit.ly/gMhzVR) 3+
- [Opera](http://bit.ly/fWJzaC) 10.6+
- [Chrome](http://bit.ly/ePHvYZ) 8+



## Installation
- First, make sure you are using valid [DOCTYPE](http://bit.ly/hQK1Rk)
- Include necessary JS files

<!-- -->

    <script type="text/javascript" src="path-to-file/js.actual.js"></script>


## Usage

Example code:

    // get hidden element actual width with units (px and etc)
    document.getElementsByClassName( 'hidden' ).actual( 'width' );
    // 200px

    // get hidden element actual width with convert to number
    document.getElementById( '.hidden' ).actual( 'width', { convertToNumber: true } );
    // 200

    // get hidden element actual height
    document.querySelector( '.hidden' ).actual( 'height', { convertToNumber: true } );
    // 100

    // if the page jumps or blinks, pass a attribute '{ absolute : true }'
    // be very careful, you might get a wrong result depends on how you makrup your html and css
    document.querySelector( '.hidden' ).actual( 'height', { absolute : true } );

    // if you use css3pie with a float element
    // for example a rounded corner navigation menu you can also try to pass a attribute '{ clone : true }'
    // please see demo/css3pie in action
    document.querySelector( '.hidden' ).actual( 'width', { clone : true });

    // if it is not a block element. By default { display: 'block' }.
    // for example a inline element
    document.querySelector( '.hidden' ).actual( 'width', { display: 'inline-block' });



## Credits

- Erwin Derksen
- [Jon Tara](https://github.com/jtara)
- [Matt Hinchliffe](https://github.com/i-like-robots)
- [Ryan Millikin](https://github.com/dhamma)
- [Jacob Quant](https://github.com/jacobq)
- [ejn](https://github.com/ejn)
- [Rudolf](https://github.com/qakovalyov)
- [jamesallchin](https://github.com/jamesallchin)



## License

The expandable plugin is licensed under the MIT License (LICENSE.txt).

Copyright (c) 2012 [Ben Lin](http://dreamerslab.com)
