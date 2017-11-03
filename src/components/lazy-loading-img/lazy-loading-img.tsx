import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'lazy-loading-img',
  styleUrl: 'lazy-loading-img.scss',
  shadow: true
})
export class LazyLoadingImg {

  @Prop() first: string;
  @Prop() last: string;

  render() {
    return (
      <div>
        Hello, World! I'm {this.first} {this.last}
      </div>
    );
  }
}
