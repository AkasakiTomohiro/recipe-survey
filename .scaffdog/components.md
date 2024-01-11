---
name: 'components'
root: 'src/components'
output: '**/*'
ignore: ['__snapshots__']
questions:
  storyName: 'Story name. (e.g. Button, Header)'
  subLayer:
    message: 'Generate Sub Layer. (e.g. Header, XXX/YYY)'
    initial: '/'
---

# Variables

- Component: `{{ inputs.storyName | pascal }}`
- SubLayer: `{{ inputs.subLayer | pathConvert }}{{ Component }}/`

# `{{ SubLayer }}index.ts`

```typescript
export * from "./types";
export * from "./{{ Component }}";
```


# `{{ SubLayer }}{{ Component }}.stories.tsx`

```typescript
import { {{ Component }} } from './{{ Component }}';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof {{ Component }}> = {
  title : 'RecipeSurvey/components/{{ SubLayer }}{{ Component }}',
  component: {{ Component }}
};

export default meta;

type Story = StoryObj<typeof {{ Component }}>;

export const Primary: Story = {
  args: {}
};

```

# `{{ SubLayer }}types/index.ts`

```typescript
export interface I{{ Component }}Props {
}
```

# `{{ SubLayer }}{{ Component }}.tsx`

```typescript

import { I{{ Component }}Props } from "./types";

/**
 * Primary UI component for user interaction
 */
export const {{ Component }} = (props: I{{ Component }}Props): JSX.Element => {

  return (
    <div>

    </div>
  );
};

```
