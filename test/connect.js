const { MongoClient } = require('mongodb');

let client = null;
beforeAll(() => {
  return MongoClient.connect('mongodb://alchemy:s3cret@ds249233.mlab.com:49233/enron', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(c => {
      client = c;
    });
});

afterAll(() => {
  return client.close();
});

module.exports = () => client.db('enron').collection('messages');
