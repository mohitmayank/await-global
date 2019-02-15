# await-global
Promised wait for globals

## Install
`yarn install await-global`

## Usage
```javascript
  import awaitGloabl from 'await-global';
  
  awaitGlobal('SomeGlobal').then(SomeGlobal => {
    console.log(SomeGlobal);
  });
  
  async function globalCheck() {
    const AnotherGlobal = await awaitGlobal('AnotherGlobal');
    console.log(AnotherGlobal);
  }
```
