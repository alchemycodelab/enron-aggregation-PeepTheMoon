# Hints

Be careful of *spoilers*!

## Emails per day

1. Create a new `date` field which formats the
`headers.date` field without a time.
`{ $dateToString: { format: '%Y-%m-%d', date: '$headers.Date' } }`. This can be done in a
project stage.

1. Group by the date and use `$sum` to count each
time that date was seen

1. Group by `null` (this groups all documents into
one). Take the `$min`, `$max`, and `$avg` of the
`$count` field.

## Email recipient

1. `$unwind` `$headers.To` in order to get a document
per addressee.

1. use `$project` to format the date, removing time.
`{ $dateToString: { format: '%Y-%m-%d', date: '$headers.Date' } }`. Create a `to` field with the
value from `$headers.To`

1. Group by the `$to` field and count ith `$sum`

1. sort by the count field.
