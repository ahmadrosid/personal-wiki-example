# Javascript


## Github Repo

- [exeljs - Excel Workbook Manager](https://github.com/exceljs/exceljs)


## Snippets

```js
// Native
const datePattern = /^(\d{2})-(\d{2})-(\d{4})$/;
const [, month, day, year] = datePattern.exec('12-25-1995');
new Date(`${month}, ${day} ${year}`);
// => "1995-12-24T13:00:00.000Z"
```
