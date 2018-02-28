# Cakesss

This application shows pictures of cakes.

You can 
- see the list of random cakes
- on clicking on a cake, you can see the detailed comment/yumFactor of a cake
and ...
- upload you own cake (we accept URLs only), with comment and yumFactor


## To run on Windows

Please access /www/index.html


## To build on desktop (I am sure this works for Mac, for Windows webpack might need special treatment):


```
npm i
```



- in dev (with server)
```
npm start
```
the app will be served @ http://localhost:3000/

- to build /www
```
npm run build
```
and run index.html from www/ folder



## To build on mobile:
```
npm start
```

```
ionic state reset
ionic serve
```