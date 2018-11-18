async function addNewAthlete(_, args, { db }) {
  const athleteId = db.getID()
  const resultId = db.getID()

  const newAthlete = {
    id: athleteId,
    ...args.input,
    result: resultId,
  }

  const diffObj = {
    athletes: {
      [athleteId]: newAthlete,
    },

    results: {
      [resultId]: {
        id: resultId,
        athlete: athleteId,
      },
    },
  }

  try {
    await db.update(diffObj)

    return newAthlete
  } catch (err) {
    console.info('err', err)
  }
}

async function addNewVote(_, { input: { placedOn: athleteId, score } }, { db }) {
  const [result] = await db.queryEqualTo({
    path: 'results',
    key: 'athlete',
    value: athleteId,
  })

  let { totalScore = 0, avrageScore = 0, numberOfVotes = 0, id: resultId } = result

  const newResult = {
    id: resultId,
    athlete: athleteId,
    totalScore: (totalScore += score),
    numberOfVotes: (numberOfVotes += 1),
    avrageScore: Number((totalScore / numberOfVotes).toFixed(2)),
  }

  const diffObj = {
    results: {
      [resultId]: newResult,
    },
  }

  try {
    await db.update(diffObj)

    return newResult
  } catch (err) {
    console.info('err', err)
  }
}

async function toggleAthleteVotingStatus(_, { input: { status, athlete } }, { db }) {
  try {
    await db.set({
      path: `athletes/${athlete}/votingOpen`,
      value: status,
    })

    return status
  } catch (error) {
    console.info('error', error)
  }
}

async function toggleAthleteHasRacedStatus(_, { input: { status, athlete } }, { db }) {
  try {
    await db.set({
      path: `athletes/${athlete}/hasRaced`,
      value: status,
    })

    return status
  } catch (error) {
    console.info('error', error)
  }
}

module.exports = {
  addNewAthlete,
  addNewVote,
  toggleAthleteVotingStatus,
  toggleAthleteHasRacedStatus,
}
