# k-ui-react-layout
Simple layout for React Native using HTML tags.

Because I am a FrontEnd Engineer, so I prefer using html tags to control the layout.

It's not recommanded for everybody...

## styles

The style theme can be customed with styles.use, it's very useful, and I will add more themes.

```
import {styles} from 'k-react-native-layout'
// use theme
styles.use('normal')
// or customization
styles.use({
  li: {...}
})
```

## Body

use Body, Body.Header, Body.Content, Body.Footer to get a Full Screen layout.

```
<Body>
  <Body.Header>Title</Body.Header>
  <Body.Content>
    ......
  </Body.Content>
  <Body.Footer>
    Tabs
  </Body.Footer>
</Body>
```

A Basic App View.

## Section

Simple Content Section

## H1~H6

using for title

## UI, Ol

list, but with prefix which supports a set of types, like ul/ol in HTML

