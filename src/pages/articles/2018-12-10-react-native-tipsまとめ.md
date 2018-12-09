---
layout: post
path: /react-native-tips
title: '[React Native] Tipsまとめ'
date: '2018-12-10T00:10:33+09:00'
---
# react-navigation

StackNavigatorをネストして、この要素から親の要素に遷移したいとき、

```
this.props.navigation.goBack(null);
```

で遷移することができます。
