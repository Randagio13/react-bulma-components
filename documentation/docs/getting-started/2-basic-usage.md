---
id: basic-configuration
title: Basic Configuration
sidebar_label: Basic Configuration
sidebar_id: someSidebar
---
import Button from 'react-bulma-components/lib/components/button';

This configuration will allow you to start fast with minimum configuration but with less customization. With this configuration you are responsible for adding the bulma css.

After the installation, you need to include the already transpiled bulma css. You can start importing the component you need from the basic folder.

```jsx
import React from 'react';
import 'react-bulma-components/basic/react-bulma-components.min.css';
import { Button } from 'react-bulma-components/dist';

const App = () => (
  <div>
    <Button rounded color="primary">My Bulma button</Button>
  </div>
);
```

This code will generate this:

<Button rounded color="primary">My Bulma button</Button>
