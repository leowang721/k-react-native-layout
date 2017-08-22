/**
 * @file Body Component, using flex to expand to the whole screen
 *
 * @author Leo Wang(leowang721@gmail.com)
 */

import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, ScrollView } from 'react-native'
import {getStyle} from './styles'

const styles = getStyle()

export class Header extends React.Component {
  render () {
    const {children} = this.props
    const toUseStype = [styles.bodyHeader].concat(this.props.style)
    return <View style={toUseStype}>
      {this.props.lCtrl}
      <Text style={styles.bodyHeaderText}>{children}</Text>
      {this.props.rCtrl}
    </View>
  }
}

export class Content extends React.Component {
  static propTypes = {
    fixed: PropTypes.bool
  }

  render () {
    const {fixed, children} = this.props
    const toUseStype = [styles.bodyContent].concat(this.props.style)
    return fixed
      ? <View style={toUseStype}>{children}</View>
      : <ScrollView style={toUseStype}>{children}</ScrollView>
  }
}

export class Footer extends React.Component {
  render () {
    const {children} = this.props
    const toUseStype = [styles.bodyFooter].concat(this.props.style)
    return <View style={toUseStype}>{children}</View>
  }
}

export default class Body extends React.Component {
  render () {
    const {children} = this.props
    const toUseStype = [styles.body].concat(this.props.style)
    return <View style={toUseStype}>{children}</View>
  }
}

Body.Header = Header
Body.Content = Content
Body.Footer = Footer
