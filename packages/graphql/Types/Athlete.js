module.exports = {
  hasRaced: parent => parent.hasRaced || false,

  votingOpen: parent => parent.votingOpen || false,

  home: parent => parent.home || 'Åre',

  startTime: parent => parent.startTime || 'Coming soon.',
}
