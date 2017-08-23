/**
 * @file Level 5 Header
 *
 * @author Leo Wang(leowang721@gmail.com)
 */

import React from 'react'
import { Text } from 'react-native'
import {getStyle} from './styles'

const styles = getStyle()

export default class H5 extends React.PureComponent {
  render () {
    const {children} = this.props
    const toUseStype = [styles.h5, this.props.style]
    return <Text style={toUseStype}>{children}</Text>
  }
}