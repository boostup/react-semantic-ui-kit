## Introduction
Use this component in order to have a 'fade in' effect on its child components.

## Examples:

<ElementFader visible={true} => makes element always Visible; no fade transition
<ElementFader visible={false} => makes element always Invisible; no fade transition
<ElementFader></ElementFader> => will manage internal state.visible

## Rendering

```react
state: {visible: false}
---
<div>
    <button onClick={ () => setState( {visible: !state.visible} ) }>
        Fade it {state.visible ? 'out' : 'in'} !
    </button>
    <ElementFader visible={state.visible}>
        <img src="http://placehold.it/150x124/2263" />
    </ElementFader>
</div>
```

## API

```hint|neutral
**visible**: bool
 - **true**: Force child elements to be visible
 - **false**: Force child elements to be invisible
 - **someVar**: pass 'someVar' as false.  Later, if someVar ===true, than the fade-in effect will trigger.
```

