import { Component, Prop, h, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'dt-button',
  styleUrl: 'dt-button.css',
  shadow: true,
})
export class DtButton {
  
  @Event() dtClick: EventEmitter<void>;

  @Prop() label: string;

  handleClick() {
    this.dtClick.emit();
  }

  render() {
    return <button onClick={this.handleClick.bind(this)}>{this.label}</button>;
  }
}