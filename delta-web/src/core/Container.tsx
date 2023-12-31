import styled from '@emotion/styled';

const DefaultContainer = styled.div`
padding-left: 20px;
padding-right: 20px;
padding-top: 20px;
padding-bottom: 40px;
`;

function Container(props: {
  reducedTopPadding?: boolean;
  noTopPadding?: boolean;
  children: React.ReactNode;
  id?: string;
}) {
  if (props.noTopPadding) {
    return <DefaultContainer id={props.id} style={{ paddingTop: 0 }}>
      {props.children}
    </DefaultContainer>;
  }
  if (props.reducedTopPadding) {
    return <DefaultContainer id={props.id} style={{ paddingTop: '5px' }}>
      {props.children}
    </DefaultContainer>;
  }
  return <DefaultContainer id={props.id}>
    {props.children}
  </DefaultContainer>;
}

export default Container;
