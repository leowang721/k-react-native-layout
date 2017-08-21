/**
 * @file Level 1 Header, Body Header
 *
 * @author Leo Wang(leowang721@gmail.com)
 */

import React from 'react'
import { View, Text } from 'react-native'
import {getStyle} from './styles'

const styles = getStyle()

export default class H1 extends React.Component {
  render () {
    const {children} = this.props
    const toUseStype = [styles.h1, this.props.style]
    return <Text style={toUseStype}>{children}</Text>
  }
}
