import { Component, Prop, h, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'dt-button',
  styleUrl: 'dt-button.css',
  shadow: true,
})
export class DtButton {
  @Event() dtClick: EventEmitter<any>;
  @Prop() label: string;

  todoCompletedHandler(event: UIEvent) {
    this.dtClick.emit(event);
  }

  render() {
    return <button onClick={this.todoCompletedHandler.bind(this)}>{this.label}</button>;
  }
}