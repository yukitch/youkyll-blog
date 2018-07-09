---
layout: post
path: /react-native-server-hanging-on
title: 【React Native】サーバーが立ち上がらない
date: '2018-07-09T19:08:32+09:00'
---
時々ReactNativeのサーバーが

```sh
Loading dependency graph, done.

```
のまま立ち上がりませんでした。

原因は ```react-native link``` をせずに ``` react-native run ```
すると起こるようです。

react-nativeをupgradeした際は忘れずにlinkしましょう!
