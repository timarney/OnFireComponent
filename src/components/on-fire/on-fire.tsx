import { Component, Prop } from "@stencil/core";

@Component({
  tag: "on-fire",
  styleUrl: "on-fire.scss"
})
export class OnFire {
  @Prop() animated: boolean;
  @Prop() message: string;

  render() {
    let className = "font-effect-fire";

    if (this.animated) {
      className = "font-effect-fire-animation";
    }

    return (
      <div class={`${className}`}>
        {this.message}
      </div>
    );
  }
}