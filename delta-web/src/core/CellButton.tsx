import styled from '@emotion/styled';

const CellButton = styled.span`
cursor: pointer;
color: #106ba3;
:hover {
    text-decoration: underline;
}
`;

export function renderCellButton(text: string, onClick: () => void) {
    return <CellButton onClick={onClick}>{text}</CellButton>;
}
