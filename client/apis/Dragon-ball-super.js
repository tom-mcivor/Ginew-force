import request from 'superagent'

export function getDragonBallPeeps() {
  return request
    .get('https://dragon-ball-super-api.herokuapp.com/api/characters/characters?limit=5')
    .then(res => res.body)
}