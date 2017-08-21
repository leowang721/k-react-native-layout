/**
 * @file Body Component, using flex to expand to the whole screen
 *
 * @author Leo Wang(leowang721@gmail.com)
 */

import React from 'react'
import { View } from 'react-native'
import {getStyle} from './styles'

const styles = getStyle()

export default class Body extends React.Component {
  render () {
    const {children} = this.props
    const toUseStype = [styles.body, this.props.style]
    return <View style={toUseStype}>{children}</View>
  }
}
