# Aggregation practice

Mess around with aggregations.Play around with the sample enron email data.

There are two aggregates to create as part of this
repo: `lib/emails-per-day.js` and `lib/email-recipients.js`.
Fill in the array with aggregation stages. Once correct,
the tests in `test/aggregate.test.js` should pass.

There are some [hints](hints.md) provided. Be careful
of potential spoilers there. Try to use the hints only
if you get stuck.

If you really get stuck, or just want to check your
answer see the [answers](answers.md).

To check your answers run the provided tests.

## Setup

A read-only db connection to an mlab database is
provided by `test/connect.js`. Tests require an
internet connection.

* `npm i`
* Run tests with `npm run test` or `npm run test:watch`

## Example document

```js
{
    "_id" : ObjectId("4f16fca5d1e2d3237100927d"),
    "body" : "Your just a little jokester today - What do you mean \"try and fit me in your schedule\"     I will be there - and you will make the time for me -Because you have NO OTHER CLIENTS!!!!\n\nthanks for the laughs\ni love you",
    "filename" : "23.",
    "headers" : {
        "Content-Transfer-Encoding" : "7bit",
        "Content-Type" : "text/plain; charset=us-ascii",
        "Date" : ISODate("2001-04-19T02:40:00.000Z"),
        "From" : "sandra.brawner@enron.com",
        "Message-ID" : "<11280155.1075845089118.JavaMail.evans@thyme>",
        "Mime-Version" : "1.0",
        "Subject" : "Re: Misc",
        "To" : [ 
            "kennethbrawner@email.msn.com"
        ],
        "X-FileName" : "Brawner, Sandra F..pst",
        "X-Folder" : "\\Brawner, Sandra F.\\Brawner, Sandra F.\\Sent Items",
        "X-From" : "Sandra F Brawner",
        "X-Origin" : "BRAWNER-S",
        "X-To" : "kennethbrawner  <kennethbrawner@email.msn.com>",
        "X-bcc" : "",
        "X-cc" : ""
    },
    "mailbox" : "brawner-s",
    "subFolder" : "sent_items"
}
```

## Emails per day

Find the number of emails sent per day.

## Email recipients

Find the number of emails sent to each email address. Sort the result
in order of most received to least received.

## MongoDB syntax

### Stages

* `$unwind`: make a new document for each item in an 
array [Docs](https://docs.mongodb.com/manual/reference/operator/aggregation/unwind/)

* `project`: select or manipulate fields in a document
[Docs](https://docs.mongodb.com/manual/reference/operator/aggregation/project/)

* `group`: group by a field in a document [Docs](https://docs.mongodb.com/manual/reference/operator/aggregation/group/)

* `sort`: sort by a field. [Docs](https://docs.mongodb.com/manual/reference/operator/aggregation/sort/)

### Operators

* `dateToString`: format a date/time into a string. E.G. 
`{ $dateToString: { format: '%Y-%m-%d', date: '$headers.Date' } }`
[Docs](https://docs.mongodb.com/manual/reference/operator/aggregation/dateToString/)

* `sum`: add numbers. [Docs](https://docs.mongodb.com/manual/reference/operator/aggregation/sum/)

* `addToSet`: add item into an array, removing duplicates.
[Docs](https://docs.mongodb.com/manual/reference/operator/aggregation/addToSet/)

* `size`: get the size of an array. [Docs](https://docs.mongodb.com/manual/reference/operator/aggregation/size/)

* `min`: get the minimum value seen for a field in a group by.
[Docs]()

* `max`: get the maximum value seen for a field in a group by.
[Docs](https://docs.mongodb.com/manual/reference/operator/aggregation/max/)

* `avg`: get the average value seen for a field in a group by.
[Docs](https://docs.mongodb.com/manual/reference/operator/aggregation/avg/)
