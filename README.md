# AWS lambda node boilerplate
A simple boilerplate for node base AWS lambdas that packages up your code without including `aws-sdk`.

![](https://a.dilcdn.com/bl/wp-content/uploads/sites/8/2014/10/GeniePacking.gif)

## What does it do?
It sets up a nice and easy way to write some nice ES6 code for your lambda and package it up in a nice and efficient way.

## Why does this matter?
There are a few faux-pas people make when writing Node lambdas such as including the `aws-sdk` when deploying and such. 

The key thing is that you need to stick everything into a `.zip` file, and the smaller that zip file the better, because when your lambda gets invoked, that zip needs to be copied from S3 into the runtime env; so a smaller zip = faster invoke time.

## What's included?
- Testing with Ava (coverage with NYC)
- Packaging with Webpack
- Babel plugins (Lodash cherry picking in this case)

## Can I test invocation locally?
Sure, edit `invoke.js`.
