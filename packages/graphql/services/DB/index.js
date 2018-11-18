/**
 *
 * Database Service
 *
 */

module.exports = {
  getID: () => require('firebase-key').key(),

  get: path => {
    const firebase = require('firebase')

    return firebase
      .database()
      .ref(path)
      .once('value')
      .then(snap => snap.val())
  },

  set: ({ path, value }) => {
    const firebase = require('firebase')

    return firebase
      .database()
      .ref(path)
      .set(value)
  },

  update: diffObj => {
    const firebase = require('firebase')
    const flatten = require('../../utils/flatten')

    return firebase
      .database()
      .ref()
      .update(flatten(diffObj))
  },

  queryEqualTo: ({ path, key, value }) => {
    const firebase = require('firebase')

    return firebase
      .database()
      .ref(path)
      .orderByChild(key)
      .equalTo(value)
      .once('value')
      .then(snap => {
        if (snap.exists()) {
          return Object.values(snap.val())
        }

        return []
      })
  },
}
