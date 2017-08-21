/**
 * @file Level 3 Header Content Header
 *
 * @author Leo Wang(leowang721@gmail.com)
 */

import React from 'react'
import { View, Text } from 'react-native'
import {getStyle} from './styles'

const styles = getStyle()

export default class H3 extends React.Component {
  render () {
    const {children} = this.props
    const childrenType = typeof children
    const toUseStype = [styles.h3, this.props.style]
    return childrenType === 'string'
      ? <Text style={toUseStype}>{children}</Text>
      : <View style={toUseStype}>{children}</View>
  }
}
