/**
 *
 * BaseScreen
 *
 */

import React from 'react'
import PropTypes from 'prop-types'

import { View, Text } from 'react-native'

export default class BaseScreen extends React.Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
  }

  _goTo = (routeName, params) => this.props.navigation.navigate(routeName, params)

  _goBack = () => this.props.navigation.goBack()

  _ = action => this.props.navigation.dispatch(action)
}
