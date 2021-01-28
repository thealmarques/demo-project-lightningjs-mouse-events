# Mouse events library for [LightningJS](https://github.com/rdkcentral/Lightning)
[![Build Status](https://travis-ci.com/thealmarques/lightningjs-mouse-events.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

This library replicates mouse events in LightningJS. It's very similar to what we would have on our web page with multiple HTML elements. Since LightningJS uses canvas to draw the components and these don't have the concept of mouse events, it only supports key events (up, down, left, right) we need a new level of abstraction that can help us replicate the so needed mouse events handlers.
Hopefully, this library will give you this abstraction and hide the logic that will help you give more support for the multiple TVs that allows mouse controls (like the magic mouse in LG).

# Features

The library currently supports at 100% the following mouse events
  - click
  - mouseup
  - mousedown
  - mouseup

# How it works

In the [LightningJS docs](https://rdkcentral.github.io/Lightning/docs/introduction/introduction) we can see that the elements that compose our application are built using the concept of tags. All of these tags have screen positions (encapsulated within each other, single elements, etc.).

For example,
```sh
MouseEvents.listen(this.tag("Menu"), 'click', (element, event) => {
    // Write your logic
});
```
To listen to events in a specific tag you need to specify the template tag, provide the mouse event and a callback that has two arguments, the element found (for example, the element clicked) and the [HTML mouse event](https://www.w3schools.com/jsref/obj_mouseevent.asp). This last one is useful when you didn't find anything and want to create some logic. The type of the element will depend on your template.

You can also:
  - Get the screen position {x, y} of a tag using
```sh
    const fieldCoordinates = MouseEvents.getBoundingClientRect(this.tag("Field"));
```

### Installation

For now, you only need to export the src files into your project. In the future, it will be created an npm package.

### Demo

To test the demo project (it's based on the official documents, you can see the original demo [here](https://rdkcentral.github.io/Lightning/docs/gettingStarted/development-tictactoe)) you need to

```sh
$ cd demo
$ yarn install
$ lng dev
```

Visit localhost:8080 and voilá.

<img src="resources/demo.gif" height="80%" width="100%"/>

### Contributing

Want to contribute? Great! Pull requests and issues are welcome!

### Todos

 - Add more demos to test the capabilities of the library

License
----

MIT

**Open-source, Hell Yeah!**
