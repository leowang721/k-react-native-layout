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
  },
  ol: {},
  li: {
    flexDirection: 'row'
  },
  liIcon: {
    width: 30,
    textAlign: 'right',
    paddingRight: 5,
    fontFamily: 'Courier New'
  },
  liContent: {
    flex: 1
  },
  em: {
    fontWeight: 'bold'
  },
  strong: {
    fontWeight: 'bold'
  },
  del: {
    textDecorationLine: 'line-through'
  },
  mark: {
    fontWeight: 'bold',
    backgroundColor: 'rgba(27, 31, 35, 0.05)',
    borderRadius: 3
  }
}

export default StyleSheet.create(styles)
