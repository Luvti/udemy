import 'package:flutter/material.dart';

class NewTransaction extends StatefulWidget {
  final Function addTx;

  NewTransaction(this.addTx);

  @override
  _NewTransactionState createState() => _NewTransactionState();
}

class _NewTransactionState extends State<NewTransaction> {
  final titleController = TextEditingController();

  final amountController = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return Card(
      elevation: 5,
      child: Container(
        padding: EdgeInsets.all(10),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.end,
          children: <Widget>[
            TextField(
              decoration: InputDecoration(
                labelText: 'Title',
              ),
              controller: titleController,
              onSubmitted: (_) => submitData,
              // onChanged: (val) {titleInput = val;},
            ),
            TextField(
              decoration: InputDecoration(
                labelText: 'Amount',
              ),
              // iOS не позволяет для типа TextInputType.number() разделители чисел вводить, по-этому лучше использвать TextInputType.numberWithOptions(decimal: true)
              keyboardType: TextInputType.numberWithOptions(decimal: true),
              // onChanged: (val) =>  amountInput = val,
              controller: amountController,
              onSubmitted: (_) => submitData,
            ),
            FlatButton(
              child: Text('Add Transaction'),
              textColor: Colors.purple,
              onPressed: () {
                // print(titleInput);
                // print(amountInput);
                submitData();
              },
            )
          ],
        ),
      ),
    );
  }

  void submitData() {
    final enteredTitle = titleController.text;
    final enteredAmount =  double.parse(amountController.text);
    
    if(enteredTitle.isEmpty || enteredAmount <= 0) {
      return;
    }
  
    widget.addTx(
      enteredTitle,
      enteredAmount,
    );
    Navigator.of(context).pop();
  }
}
