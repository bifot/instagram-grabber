var req = require('tiny_request');
var cheerio = require('cheerio');
var express = require('express');

var app = express();
var girls = [];

var getCountMembers = (group, offset, max) => {
  return new Promise((resolve, reject) => {
    req.get({
      url: `https://api.vk.com/method/groups.getMembers?group_id=${group}&offset=${offset}&v=5.60`,
      json: true
    }, (body, response, error) => {
      if (!error && response.statusCode == 200) {
        if (body.response) {
          body.response.count > max ? resolve([group, max]) : resolve([group, body.response.count]);
        } else {
          reject('Error: group not found');
        }
      } else {
        reject(error);
      }
    });
  });
};

getCountMembers('pravda.show', 0, 150000).then(result => {
  for (var i = 0; i < result[1]; i += 1000) {
    req.get({
      url: `https://api.vk.com/method/groups.getMembers?group_id=${result[0]}&offset=${i}&sort=id_desc&fields=sex,connections,city&v=5.60`,
      json: true
    }, (body, response, error) => {
      if (!error && response.statusCode == 200) {
        var count = body.response.count;
        var profiles = body.response.items;

        profiles.forEach(user => {
          var id = user.id;
          var name = `${user.first_name} ${user.last_name}`;
          var sex = user.sex;
          var city = user.city && user.city.title;
          var instagram = user.instagram;

          // sex = 1 => female; sex = 2 => male
          if (sex == 1 && city == 'Санкт-Петербург' && instagram) {
            var girl = {};

            girl.id = id;
            girl.name = name;
            girl.sex = sex == 1 ? 'female' : 'male';
            girl.city = city;
            girl.instagram = instagram;

            req.get(`https://www.instagram.com/${instagram}/?__a=1`, (body, response, error) => {
              if (!error && response.statusCode == 200) {
                girl.count_instagram = JSON.parse(body).user.followed_by.count;
              } else {
                girl.count_instagram = -1;
              }
            })

            girls.push(girl);
          }
        });
      } else {
        console.log(error);
      }
    });
  }
});

app.use(express.static('./static'));
app.set('view engine', 'ejs');
app.get('/', (req, res) => {
  res.render('pages/index', {
    data: girls
  });
});

app.listen(8010);

console.log('Listening on http://localhost:8010');
