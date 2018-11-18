/**
 *
 *
 * Server
 *
 */

async function start() {
  const express = require('express')
  const playGround = require('graphql-playground-middleware-express').default
  const firebase = require('firebase')
  const { ApolloServer } = require('apollo-server-express')
  const { readFileSync } = require('fs')

  const app = express()

  var config = {
    apiKey: 'AIzaSyAoFfFQ1RCzE2T7vkX1XWMUVpbAd2qGjns',
    authDomain: 'ben-nik-voting.firebaseapp.com',
    databaseURL: 'https://ben-nik-voting.firebaseio.com',
    projectId: 'ben-nik-voting',
    storageBucket: '',
    messagingSenderId: '674878966251',
  }

  firebase.initializeApp(config)

  const db = require('./services/DB')

  const server = new ApolloServer({
    typeDefs: readFileSync('./Schema.gql', 'UTF-8'),
    resolvers: require('./Resolvers'),
    context: { db },
  })

  server.applyMiddleware({ app })

  app.get('/', (req, res) => res.end('Welcome'))
  app.get('/playground', playGround({ endpoint: '/graphql' }))

  app.listen({ port: 4000 }, () => console.log(`server is running @ http://local:4000${server.graphqlPath}`))
}

start()
