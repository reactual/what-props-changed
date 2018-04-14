## what-props-changed
A simple React development tool to help find the props that caused a Component to update.

By default, it will log to the browser console any detected changes, with their original and new values.

```js
// Example Output:

Sidebar, props changed: 1
 {
  "sidebar": {
    "old": "menu",
    "new": "list"
  }
}

```

### Installation

```bash
# yarn
yarn add what-props-changed

# npm
npm install --save what-props-changed

```

### Usage

```js

import * as React from 'react'
import whatPropsChanged from 'what-props-changed'

class Sidebar extends React.Component {

  componentWillReceiveProps (nextProps) {
    whatPropsChanged(this.props, nextProps, 'Sidebar')
  }

  render() {
    return <div>{this.props.title}</div>
  }
}

```

### Arguments


| Options   | Type   | Default | Description                                                          |
|-----------|--------|---------|----------------------------------------------------------------------|
| props     | object | {}      | Original (props or source) object                                    |
| nextProps | object | {}      | Updated (props or source) object                                     |
| name      | string | ''      | Optional name or helpful description that will be logged with output |
| options   | object | options | Optional options object, see options below.                          |

### Options

An object you can pass as the 4th argument when calling `whatPropsChanged`

| Options  | Type    | Default | Description                                                     |
|----------|---------|---------|-----------------------------------------------------------------|
| doReturn | boolean | false   | Return the changes object                                       |
| string   | boolean | true    | Logs the changes as JSON.stringified for easier console viewing |
| log      | boolean | true    | Log prop changes object to console                              |


### Notes

`what-props-changed` provides a default export, you can use `whatPropsChanged` or `whatChanged` etc. You can also pass it generic objects to compare instead of props. It will iterate over the first object argument.



### Additional Documentation

See `src/index.js` for source code.

```js

/**
 * Logs to console, props that caused a Component to update
 *
 * @param  {Object} props     Component current props
 * @param  {Object} nextProps Component updated props
 * @param  {String} name      Component name or description for log
 * @param  {Object} opts      Additional options
 * @return {undefined}        Logs changes to console
 * @example

  // Usage

  componentWillReceiveProps (nextProps) {
    whatPropsChanged(this.props, nextProps, 'Sidebar')
  }

  // Add options if desired, as a 4th argument.
  // Default values included below

  const options = {
    doReturn: false, // return changed props object
    string: true, // log object instead of a JSON.stringified object
    log: true, // log results to console
  }

 */

```
