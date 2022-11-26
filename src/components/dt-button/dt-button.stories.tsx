// import readme from './readme.md';
import readme from './readme.mdx';

export default {
    title: 'Components/DtButton',
    argTypes: {
      label: { type: 'text', description: 'The text which is shown as label' },
      onClick: { action: 'onClick' },
    },
    parameters: {
      docs: {
        page: readme,
      },
  },
};


const Template = (args: any) => {

  const handleClick = ($event: any) => {
    console.log("handleClick")
    console.log($event)
    args.onClick()
  }

  // const MyButton = document.createElement('dt-button');
  // MyButton.label = args.label;
  // MyButton.addEventListener('onDtClick', handleClick );
  // return MyButton;

  return <dt-button label={args.label} onDtClick={(ev: any) => handleClick(ev)}/>;
}

export const Default = Template.bind({}) as any;
Default.args = {
    label: "Example"
};