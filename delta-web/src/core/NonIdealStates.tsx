import { NonIdealState, Spinner } from '@blueprintjs/core';
import styled from '@emotion/styled';
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

const ErrorMessageContainer = styled.div`
  padding-top: 36px;
  .bp5-heading {
    line-height: 1.4;
    word-break: keep-all;
  }
`;

export function ErrorMessage(props: { message: string, style?: CSSProperties }) {
  return <ErrorMessageContainer style={props.style}>
    <NonIdealState icon="error" title={props.message} />
  </ErrorMessageContainer>;
}
