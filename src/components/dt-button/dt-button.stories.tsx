// import readme from './readme.md';
// import readme from './readme.mdx';

export default {
    title: 'Components/DtButton',
    component: 'dt-button',
    argTypes: {
      label: { 
        type: 'text',
        description: 'The text which is shown as label'
      },
      dtClick: { 
        action: 'onClick',
        control: false 
      },
    },
  //   parameters: {
  //     docs: {
  //       page: readme,
  //     },
  // },
};


const Template = (args: any) => {

  const handleClick = ($event: any) => {
    args.dtClick($event)
  }

  // const MyButton = document.createElement('dt-button');
  // MyButton.label = args.label;
  // MyButton.addEventListener('onDtClick', handleClick );
  // return MyButton;

  return <dt-button label={args.label} onDtClick={handleClick}/>;
}

export const Default = Template.bind({}) as any;
Default.args = {
    label: "Example"
};