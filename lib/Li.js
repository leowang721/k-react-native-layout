/**
 * @file Li Component, for Ul & Ol
 *
 * @author Leo Wang(leowang721@gmail.com)
 */

import React from 'react'
import PropTypes from 'prop-types'
import { Text, TouchableHighlight, View } from 'react-native'

import {getStyle} from './styles'

const styles = getStyle()

export default class Li extends React.PureComponent {
  static propTypes = {
    icon: PropTypes.any,
    onPress: PropTypes.func
  }

  _onPress = () => {
    const { onPress } = this.props
    onPress && onPress()
  }

  render () {
    const {icon, children, style, iconStyle, contentStyle} = this.props
    const toUseStype = [styles.li].concat(style)
    const toUseIconStyle = [styles.liIcon, iconStyle]
    const toUseContentStyle = [styles.liContent, contentStyle]
    return <TouchableHighlight onPress={this._onPress}>
      <View style={toUseStype}>
        {icon && <Text style={toUseIconStyle}>{icon}</Text>}
        <Text style={toUseContentStyle}>{children}</Text>
      </View>
    </TouchableHighlight>
  }
}
