## Emails per day

```js
[
    { $project: { date: { $dateToString: { format: '%Y-%m-%d', date: '$headers.Date' } } } },
    { $group: { _id: '$date', count: { $sum: 1 } } },
    { $group: { _id: null, min: { $min: '$count' }, max: { $max: '$count' }, avg: { $avg: '$count' } } }
]
```

## Email recipients

```js
[
    { $unwind: '$headers.To' },
    { $project: { to: '$headers.To', day: { $dateToString: { format: '%Y-%m-%d', date: '$headers.Date' } } } },
    { $group: { _id: '$to', count: { $sum: 1 } } },
    { $sort: { 'count': -1 } }
]
```
