const collection = require('./connect');
const emailsPerDay = require('../lib/emails-per-day');
const emailRecipients = require('../lib/email-recipients');

describe('aggregates enron messages', () => {
  it('finds the min, max, and average emails per', () => {
    return collection().aggregate(emailsPerDay)
      .toArray()
      .then(([{ min, max, avg }]) => {
        expect(min).toEqual(6);
        expect(max).toEqual(1216);
        expect(avg).toEqual(400.78403755868544);
      });
  });

  it('finds the number of message sent to each email address and sorts in descending order', () => {
    return collection().aggregate(emailRecipients)
      .toArray()
      .then(tos => {
        tos.forEach(to => {
          expect(to).toHaveProperty('_id');
          expect(to).toHaveProperty('count');
        });

        expect(tos[0]._id).toEqual('jeff.dasovich@enron.com');
        expect(tos[0].count).toEqual(6535);
      });
  });
});
