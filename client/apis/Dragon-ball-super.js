import request from 'superagent'

export function getDragonBallPeeps() {
  return request
    .get('https://dragon-ball-super-api.herokuapp.com/api/characters')

    .then((res) => {
      // console.log('character api', res.body)
      return res.body
    })
}
