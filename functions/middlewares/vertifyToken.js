module.exports = (req, rest, next) => {
  console.log(JSON.stringify(req.headers)) // 토큰검사를 해야함
  console.log('here')
  next()
}
