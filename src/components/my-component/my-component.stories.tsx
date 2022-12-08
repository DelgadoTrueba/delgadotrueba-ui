import readme from './readme.mdx';
import type { Components as St } from '../../components';

export default {
  title: 'Components/MyComponent',
  component: 'my-component',
  parameters: {
    docs: {
      page: readme,
    },
  },
};

const Template = (args: St.MyComponent): JSX.Element => {
  return <my-component first={args.first} last={args.last}></my-component>;
};

export const Default = Template.bind({}) as any;
Default.args = {
  first: 'Stencil',
  last: "'Don't call me a framework' JS",
};
