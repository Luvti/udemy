import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import './edit_product_screen.dart';

import '../widgets/app_drawer.dart';
import '../widgets/user_product_item.dart';

import '../providers/products.dart';

class UserProductsScreen extends StatelessWidget {
  static const String routePath = '/user-products';
  @override
  Widget build(BuildContext context) {
    final productsData = Provider.of<Products>(context);
    return Scaffold(
      appBar: AppBar(
        title: Text('Your Products'),
        actions: <Widget>[
          IconButton(
            icon: const Icon(Icons.add),
            onPressed: () {
              Navigator.of(context).pushNamed(EditProductScreen.routePath);
            },
          ),
        ],
      ),
      drawer: AppDrawer(),
      body: Padding(
        padding: const EdgeInsets.all(10),
        child: ListView.builder(
          itemCount: productsData.items.length,
          itemBuilder: (_, i) => Column(
            children: <Widget>[
              UserProductItem(
                productsData.items[i].id,
                productsData.items[i].title,
                productsData.items[i].imageUrl,
              ),
              Divider(),
            ],
          ),
        ),
      ),
    );
  }
}
