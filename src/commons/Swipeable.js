import React, { Component } from 'react'
import { StyleSheet, View, PanResponder } from 'react-native'

export default class Swipeable extends Component {
  state = {
    dragging: false,
    offsetTop: 0,
    offsetLeft: 0,
  }

  componentWillMount() {
    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: this.handleStartShouldSetPanResponder,
      onPanResponderGrant: this.handlePanResponderGrant,
      onPanResponderMove: this.handlePanResponderMove,
      onPanResponderRelease: this.handlePanResponderEnd,
      onPanResponderTerminate: this.handlePanResponderEnd,
    })
  }

  panResponder = {}

  // Should we become active when the user presses down on the square?
  handleStartShouldSetPanResponder = () => true

  // We were granted responder status! Let's update the UI
  handlePanResponderGrant = () => {
    this.setState({ dragging: true })
  }

  // Every time the touch/mouse moves
  handlePanResponderMove = (e, gestureState) => {
    const { onMove } = this.props
    onMove(gestureState)

    // Keep track of how far we've moved in total (dx and dy)
    this.setState({
      offsetTop: gestureState.dy,
      offsetLeft: gestureState.dx,
    })
  }

  // When the touch/mouse is lifted
  handlePanResponderEnd = (e, gestureState) => {
    const { onEnd } = this.props
    onEnd(gestureState)

    // The drag is finished. Set the initialTop and initialLeft so that
    // the new position sticks. Reset offsetTop and offsetLeft for the next drag.
    this.setState({
      dragging: false,
      offsetTop: 0,
      offsetLeft: 0,
    })
  }

  render() {
    const { children } = this.props
    const { offsetTop, offsetLeft } = this.state

    // Update style with the state of the drag thus far
    const style = {
      top: offsetTop,
      left: offsetLeft,
    }

    return (
      <View
        // Put all panHandlers into the View's props
        {...this.panResponder.panHandlers}
        style={[styles.box, style]}
      >
        {children}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  box: {},
})
