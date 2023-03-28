# Object Like Map

Use maps as if they were objects, using object iternal methods.

Usage:

```bash
npm install object-like-map
```
And now you can use a Map as if it was an Object, while retaining most of Map's functionality:
```js
import olm from 'object-like-map'

const myOLM = olm({ first: 1, second: 2 })

const third = myOLM.third = 3

const exists = 'first' in myOLM

delete myOLM.second

for (const [key, value] of myOLM) {
  console.log({ key, value })
}

myOLM.clear()

console.log(myOLM.size)
```
instead of:
```js
const myMap = new Map()
myMap.set('first', 1)
myMap.set('second', 2)

myMap.set('third', 3)
const third = myMap.get('third')

const exists = myMap.has('first')

myMap.delete('second')

for (const [key, value] of myMap) {
  console.log({ key, value })
}

myMap.clear()

console.log(myMap.size)
```
Notably, if you set a value with a key that's an existing Map property/method you won't be able to read it:
```js
myOLM.clear = 'myvalue!' // works
const myvalue = myOLM.clear // 'function clear() { [native code] }'

const exists = 'clear' in myOLM // works
```

This package is likely slow as it uses Proxies, but I haven't benchmarked it.
