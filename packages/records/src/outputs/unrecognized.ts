// Someday in the future, the notebook format or the message spec might get a new output type. We need to make sure that our
// frontends are able to have a known fallback when an output type isn't known.

type UnrecognizedType = "unrecognized";
export const UNRECOGNIZED: UnrecognizedType = "unrecognized";

// In-memory version
export interface UnrecognizedOutput {
  outputType: UnrecognizedType;
  raw: any;
};

// On disk
export interface NbformatUnrecognizedOutput {
  output_type: string; // Technically, not one of "execute_result", "display_data", "stream", or "error"
};

export function unrecognized(raw: any): Readonly<UnrecognizedOutput> {
  return Object.freeze({
    outputType: UNRECOGNIZED,
    raw
  });
}

unrecognized.fromNbformat = function fromNbformat(a: any) {
  return unrecognized(a);
};

unrecognized.fromJupyterMessage = function fromJupyterMessage(a: any) {
  return unrecognized(a);
};
