/**
 * @file Ul Component, it's just an unordered list
 *
 * @author Leo Wang(leowang721@gmail.com)
 */

import React from 'react'
import PropTypes from 'prop-types'
import { FlatList } from 'react-native'
import { transferNumberByType } from 'k-react-native-core/number'

import Li from './Li'
import {getStyle} from './styles'

const styles = getStyle()

export default class Ol extends React.PureComponent {
  static propTypes = {
    type: PropTypes.oneOf([
      'none', 'disc', 'point', 'point-empty', 'circle',
      'square', 'square-empty', 'star', 'star-empty'
    ]),
    getItemContent: PropTypes.func
  }

  getIndex (num, total) {
    const { type = 'point' } = this.props
    switch (type) {
      case 'disc':
      case 'point':
        return '●'
      case 'circle':
      case 'point-empty':
        return '○'
      case 'square':
        return '■'
      case 'square-empty':
        return '□'
      case 'star':
        return '★'
      case 'star-empty':
        return '☆'
    }
  }

  _keyExtractor = (item, index) => index
  _getItemContent (item) {
    return item
  }

  render () {
    const {data = [], getItemContent = this._getItemContent} = this.props
    const toUseStype = [styles.ul].concat(this.props.style)
    return <FlatList
      style={toUseStype}
      data={data}
      keyExtractor={this._keyExtractor}
      renderItem={({ item, index }) => {
        return <Li icon={this.getIndex()} iconStyle={{paddingRight: 13}}>{getItemContent(item, index)}</Li>
      }} />
  }
}
