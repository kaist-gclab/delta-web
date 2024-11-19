function CellButton(props: { onClick: () => void, children: React.ReactNode }) {
    return <span onClick={props.onClick} style={{ cursor: 'pointer', color: '#106ba3' }}>
        {props.children}
    </span>;
}

export function renderCellButton(text: string, onClick: () => void) {
    return <CellButton onClick={onClick}>{text}</CellButton>;
}
