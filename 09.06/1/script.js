//Task 2
function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
//Task 4
function isSpam(str) {
  var spamWords = ['100% безкоштовно', 'збільшення продажів', 'тільки сьогодні', 'не видаляйте', 'ххх'];

  for (var i = 0; i < spamWords.length; i++) {
    if (str.toLowerCase().includes(spamWords[i].toLowerCase())) {
      return true;
    }
  }

  return false;
}
//Task 6
function isSpam(str) {
  var spamWords = ['100% безкоштовно', 'збільшення продажів', 'тільки сьогодні', 'не видаляйте', 'ххх'];

  for (var i = 0; i < spamWords.length; i++) {
    if (str.toLowerCase().includes(spamWords[i].toLowerCase())) {
      return true;
    }
  }

  return false;
}
//Task 8
function longestWord(sentence) {
  var words = sentence.split(' ');
  var longest = '';

  for (var i = 0; i < words.length; i++) {
    if (words[i].length > longest.length) {
      longest = words[i];
    }
  }

  return longest;
}
//Task 10
function findIndexesAndCount(str, char) {
  var indexes = [];
  var count = 0;

  for (var i = 0; i < str.length; i++) {
    if (str[i] === char) {
      indexes.push(i);
      count++;
    }
  }

  console.log('Indexes:', indexes);
  return count;
}
