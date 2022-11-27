export default {
    title: 'Components/MyComponent',
    component: 'my-component'
};


const Template = (args: any) => {
  return  <my-component first={args.first} last={args.last}></my-component>
}

export const Default = Template.bind({}) as any;
Default.args = {
  first: "Stencil",
  last: "'Don't call me a framework' JS"
};