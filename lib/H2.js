/**
 * @file Level 2 Header Section Header
 *
 * @author Leo Wang(leowang721@gmail.com)
 */

import React from 'react'
import { View, Text } from 'react-native'
import {getStyle} from './styles'

const styles = getStyle()

export default class H2 extends React.Component {
  render () {
    const {children} = this.props
    const childrenType = typeof children
    const toUseStype = [styles.h2, this.props.style]
    return childrenType === 'string'
      ? <Text style={toUseStype}>{children}</Text>
      : <View style={toUseStype}>{children}</View>
  }
}
