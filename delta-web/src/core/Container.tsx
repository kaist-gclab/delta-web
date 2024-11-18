function DefaultContainer(props: {
  children: React.ReactNode;
  id?: string;
  style?: React.CSSProperties;
}) {
  return <div id={props.id}
    style={{
      paddingLeft: '20px',
      paddingRight: '20px',
      paddingTop: '20px',
      paddingBottom: '40px',
      ...props.style,
    }}>
    {props.children}
  </div>;
}

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
