import React from "react";

interface Props {
  mediaType: string;
  data: string;
};

export class SVG extends React.Component<Props> {
  el: HTMLElement | null = null;
  static defaultProps = {
    mediaType: "image/svg+xml",
    data: ""
  };

  componentDidMount(): void {
    if (this.el) {
      this.el.insertAdjacentHTML("beforeend", this.props.data);
    }
  }

  shouldComponentUpdate(nextProps: Props): boolean {
    return nextProps.data !== this.props.data;
  }

  componentDidUpdate(): void {
    if (!this.el) return;
    // clear out all DOM element children
    while (this.el.firstChild) {
      this.el.removeChild(this.el.firstChild);
    }
    this.el.insertAdjacentHTML("beforeend", this.props.data);
  }

  render() {
    return (
      <div
        ref={el => {
          this.el = el;
        }}
      />
    );
  }
}
