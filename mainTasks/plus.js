let a = prompt('Введите первое число -', '');
let b = prompt('Введите второе число -', '');

function sum(a, b) {
    a = [...a].reverse();
    b = [...b].reverse();
    
    for (let i = 0; i < b.length; ++i) {
      if ((a[i] = ~~a[i] + ~~b[i]) > 9) {
        a[i] -= 10;
        b[i+1] = ~~b[i+1] + 1;
      }
    }
    
    return a.reverse().join("")
}



function subtraction(a, b) {
    a = [...a].reverse();
    b = [...b].reverse();
    let aLarge = false;
    let carry = 0

    if (a.join('') == b.join('')) {
      return '0';
    }

    if (a.length == b.length) {
      let i = 0;
      while (i < a.length) {
        if (a.reverse().join('').charAt(i) > b.reverse().join('').charAt(i)) {
          aLarge = true;
          break
        } else if (a.reverse().join('').charAt(i) < b.reverse().join('').charAt(i)) {
          aLarge = false;
          break
        }
        ++i;
      }
  }

    if (a.length > b.length || aLarge == true) {

      while (b.length < a.length) {
        b.push('0');
      }

      for (let i = 0; i < b.length; ++i) {
        if ((a[i] = ~~a[i] - ~~b[i]) < 0) {
          a[i] += 10;
          a[i + 1] -= 1;
       } 
          
      }
      return a.reverse().join('').replace(/^0+/, '');

    } else if (a.length < b.length || aLarge == false) {

      while (a.length < b.length) {
        a.push('0');
      }

      for (let i = 0; i < a.length; ++i) {
        if ((b[i] = ~~b[i] - ~~a[i]) < 0) {
          b[i] += 10;
          b[i+1] -= 1;
        } 
      }
      return `-${b.reverse().join('').replace(/^0+/, '')}`;
  } 
}




function multiply(a, b) {
    a = [...a].reverse();
    b = [...b].reverse();

    let stack = [];

    for (let i = 0; i < a.length; i++) {
      for (let j = 0; j < b.length; j++) {
        let m = a[i] * b[j];
        stack[i + j] = (stack[i + j]) ? stack[i + j] + m : m;
      }
    }

    for (let i = 0; i < stack.length; i++) {
      let num = stack[i] % 10;
      let move = Math.floor(stack[i] / 10);
      stack[i] = num;

      if (stack[i + 1]) {
        stack[i + 1] += move;
      } else if (move != 0) {
        stack[i + 1] = move;
      }
    }

    return stack.reverse().join('');
}

// 
function division(a, b) {
  let num = String(a),
  numLength = num.length,
  remainder = 0,
  answer = '',
  i = 0;

  while (i < numLength + 3) {
      let digit = i < numLength ? parseInt(num[i]) : 0;
      if (i == numLength) {
          answer = answer + ".";
      }
      answer = answer + Math.floor((digit + (remainder * 10)) / b);
      remainder = (digit + (remainder * 10)) % b;
      i++;
  }
  if (+answer > 1) {
    return answer.replace(/^0+/, '');
  } else if (+answer < 1) {
    return parseFloat(answer).toString();
  }
}


//console.log(sum(a, b));
//console.log(subtraction(a, b));
//console.log(multiply(a, b));
//console.log(division(a, b))
