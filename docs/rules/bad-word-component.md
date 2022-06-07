# Remind you not to use dirty names (bad-word-component)

Let Angry Developer don't name it casually because of emotion, writing code should remain calm and peaceful

## Rule Details

Examples of **incorrect** code for this rule:

```jsx
const App = () => {
  const ShitListComponent = function (){
    // * some login...
    return <div>{{ logic_content }}</div>
  }
  return (
    <Container>
      <Layout />
      <ShitListComponent />  // * bad name
    </Container>
  )
}
```

Examples of **correct** code for this rule:

```jsx
const App = () => {
  const LogicComponent = function (){
    // * some login...
    return <div>{{ logic_content }}</div>
  }
  return (
    <Container>
      <Layout />
      <LogicComponent />
    </Container>
  )
}
```