import { Component, Prop } from '@stencil/core';


@Component({
  tag: 'on-fire',
  styleUrl: 'on-fire.scss'
})
export class OnFire {

  @Prop() first: string;

  @Prop() last: string;

  @Prop() message: string;

  render() {
    return (
      <div class="font-effect-fire-animation">
        {this.message} {this.first} {this.last} 🔥
      </div>
    );
  }
}



