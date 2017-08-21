/**
 * @file Level 3 Header Content Header
 *
 * @author Leo Wang(leowang721@gmail.com)
 */

import React from 'react'
import { Text } from 'react-native'
import {getStyle} from './styles'

const styles = getStyle()

export default class H3 extends React.Component {
  render () {
    const {children} = this.props
    const toUseStype = [styles.h3, this.props.style]
    return <Text style={toUseStype}>{children}</Text>
  }
}
