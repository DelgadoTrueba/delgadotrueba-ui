import { Component, Prop, h, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'dt-button',
  styleUrl: 'dt-button.css',
  shadow: true,
})
export class DtButton {
  @Event() dtClick: EventEmitter<void>;

  @Prop() label: string;

  handleClick(): void {
    this.dtClick.emit();
  }

  render(): JSX.Element {
    return <button onClick={this.handleClick.bind(this)}>{this.label}</button>;
  }
}
