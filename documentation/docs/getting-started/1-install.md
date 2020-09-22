---
id: install
title: Getting Started
sidebar_label: Getting Started
---

The main objective of this library is to declare your layout as declarative as possible, while using react props instead of classnames.

For example, to use the column on Bulma, you will write something like this:

```jsx
<div className="columns">
  <div className="column is-4">Left Column</div>
  <div className="column">Middle Column</div>
  <div className="column is-4">Left Column</div>
</div>
```

With this library the same code will be this:

```jsx
<Columns>
  <Columns.Column size={4}>Left Column</Columns.Column>
  <Columns.Column>Middle Column</Columns.Column>
  <Columns.Column size={4}>Left Column</Columns.Column>
</Columns>
```

## Installation

The easiest way to install React Bulma Components is using npm 

```bash
npm install --save -E react-bulma-components
```

or yarn.

```bash
yarn add react-bulma-components
```

## Configuration

Currently there are two different ways to use this library depending of your needs.

- [Basic Configuration](./basic-configuration): The easiest way to start with the library. This does not include the bulma styles. you are responsable for adding the styles to your site.

- [Advanced Configuration](./advanced-configuration): If you want more control over bulma, change the default variables or simple treeshaking of the styles imported.