import 'package:flutter/material.dart';
import './question.dart';

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
  void _answerQuestion() {
    setState(() {
      _questionIndex = _questionIndex + 1;
    });
    print(_questionIndex);
    // print('Answer is choosen!');
  }

  @override
  Widget build(BuildContext context) {
    // return MaterialApp(home: Text('Hello!'));
    var questions = ['What\'s your favorite color?', 'What\'s your favorite animal?'];
    return MaterialApp(
        home: Scaffold(
      appBar: AppBar(
        title: Text('App title'),
      ),
      // body: Text('App text'),
      body: Column(
        children: [
          // Text(questions.elementAt(0)),
          Question(
            questions[_questionIndex]
          ),
          RaisedButton(
            child: Text('Answer 1'),
            onPressed: _answerQuestion,
          ),
          RaisedButton(
            child: Text('Answer 2'),
            // onPressed: answerQuestion,
            onPressed: () => print('Answer 2 choosen!'),
          ),
          RaisedButton(
            child: Text('Answer 3'),
            // onPressed: answerQuestion,
            onPressed: () {
              print('Answer 3 choosen!');
            },
          ),
        ],
      ),
    ));
  }
}
