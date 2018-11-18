/**
 *
 * InformationCard
 *
 */

import React from 'react'
import PropTypes from 'prop-types'

import { View, Text, Image, TouchableOpacity } from 'react-native'

import styles from './styles'

export default function InformationCard({ data: { image, text, title, buttonLabel } }) {
  return (
    <View style={styles.container}>
      {image && <Image style={styles.image} source={{ uri: image }} />}

      {title && (
        <Text numberOfLines={1} style={styles.title}>
          {title}
        </Text>
      )}

      {text && (
        <Text numberOfLines={4} style={styles.text}>
          {text}
        </Text>
      )}

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonLabel}>{buttonLabel ? buttonLabel : 'Press Me'}</Text>
      </TouchableOpacity>
    </View>
  )
}

InformationCard.propTypes = {
  data: PropTypes.object,
  image: PropTypes.string,
  text: PropTypes.string,
  title: PropTypes.string,
  buttonLabel: PropTypes.string,
}
