import { Component, Prop, Element, State } from '@stencil/core';

@Component({
  tag: 'lazy-loading-img',
  styleUrl: 'lazy-loading-img.scss',
  shadow: true
})
export class LazyLoadingImg {
  @Element() lazyLoadingImgEl: HTMLElement;

  @Prop() src: string;
  @Prop() alt: string;

  @State() full: boolean;

  private io: IntersectionObserver;

  componentWillLoad() {
    this._init();
  }

  componentDidLoad() {
    this.io.observe(this.lazyLoadingImgEl);
  }

  componentDidUnload() {
    this.io.unobserve(this.lazyLoadingImgEl);
  }

  private _init() {
    this.io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if(entry['isIntersecting'] && !this.full) {
          this.full = true;
        }
      });
    });
  }

  render() {
    return (
      <div>
        {this.full &&
          <img src={this.src} alt={this.alt} />
        }
      </div>
    );
  }
}
