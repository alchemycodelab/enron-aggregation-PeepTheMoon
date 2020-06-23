module.exports = [
  {
    '$project': {
      'formattedDate': {
        '$dateToString': {
          'format': '%Y-%m-%d', 
          'date': '$headers.Date'
        }
      }
    }
  }, {
    '$sort': {
      'formattedDate': 1
    }
  }, {
    '$group': {
      '_id': '$formattedDate', 
      'total': {
        '$sum': 1
      }
    }
  }, {
    '$group': {
      '_id': null, 
      'min': {
        '$min': '$total'
      }, 
      'max': {
        '$max': '$total'
      }, 
      'avg': {
        '$avg': '$total'
      }
    }
  }
];
