import { Button } from '@blueprintjs/core';
import { Cell } from '@blueprintjs/table';
import styled from 'styled-components';

const CellButton = styled.span`
cursor: pointer;
color: #106ba3;
:hover {
    text-decoration: underline;
}
`;

export function renderCellButton(text: string, onClick: () => void) {
    return <Cell interactive={true}>
        <CellButton onClick={onClick}>{text}</CellButton>
    </Cell>;
}
