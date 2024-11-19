import { NonIdealState, Spinner } from '@blueprintjs/core';
import { CSSProperties } from 'react';

export function Loading(props: { style?: CSSProperties }) {
  const style = {
    paddingTop: '36px',
    ...props.style
  };

  return <div style={style}>
    <Spinner />
  </div>;
}

function ErrorMessageContainer(props: { children: React.ReactNode, style?: CSSProperties }) {
  return <div style={{
    paddingTop: '36px',
    lineHeight: '1.4',
    wordBreak: 'keep-all',
    ...props.style
  }}>
    {props.children}
  </div>;
}

export function ErrorMessage(props: { message: string, style?: CSSProperties }) {
  return <ErrorMessageContainer style={props.style}>
    <NonIdealState icon="error" title={props.message} />
  </ErrorMessageContainer>;
}
