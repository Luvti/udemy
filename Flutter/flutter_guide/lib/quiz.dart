import 'package:flutter/material.dart';

import './question.dart';
import './answer.dart';

class Quiz extends StatelessWidget {
  final List<Map<String, Object>> questions;
  final Function answerQuestion;
  final int questionIndex;
  Quiz({@required this.questions, @required this.answerQuestion, @required this.questionIndex});
  @override
  Widget build(BuildContext context) {
    return Column(children: [
      // Text(questions.elementAt(0)),
      Question(questions[questionIndex]['questionText']),
      // Answer(_answerQuestion),
      // Answer(_answerQuestion),
      // Answer(_answerQuestion),
      ...(questions[questionIndex]['answers'] as List<Map<String, Object>>).map((answer) {
        return Answer(answer['text'], () => answerQuestion(answer['score']));
      }).toList(),
      // RaisedButton(
      //   child: Text('Answer 1'),
      //   onPressed: _answerQuestion,
      // ),
      // RaisedButton(
      //   child: Text('Answer 2'),
      //   // onPressed: answerQuestion,
      //   onPressed: () => print('Answer 2 choosen!'),
      // ),
      // RaisedButton(
      //   child: Text('Answer 3'),
      //   // onPressed: answerQuestion,
      //   onPressed: () {
      //     print('Answer 3 choosen!');
      //   },
      //),
    ]);
  }
}
