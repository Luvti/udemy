import 'package:flutter/material.dart';

import '../models/transaction.dart';
import './transaction_item.dart';

class TransactionList extends StatelessWidget {
  final List<Transaction> transactions;
  final Function deleteTx;

  TransactionList(this.transactions, this.deleteTx);

  @override
  Widget build(BuildContext context) {
    print('build() TransactionList');

    //  ListView( children:[] ) as Column with SingleScrollView
    //  ListView.builder() as ScrollView without height = load only what's visible
    return
        // Container(
        //   height: MediaQuery.of(context).size.height * 0.6,
        //   child:
        transactions.isEmpty
            ? LayoutBuilder(
                builder: (ctx, constraints) {
                  return Column(
                    children: <Widget>[
                      Text(
                        'No transaction',
                        style: Theme.of(context).textTheme.title,
                      ),
                      const SizedBox(
                        height: 10,
                      ),
                      Container(
                        height: constraints.maxHeight * 0.6,
                        child: Image.asset(
                          'assets/images/waiting.png',
                          fit: BoxFit.cover,
                        ),
                      )
                    ],
                  );
                },
              )
            : 
            ListView(
              children: transactions.map((tx) => 
                TransactionItem(
                  key: ValueKey(tx.id),
                  transaction: tx,
                  deleteTx: deleteTx
                )).toList(),
            );
            // ListView.builder(
            //     itemBuilder: (ctx, index) {
            //       return TransactionItem(transaction: transactions[index], deleteTx: deleteTx);
            //     },
            //     itemCount: transactions.length,
            //     // ),
            //   );
  }
}
