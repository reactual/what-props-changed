// @flow

const isEqual = require('lodash.isequal')
const reduce  = require('lodash.reduce')

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
    whatChanged(this.props, nextProps, 'Sidebar')
  }

  // Add options if desired, as a 4th argument.
  // Default values included below

  const options = {
    doReturn: false, // return changed props object
    string: true, // log object instead of a JSON.stringified object
    log: true, // log results to console
  }

 */
const whatPropsChanged = (
  props: any = {},
  nextProps: any = {},
  name: string = '',
  opts: {
    doReturn?: boolean,
    string?: boolean,
    log?: boolean
  } = {}
) => {

  let changed = 0

  const changedProps = reduce(
    props,
    (result, value, key) => {
      if (!isEqual(value, nextProps[key])) {
        result[key] = {
          old: value,
          new: nextProps[key]
        }
        changed++
      }
      return result
    },
    {}
  )

  if (changed) {
    opts.log !== false && console.info(
      `${name}, props changed: ${changed}\n`,
      opts.string === false ? changedProps : JSON.stringify(changedProps, null, 2)
    )
    if (opts.doReturn) return changedProps
  }
}

export default whatPropsChanged
