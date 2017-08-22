/**
 * @file Section Component
 *
 * @author Leo Wang(leowang721@gmail.com)
 */

import React from 'react'
import { View } from 'react-native'
import {getStyle} from './styles'

const styles = getStyle()

export default class Section extends React.Component {
  render () {
    const {children} = this.props
    const toUseStype = [styles.section].concat(this.props.style)
    return <View style={toUseStype}>{children}</View>
  }
}
