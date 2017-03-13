var text = 'This is a typing test.'

for (var i = 0; i < text.length; i++) {
  var $letter = document.createElement('span')
  $letter.textContent = text[i]
  document.body.appendChild($letter)
}

var $firstLetter = document.querySelector('span')
$firstLetter.classList.add('current')

document.addEventListener('keypress', function (event) {
  var $current = document.querySelector('.current')
  var $currentCharacter = $current.textContent
  if (event.key === $currentCharacter) {
    $current.classList.add('correct')
    $current.classList.remove('current')
    $current.nextSibling.classList.add('current')
  }
  else {
    $current.classList.add('incorrect')
  }
})
