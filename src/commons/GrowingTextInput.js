import React, { Component } from 'react'
import { TextInput } from 'react-native'

// Try it: https://snack.expo.io/ByW4CFPx-
export default class GrowingTextInput extends Component {
  static defaultProps = {
    minHeight: 30,
  }

  constructor(props, context) {
    super(props, context)

    this.state = {
      height: props.minHeight,
    }
  }

  setNativeProps(props) {
    this._ref.setNativeProps(props)
  }

  focus() {
    this._ref.focus()
  }

  blur() {
    this._ref.blur()
  }

  clear() {
    this._ref.clear()
  }

  measure(callback) {
    this._ref.measure(callback)
  }

  _onChangeContentSize = e => {
    this.setState({ height: e.nativeEvent.contentSize.height })
  }

  render() {
    return (
      <TextInput
        ref={c => {
          this._ref = c
        }}
        multiline
        underlineColorAndroid="rgba(0, 0, 0, 0)"
        onContentSizeChange={this._onChangeContentSize}
        {...this.props}
        onChange={event => {
          this._onChangeContentSize(event)
          this.props.onChange && this.props.onChange(event)
        }}
        style={[this.props.style, { height: Math.max(this.props.minHeight, this.state.height) }]}
      />
    )
  }
}
