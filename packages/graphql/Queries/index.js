module.exports = {
  allAthletes: async (_, __, { db }) => {
    try {
      return Object.values(await db.get('athletes'))
    } catch (error) {
      console.info('error', error)
    }
  },

  allResults: async (_, __, { db }) => {
    try {
      const resultsCollection = Object.values(await db.get('results'))

      const promises = resultsCollection.map(async result => {
        result.athlete = await db.get(`athletes/${result.athlete}`)

        return result
      })

      return await Promise.all(promises)
    } catch (error) {
      console.info('error', error)
    }
  },

  getAthlete: async (_, { athleteId }, { db }) => {
    try {
      const athlete = await db.get(`athletes/${athleteId}`)

      const [result] = await db.queryEqualTo({
        path: 'results',
        key: 'user',
        value: athleteId,
      })

      athlete.result = result

      return athlete
    } catch (error) {
      console.info('error', error)
    }
  },
}
