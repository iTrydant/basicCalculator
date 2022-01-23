let num = Number(prompt('Enter one number below: '))
let num2 = Number(prompt('Enter another number: '))
let sign = prompt('Would you like to add(+), subtract(-), multiply(*) or divide(/) these numbers?')

switch(sign) {
    case 'add':
        document.write(num + num2)
    break;
    
    case '+':
        document.write(num + num2)
    break;

    case 'subtract':
        document.write(num - num2)
    break;

    case '-':
      document.write(num - num2);
    break;

    case 'multiply':
      document.write(num * num2);
    break;

    case '*':
      document.write(num * num2)
    break;

    case '/':
      document.write(num / num2);
    break;

    case 'divide':
      document.write(num / num2);
    break;

    default:
      document.write('Please use add or + for addition, subtract or - for subrtactiong, multiply or * for multiplication, divide or / for divition.')
  }
