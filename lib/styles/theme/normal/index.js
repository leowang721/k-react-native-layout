/**
 * @file theme styles of normal, here we set color, bgColor, size, etc
 *
 * @author Leo Wang(leowang721@gmail.com)
 */

import {color, size} from './variables'

export default {
  body: {
    backgroundColor: color.bg.body
  },
  bodyHeader: {
    backgroundColor: color.bg.bodyHeader
  },
  bodyHeaderText: {
    color: color.text.title,
    fontSize: size.text.pageHeader
  },
  bodyContent: {
    backgroundColor: color.bg.bodyContent
  },
  bodyFooter: {
    backgroundColor: color.bg.bodyFooter
  },
  section: {
    backgroundColor: color.bg.normal
  },
  h1: {
    fontWeight: 'bold'
  },
  h2: {
    fontWeight: 'bold'
  },
  h3: {
    fontWeight: 'bold'
  },
  h4: {
    fontWeight: 'bold'
  },
  h5: {
    fontWeight: 'bold'
  },
  h6: {
    fontWeight: 'bold'
  }
}
