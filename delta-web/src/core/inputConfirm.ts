export function confirmDelete(): boolean {
    const result = prompt('정말 삭제하시겠습니까? 삭제하려면 "delete"를 정확하게 입력하세요.');
    if (result !== 'delete') {
        alert('삭제되지 않았습니다.');
        return false;
    }
    return true;
}
