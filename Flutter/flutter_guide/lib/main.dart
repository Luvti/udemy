import 'package:flutter/material.dart';

import './quiz.dart';
import './result.dart';

// void main() {
//   runApp(GuideApp());
// }

void main() => runApp(GuideApp());

// void answerQuestion() {
//   print('Answer is choosen!');
// }

// class GuideApp extends StatelessWidget {
class GuideApp extends StatefulWidget {
  @override
  State<StatefulWidget> createState() {
    return _GuideState();
  }
}

class _GuideState extends State<GuideApp> {
  var _questionIndex = 0;
  var _totalScore = 0;
  final _questions = const [
    {
      'questionText': 'What\'s your favorite color?',
      'answers': [
        {'text': 'Black', 'score': 10},
        {'text': 'Red', 'score': 6},
        {'text': 'Green', 'score': 5},
        {'text': 'White', 'score': 1},
      ],
    },
    {
      'questionText': 'What\'s your favorite animal?',
      'answers': [
        {'text': 'Elephant', 'score': 10},
        {'text': 'Tiger', 'score': 6},
        {'text': 'Lion', 'score': 5},
        {'text': 'Rabbit', 'score': 1},
      ],
    },
    {
      'questionText': 'What\'s your favorite instructor?',
      'answers': [
        {'text': 'Max', 'score': 1},
        {'text': 'Not Max', 'score': 10},
      ],
    },
  ];
  void _answerQuestion(int score) {
    _totalScore += score;
    setState(() {
      _questionIndex = _questionIndex + 1;
    });
    print(_questionIndex);
    if (_questionIndex < _questions.length) {
      print('We have more questions!');
    }
    // print('Answer is choosen!');
  }

  void _resetQuiz() {
     setState(() {
      _questionIndex = 0;
      _totalScore = 0;
    });
  }

  @override
  Widget build(BuildContext context) {
    // return MaterialApp(home: Text('Hello!'));
    // var questions = ['What\'s your favorite color?', 'What\'s your favorite animal?'];
    // const questions = const [
    //   {
    //     'questionText': 'What\'s your favorite color?',
    //     'answers': ['Black', 'Red', 'Green', 'Whilte'],
    //   },
    //   {
    //     'questionText': 'What\'s your favorite animal?',
    //     'answers': ['Rabbit', 'Elephant', 'Lion', 'Tiger'],
    //   },
    //   {
    //     'questionText': 'What\'s your favorite instructor?',
    //     'answers': ['Max', 'Max', 'Max', 'Max'],
    //   },
    // ];
    // var dummy = const ['Hello'];
    // dummy.add('Max');
    // print(dummy);
    // questions = []; // doesn't work if question is a const
    return MaterialApp(
        home: Scaffold(
      appBar: AppBar(
        title: Text('App title'),
      ),
      // body: Text('App text'),
      body: _questionIndex < _questions.length
          ? Quiz(
              answerQuestion: _answerQuestion,
              questionIndex: _questionIndex,
              questions: _questions,
            )
          : Result(_totalScore, _resetQuiz),
    ));
  }
}
