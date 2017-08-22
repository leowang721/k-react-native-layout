/**
 * @file styles of reset, here we define component's layout
 *
 * @author Leo Wang(leowang721@gmail.com)
 */

import { StyleSheet } from 'react-native'

const styles = {
  body: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: 20
  },
  bodyHeader: {
    paddingTop: 13,
    paddingBottom: 13,
    paddingLeft: 8,
    paddingRight: 8,
    height: 45,
    flexDirection: 'row',
    alignItems: 'center'
  },
  bodyHeaderText: {
    flex: 1,
    textAlign: 'center',
    textAlignVertical: 'center'
  },
  bodyContent: {
    flex: 1
  },
  bodyFooter: {
    height: 50
  },
  section: {
    padding: 8
  }
}

export default StyleSheet.create(styles)
