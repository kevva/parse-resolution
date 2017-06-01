# parse-resolution [![Build Status](https://travis-ci.org/kevva/parse-resolution.svg?branch=master)](https://travis-ci.org/kevva/parse-resolution)

> Parse resolution into an object


## Install

```
$ npm install --save parse-resolution
```


## Usage

```js
const parseResolution = require('parse-resolution');

parseResolution('1280x1024');
//=> {width: 1280, height: 1024}
```


## API

### parseResolution(input)

#### input

Type: `string`

Resolution to parse.


## License

MIT © [Kevin Martensson](http://github.com/kevva)
