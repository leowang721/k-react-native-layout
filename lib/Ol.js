/**
 * @file Ul Component, it's just an ordered list
 *
 * @author Leo Wang(leowang721@gmail.com)
 */

import { padStart } from 'lodash'
import React from 'react'
import PropTypes from 'prop-types'
import { FlatList } from 'react-native'
import { transferNumberByType } from 'k-react-native-core/number'

import Li from './Li'
import {getStyle} from './styles'

const styles = getStyle()

export default class Ol extends React.PureComponent {
  static propTypes = {
    start: PropTypes.number,
    type: PropTypes.oneOf([
      'none', 'decimal', 'decimal-leading-zero',
      'lower-latin', 'upper-latin',
      'lower-roman', 'upper-roman',
      'chinese', 'cjk-ideographic', '中文',  // same
      'chineseEra', '干支',  // same
      'chineseHeavenlyStem', 'cjk-heavenly-stem', '天干',  // same
      'chineseEarthlyBranch', 'cjk-earthly-branch', '地支'  // same
    ]),
    getItemContent: PropTypes.func
  }

  getIndex (num, total) {
    const { type = 'decimal' } = this.props
    let str = num + ''
    switch (type) {
      case 'none':
        return
      case 'decimal-leading-zero':
        return padStart(str, total - str.length, '0')
      case 'lower-latin':
        return transferNumberByType.latin(num)
      case 'upper-latin':
        return transferNumberByType.latin(num, true)
      case 'lower-roman':
        return transferNumberByType.roman(num)
      case 'upper-roman':
        return transferNumberByType.roman(num, true)
      case 'chinese':
      case 'cjk-ideographic':
      case '中文':
        return transferNumberByType.chinese(num)
      case 'chineseStemsAndBranches':
      case '干支':
        return transferNumberByType.chineseEra(num)
      case 'chineseHeavenlyStem':
      case 'cjk-heavenly-stem':
      case '天干':
        return transferNumberByType.chineseHeavenlyStem(num)
      case 'chineseEarthlyBranch':
      case 'cjk-earthly-branch':
      case '地支':
        return transferNumberByType.chineseEarthlyBranch(num)
    }
    return num
  }

  _keyExtractor = (item, index) => index
  _getItemContent (item) {
    return item
  }

  render () {
    const {data = [], start = 1, getItemContent = this._getItemContent} = this.props
    let realStart = start < 1 ? 1 : start
    const toUseStype = [styles.ol].concat(this.props.style)
    return <FlatList
      style={toUseStype}
      data={data}
      keyExtractor={this._keyExtractor}
      renderItem={({ item, index }) => {
        return <Li icon={this.getIndex(realStart + index, data.length) + '.'}>{getItemContent(item, index)}</Li>
      }} />
  }
}
