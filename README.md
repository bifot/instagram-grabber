# Instagram Grabber

Easy parser instagram accounts from public page in VK. Results of name, sex, city, instagram login and instagram count followers.

## Install

```
$ git clone https://github.com/bifot/instagram-grabber
$ cd instagram-grabber
$ npm install
$ node app.js
```

## Settings

Find line `if (sex == 1 && city == 'Санкт-Петербург' && instagram)`. 

* `sex == 1` — parse only girls;
* `city == 'Санкт-Петербург'` — parse only people from Saint Petersburg (Санкт-Петербург).

You can select other city, but be careful, title of city must be on cyrillic.

## How to use

Enter your arguments in function `getCountMembers`. As an example, here:

* `pravda.show` — group for parsing;
* `0` — offset;
* `150000` — max followers.

```javascript
getCountMembers('pravda.show', 0, 150000)
```

That's all. Results you can see on http://localhost:8010.

## License

MIT License

Copyright (c) 2017 Mikhail Semin

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

__________

*Made by [Mikhail Semin](http://bifot.ru).*