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
  if (!$current) {
    return
  }
  var $currentCharacter = $current.textContent
  if (event.key === $currentCharacter) {
    $current.classList.add('correct')
    $current.classList.remove('current')
    if ($current.nextSibling.nodeType === 1) {
      $current.nextSibling.classList.add('current')
    }
    else {
      var numberIncorrect = document.querySelectorAll('.incorrect').length
      var score = document.createElement('p')
      var $score = document.createTextNode('You made' + ' ' + numberIncorrect + ' ' + 'error(s)!' + ' ' + 'Try again!')
      var noErrors = document.createTextNode('Great job! You got 100%!')
      if (numberIncorrect > 0) {
        score.appendChild($score)
        document.body.appendChild(score)
      }
      else {
        score.appendChild(noErrors)
        document.body.appendChild(score)
      }
    }
  }
  else {
    $current.classList.add('incorrect')
  }
})
