// void addNumbers(int num1, int num2) {
//   print(num1 + num2);
// }
// void addNumbers(num num1, double num2) {
//   print(num1 + num2);
// }
// void addNumbers(double num1, double num2) {
//   print(num1 + num2);
// }
import 'package:flutter/material.dart';

class Person {
  String name;
  int age;
  // String name = 'Max';
  // int age = 30;
  // без названия входных параметров в вызывающем методе
  // Person(String inputName, int age) {
  //   name = inputName;
  //   this.age = age;
  // }
  // с обязательным наименованием входных параметров в вызывающем методе
  // Person({@required String inputName, int age = 30}) {
  //   name = inputName;
  //   this.age = age;
  // }
  Person({@required this.name, this.age = 30});
}
double addNumbers(double num1, double num2) {
  return num1 + num2;
}
void main1() {
  // String name = 'Max';
  // int age = 30;
  // var p1 = Person();
  // var p2 = Person();
  // p2.name = 'Mary';
  // var p1 = Person('Max', 30);
  // var p2 = Person('Mary', 31);
  // var p1 = Person(inputName: 'Max');
  // var p2 = Person(age: 31, inputName: 'Mary');

  var p1 = Person(name: 'Max');
  var p2 = Person(age: 31, name: 'Mary');
  print(p1);
  var firtsResult = addNumbers(1, 2.6);
  // double firtsResult = addNumbers(1, 2.6);
  print(firtsResult);

  firtsResult = addNumbers(1, 1);
  print(addNumbers(1, 1));

  print(firtsResult + 1);
  print('Hello, ' + p1.name);
  print('Hello, ' + p2.name);
}
