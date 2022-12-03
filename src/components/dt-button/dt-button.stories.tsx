// import readme from './readme.md';
import readme from './readme.mdx';

export default {
    title: 'Components/DtButton',
    component: 'dt-button',
    argTypes: {
      label: { 
        type: 'text',
        description: 'The text which is shown as label'
      },
      handleClick: { 
        action: 'onDtClick',
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

  // const MyButton = document.createElement('dt-button');
  // MyButton.label = args.label;
  // MyButton.addEventListener('onDtClick', args.handleClick );
  // return MyButton;

  return <dt-button label={args.label} onDtClick={args.handleClick}/>;
}

export const Default = Template.bind({}) as any;
Default.args = {
    label: "Example2",
};
Default.parameters = {
  docs: {
    source: {
      code: `<dt-button label="Example" onDtClick={handleClick}/>`,
      type: "code",
      // type: "dynamic",
    },
  },
};