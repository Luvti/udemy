
import 'dart:math';
import 'package:flutter/material.dart';
import 'package:intl/intl.dart';

import '../models/transaction.dart';

class TransactionItem extends StatefulWidget {
  const TransactionItem({
    Key key,
    @required this.transaction,
    @required this.deleteTx,
  }) : super(key: key);

  final Transaction transaction;
  final Function deleteTx;

  @override
  _TransactionItemState createState() => _TransactionItemState();
}

class _TransactionItemState extends State<TransactionItem> {
  Color _bgColor;

  @override
  void initState() {
    const availableColors = [
      Colors.red,
      Colors.black,
      Colors.blue,
      Colors.purple,
    ];
    _bgColor = availableColors[Random().nextInt(4)];
    super.initState();
  }
  @override
  Widget build(BuildContext context) {
    return Card(
      elevation: 5,
      margin: const  EdgeInsets.symmetric(
        vertical: 8,
        horizontal: 5,
      ),
      child: ListTile(
        // leading: Container(
        //   height: 60,
        //   width: 60,
        //   decoration: BoxDecoration(
        //     color: Theme.of(context).primaryColor,
        //     shape: BoxShape.circle,
        //   ),
        // ),
        leading: CircleAvatar(
          radius: 30,
          backgroundColor: _bgColor,
          child: Padding(
            padding: const EdgeInsets.all(6),
            child: FittedBox(
              child: Text('\$ ${widget.transaction.amount.toStringAsFixed(2)}'),
            ),
          ),
        ),
        title: Text(
          widget.transaction.title,
          style: Theme.of(context).textTheme.title,
        ),
        subtitle: Text(
          DateFormat.yMMMd().format(widget.transaction.date),
        ),
        trailing: MediaQuery.of(context).size.width > 460
            ? FlatButton.icon(
                icon: const Icon(Icons.delete),
                textColor: Theme.of(context).errorColor,
                label: const Text('Delete'),
                onPressed: () => widget.deleteTx(widget.transaction.id),

              )
            : IconButton(
                icon: const Icon(Icons.delete),
                color: Theme.of(context).errorColor,
                onPressed: () => widget.deleteTx(widget.transaction.id),
              ),
      ),
    );

                  //   return Card(
                  //     child: Row(
                  //       children: <Widget>[
                  //         Container(
                  //           margin: EdgeInsets.symmetric(
                  //             vertical: 20,
                  //             horizontal: 15,
                  //           ),
                  //           decoration: BoxDecoration(
                  //             border: Border.all(
                  //               color: Theme.of(context).primaryColor,
                  //               width: 2,
                  //             ),
                  //           ),
                  //           padding: EdgeInsets.all(10),
                  //           child: Text(
                  //             '\$ ${transactions[index].amount.toStringAsFixed(2)}',
                  //             style: TextStyle(
                  //               fontWeight: FontWeight.bold,
                  //               fontSize: 20,
                  //               color: Theme.of(context).primaryColor,
                  //             ),
                  //           ),
                  //         ),
                  //         Column(
                  //           crossAxisAlignment: CrossAxisAlignment.start,
                  //           children: <Widget>[
                  //             Text(
                  //               transactions[index].title,
                  //               style: Theme.of(context).textTheme.title,
                  //             ),
                  //             Text(
                  //               DateFormat.yMMMd().format(transactions[index].date),
                  //               style: TextStyle(
                  //                 color: Colors.grey,
                  //               ),
                  //             ),
                  //           ],
                  //         ),
                  //       ],
                  //     ),
                  //   );
  }
}
