import * as React from "react";
import MarkdownComponent from "@nteract/markdown";

interface Props {
  /**
   * Markdown text.
   */
  data: string;
  /**
   * Media type. Defaults to `text/markdown`.
   * For more on media types, see: https://www.w3.org/TR/CSS21/media.html%23media-types.
   */
  mediaType: string;
};

export class Markdown extends React.Component<Props> {
  static defaultProps = {
    mediaType: "text/markdown",
    data: null
  };

  shouldComponentUpdate(nextProps: Props): boolean {
    return nextProps.data !== this.props.data;
  }

  render() {
    return <MarkdownComponent source={this.props.data} />;
  }
}
