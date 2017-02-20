To run : 

```
meteor npm install
meteor
```

It use meteor 1.4.3.1 with ecmacscript 0.6.3.
Antd is installed.

On the fisrt page (/) you can see a default html button.
In the console, you have a message : 
> You are using a whole package of antd,
> please use https://www.npmjs.com/package/babel-plugin-import to reduce app bundle size.

When you have ecmascript with the 0.6.1 version, this message is remove, and you have a default antd button (blue).

So the css is not loaded by the babel import plugin.
