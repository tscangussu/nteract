import * as React from "react";
import Ansi from "ansi-to-react";

interface Props {
  data: string;
  mediaType: string;
};

export const Plain = (props: Props) => (
  <pre>
    <Ansi linkify={false}>{props.data}</Ansi>
  </pre>
);

Plain.defaultProps = {
  mediaType: "text/plain"
};
