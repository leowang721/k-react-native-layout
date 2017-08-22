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
  let toUse = {}
  if (typeof name === 'string') {
    if (name !== themeName && themes[name]) {
      themeName = name
      toUse = themes[name]
    }
  } else if (typeof name === 'object') {
    themeName = 'custom'
    toUse = name
  }

  currentStyles = {}
  for (let k in themes[name]) {
    currentStyles[k] = StyleSheet.flatten([reset[k], toUse[k]])
  }
}

use('normal')

export function getStyle () {
  return currentStyles
}
