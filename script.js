/* Переписать switch case на if else

var name = prompt("Введите ваше имя");

switch (name) {
  case 'Денис':
    alert( 'Добрый день, учитель' );
    break;

  case 'Алиса':
  case 'Иван':
  case 'Анастасия':
  case 'Андрей':
    alert( 'Привет, одногрупник' );
    break;

  default:
    alert( 'Ты не из нашей песочницы!' );
} */

let userName = prompt("Введите ваше имя");

if ( userName == 'Denis' ) {
    alert( 'Добрый день, учитель' );
}
else if ( userName == 'Alisa' || userName == 'Ivan' || userName == 'Anastasia' || userName == 'Andrew' ) {
    alert( 'Привет, одногрупник' );
}
else {
    alert( 'Ты не из нашей песочницы!' );
}