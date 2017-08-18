/**
 * @file Level 1 Header
 *
 * @author Leo Wang(leowang721@gmail.com)
 */

import React from 'react'
import { StyleSheet, View } from 'react-native'

export default class H1 extends React.Component {
  render () {
    const {children} = this.props
    return (
      <View style={styles.container}>
        {children}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'left',
    justifyContent: 'center'
  }
})
