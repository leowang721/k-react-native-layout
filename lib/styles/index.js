/**
 * @file styles controll
 *
 * @author Leo Wang(leowang721@gmail.com)
 */

import { StyleSheet } from 'react-native'
import normal from './theme/normal'
import reset from './reset'

const themes = {normal}
let themeName = ''
let currentStyles = null

export function use (name) {
  if (name !== themeName && themes[name]) {
    themeName = name
    currentStyles = {}
    for (let k in themes[name]) {
      currentStyles[k] = StyleSheet.flatten([reset[k], themes[name][k]])
    }
  }
}

use('normal')

export function getStyle () {
  return currentStyles
}
