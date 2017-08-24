/**
 * @file entrance file
 *
 * @author Leo Wang(leowang721@gmail.com)
 */

import React from 'react'
import { Text } from 'react-native'
import {getStyle} from './lib/styles'

const styles = getStyle()
function createTextWrapComponent (name) {
  return class AutoCreatedClass extends React.PureComponent {
    render () {
      const toUseStype = [styles[name.toLowerCase()], this.props.style]
      return <Text {...this.props} style={toUseStype} />
    }
  }
}

export Body from './lib/Body'
export Section from './lib/Section'
export styles from './lib/styles'
export Ul from './lib/Ul'
export Ol from './lib/Ol'
export Li from './lib/Li'
export const H1 = createTextWrapComponent('H1')
export const H2 = createTextWrapComponent('H2')
export const H3 = createTextWrapComponent('H3')
export const H4 = createTextWrapComponent('H4')
export const H5 = createTextWrapComponent('H5')
export const H6 = createTextWrapComponent('H6')
export const Em = createTextWrapComponent('Em')
export const Strong = createTextWrapComponent('Strong')
export const Del = createTextWrapComponent('Del')
export const Mark = createTextWrapComponent('Mark')
