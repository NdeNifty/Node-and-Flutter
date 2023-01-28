import 'package:flutter/material.dart';

void main() {
  runApp(const MyFirstApp());
}

class MyFirstApp extends StatelessWidget {
  const MyFirstApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'My First Flutter App',
      home: Scaffold(
        appBar: AppBar(
          title: const Text('The title of the app'),
        ),
        body: Center(
            child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: const [
            DecoratedBox(
              decoration: BoxDecoration(color: Colors.amber),
              child: Padding(
                padding: const EdgeInsets.all(15),
                child: Text('Hello World'),
              ),
            ),
            DecoratedBox(
              decoration: BoxDecoration(color: Colors.purple),
              child: Padding(
                padding: const EdgeInsets.all(15),
                child: Text('Hello World'),
              ),
            )
          ],
        )),
      ),
    );
  }
}
