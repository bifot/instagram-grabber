var table = document.querySelectorAll('.table tbody tr');

var sortOnline = document.querySelector('.sort__online');
var sortFemale = document.querySelector('.sort__female');
var sortMale = document.querySelector('.sort__male');

function sortBySex(link, cond) {
  if (link.className.match('sort__active')) {
    table.forEach(function(tr) {
      tr.style.display = '';
      link.className = 'sort__online';
    });
  } else {
    table.forEach(function(tr) {
      var sex = tr.querySelector('td:nth-child(2)').innerText;

      if (sex !== cond) {
        tr.style.display = 'none';
        link.className = 'sort__online sort__active';
      }
    });
  }
};

sortOnline.addEventListener('click', function() {
  if (sortOnline.className.match('sort__active')) {
    table.forEach(function(tr) {
      tr.style.display = '';
      sortOnline.className = 'sort__online';
    });
  } else {
    table.forEach(function(tr) {
      var status = tr.querySelector('td:nth-child(4)').innerText;

      if (status == 'offline') {
        tr.style.display = 'none';
        sortOnline.className = 'sort__online sort__active';
      }
    });
  }
});

sortFemale.addEventListener('click', function() {
  sortBySex(sortFemale, 'female');
});

sortMale.addEventListener('click', function() {
  sortBySex(sortMale, 'male');
});