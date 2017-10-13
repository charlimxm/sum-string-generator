$(function() {
  var $input = $('input')
  var $button = $('button')
  var $result = $('h2')

  $button.on('click', function() {
    var str = $input.val()

    $result.text('')
    $result.text(`Result: ${sumString(str)}`)
  })


  function sumString(s) {
    var sArr = s.split('')
    var total = 0
    var skip = false

    for(var i = 0; i <= sArr.length - 1; i++) {
      var next = sArr[i]
      if(skip) {
        skip = false
        continue
      }

      if(next === '-') {
        console.log(total, Number(sArr[i + 1]) )
        total -= Number(sArr[i + 1])
        console.log(total, Number(sArr[i + 1]) )
        skip = true
      } else {
        total += Number(next)
      }
    }

    return total
  }
})
