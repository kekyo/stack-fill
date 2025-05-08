# Component stacking and fill remains React MUI layout component

[![Project Status: WIP – Initial development is in progress, but there has not yet been a stable, usable release suitable for the public.](https://www.repostatus.org/badges/latest/wip.svg)](https://www.repostatus.org/#wip)

## NPM

|Package|NPM|
|:----|:----|
|`stack-fill`|![NPM Version](https://img.shields.io/npm/v/stack-fill)|

---

## What is this?

Component stacking and fill remains React MUI layout component.

This is a component similar to the `Stack` component of React MUI. The difference is that the last child element in the stack takes up all remaining space (This can be changed).

![Structure](images/structure.png)

It may be useful when building a multi-pane GUI, such as Electron or a managed web application.


----

## Short sample code

Install the `stack-fill` NPM package.

```bash
$ npm install stack-fill
```

### Assign filler space in the root

`stack-fill` required the root component exact space.
For mostly example, we can specify `width` and `height` to allocate space throughout entire viewport:

```tsx
export const App = () => {
  return (
    {/* Required the root component exact space */}
    <Box width="100vw" height="100vh">

      ...

    </Box>);
};
```

Or you can apply css in React root render anchor in HTML directly:

```html
<body>
  <!-- Required the root component exact space -->
  <div id="root" style="width: 100vw; height: 100vh;"></div>
</body>
```

### Basic component stacking

The following is the simplest usage. In this example, 4 child components are placed, with the last child component taking up all the remaining space:

```tsx
export const Foo = () => {
  return (
    <StackFill>
      <Box>Will be shrinked minimum requirement size.</Box>
      <Box>Will be shrinked minimum requirement size.</Box>
      <Box>Will be shrinked minimum requirement size.</Box>
      <Box>The last component takes all remaining space.</Box>
    </StackFill>);
};
```

The last child component is the filler component.

Of course, there are 4 child components in the example above, but there can be any number of child components.

### Direction

Defaulted to `column` (up-to-down) direction.
To change `row` (left-to-right):

```tsx
export const Foo = () => {
  return (
    <StackFill direction="row">
      <Box>Will be shrinked minimum requirement size.</Box>
      <Box>Will be shrinked minimum requirement size.</Box>
      <Box>Will be shrinked minimum requirement size.</Box>
      <Box>The last component takes all remaining space.</Box>
    </StackFill>);
};
```

### To assign the filler

Default filler component is the last child.
To change it manually with `StackFiller`:

```tsx
export const Foo = () => {
  return (
    <StackFill>
      <Box>Will be shrinked minimum requirement size.</Box>
      <StackFiller>
        <Box>This component takes all remaining space.</Box>
      </StackFiller>
      <Box>Will be shrinked minimum requirement size.</Box>
      <Box>Will be shrinked minimum requirement size.</Box>
    </StackFill>);
};
```

### Dynamic filler assignment

If it is determined at runtime which child component should be the filler, it can be controlled using `isFiller`:

```tsx
export const Foo = () => {
  return (
    <StackFill>
      { items.map(item => (
        <StackFiller isFiller={item.isFiller}>  {/* Can be flagging */}
          <Box>Filled={item.isFiller}</Box>
        </StackFiller>))
      }
    </StackFill>);
};
```

----

## License

Apache-v2.
