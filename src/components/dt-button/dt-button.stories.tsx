// import readme from './readme.md';
import readme from './readme.mdx';

export default {
    title: 'Components/DtButton',
    component: 'dt-button',
    argTypes: {
      dtClick: { 
        control: false 
      },
    },
    parameters: {
      docs: {
        page: readme,
      },
  },
};


const Template = (args: any) => {
  // console.log({args})

  const handleClick = ($event: CustomEvent) => {
    args.onDtClick($event)
  }
  // const MyButton = document.createElement('dt-button');
  // MyButton.label = args.label;
  // MyButton.addEventListener('onDtClick', args.handleClick );
  // return MyButton;

  return <dt-button label={args.label} onDtClick={handleClick}/>;
}

export const Default = Template.bind({}) as any;
Default.args = {
    label: "Example2",
};