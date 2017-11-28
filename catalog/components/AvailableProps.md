## Introduction
Use this component in order to easily debug, view or walk some data structure in a UI friendly manner.

## Rendering

```react
state: {foo: 0, bar: "some string", foobar: [4,"3",2,1]}
---
<AvailableProps data={{dataPath: "state", prop: state}}/>
```

## API

```hint|neutral
**data**: any
The variable to displayed.
```
