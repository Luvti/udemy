import 'package:flutter/material.dart';

import './text_output.dart';

class TextControl extends StatefulWidget {
  @override
  State<StatefulWidget> createState() {
    return _TextControlState();
  }
}

class _TextControlState extends State<TextControl> {
  String mainText = 'This is the 1-st assignment';

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        RaisedButton(
          child: Text('change text'),
          onPressed: () {
            setState(() {
              mainText = 'Text changed!';
            });
          },
        ),
        TextOutput(mainText),
      ],
    );
  }
}
