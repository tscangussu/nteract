import * as React from "react";
import * as MathJax from "@nteract/mathjax";

interface Props {
  mediaType: string;
  data: string;
};

export class LaTeX extends React.PureComponent<Props> {
  static defaultProps = {
    mediaType: "text/latex",
    data: null
  };

  render() {
    return <MathJax.Text>{this.props.data}</MathJax.Text>;
  }
}
