# Component stacking and fill remains React MUI layout component

[![Project Status: WIP – Initial development is in progress, but there has not yet been a stable, usable release suitable for the public.](https://www.repostatus.org/badges/latest/wip.svg)](https://www.repostatus.org/#wip)

## NPM

|Package|NPM|
|:----|:----|
|`stack-fill`|![NPM Version](https://img.shields.io/npm/v/:stack-fill)|

---

## What is this?

Component stacking and fill remains React MUI layout component.

This is a component similar to the `Stack` component of React MUI. The difference is that the last child element in the stack takes up all remaining space (This can be changed).

It may be useful when building a multi-pane GUI, such as Electron or a managed web application.


----

## Short sample code

Install the `stack-fill` NPM package.

### Assign filler space in the root

```typescript
export const App = () => {
  return (
    {/* Required the root component exact space.
        (Or you can apply css in React root render anchor in HTML directly.)
     */}
    <Box width="100vw" height="100vh">
      {/* ... */}
    </Box>);
};
```

### Basic component stacking

```typescript
export const Foo = () => {
  return (
    <StackFill>
      <Box>Will shrinked minimum requirement size.</Box>
      <Box>Will shrinked minimum requirement size.</Box>
      <Box>Will shrinked minimum requirement size.</Box>
      <Box>The last component takes all remains spaces.</Box>
    </StackFill>);
};
```

### Direction

Defaulted to `column` (up-to-down) direction.
To change `row` (left-to-right):

```typescript
export const Foo = () => {
  return (
    <StackFill direction="row">
      <Box>Will shrinked minimum requirement size.</Box>
      <Box>Will shrinked minimum requirement size.</Box>
      <Box>Will shrinked minimum requirement size.</Box>
      <Box>The last component takes all remains spaces.</Box>
    </StackFill>);
};
```

### To assign the filler

Default filler component is the last child.
To change it manually with `StackFiller`:

```typescript
export const Foo = () => {
  return (
    <StackFill>
      <Box>Will shrinked minimum requirement size.</Box>
      <StackFiller>
        <Box>Thiscomponent takes all remains spaces.</Box>
      </StackFiller>
      <Box>Will shrinked minimum requirement size.</Box>
      <Box>Will shrinked minimum requirement size.</Box>
    </StackFill>);
};
```

----

## License

Apache-v2.
