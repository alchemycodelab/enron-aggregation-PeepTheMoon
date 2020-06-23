module.exports = [
  {
    '$unwind': {
      'path': '$headers.To'
    }
  }, {
    '$group': {
      '_id': '$headers.To', 
      'count': {
        '$sum': 1
      }
    }
  }, {
    '$sort': {
      'count': -1
    }
  }
];
