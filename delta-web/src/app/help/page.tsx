import PageHeader from '@/core/PageHeader';
import { ReactNode } from 'react';

function Description({ children }: { children: ReactNode }) {
  return <li className='mb-4 leading-[1.5] keep-all'>{children}</li>;
}

function HelpPage() {
  return <div className="container">
    <PageHeader>도움말</PageHeader>
    <h2>기능 설명</h2>
    <ul>
      <Description>로그인 페이지: 시스템은 관리자 사용자와 일반 사용자를 구분하여 관리합니다. 관리자 사용자의 로그인 정보는 최초 설치 시점에 설정으로 직접 지정되며, 일반 사용자의 로그인 정보는 관리자 사용자에 의하여 생성되고 데이터베이스를 이용하여 관리됩니다.</Description>
      <Description>시작 페이지: 3차원 모델 처리 시 사용 빈도가 높은 기능으로 바로 이동할 수 있습니다.</Description>
      <Description>사용자 설정 페이지: 사용자 설정 페이지에서는 사용자 암호를 변경할 수 있으며, 추후 추가되는 사용자 단위 설정 기능이 이 페이지에서 제공됩니다.</Description>
      <Description>시스템 설정 페이지: 시스템 설정 페이지에서는 처리기 노드가 실패한 것으로 처리할 시간을 확인 또는 변경할 수 있으며, 추후 추가되는 시스템 설정 기능이 이 페이지에서 제공됩니다.</Description>
      <Description>애셋 추가 페이지: 애셋 업로드 및 애셋 추가 작업을 수행할 수 있습니다.</Description>
      <Description>애셋 목록 페이지: 애셋 목록 확인, 애셋 검색, 애셋 상세 조회 페이지로 이동하는 작업을 수행할 수 있습니다.</Description>
      <Description>애셋 상세 조회 페이지: 애셋 상세 정보를 확인, 애셋 번호를 이용한 애셋 상세 조회, 애셋 뷰어 페이지로 이동하는 작업을 수행할 수 있습니다.</Description>
      <Description>애셋 뷰어 페이지: 애셋을 애셋의 미디어 형식, 애셋 유형에 따라 뷰어를 이용하여 확인, 애셋 번호를 이용한 다른 애셋 보기 작업을 수행할 수 있습니다.</Description>
      <Description>애셋 유형 추가 페이지: 애셋 유형을 추가할 수 있습니다. 애셋 유형의 예에는 3차원 모델, 렌더링된 이미지, 3차원 모델 속성 등이 있습니다.</Description>
      <Description>애셋 유형 목록 페이지: 애셋 유형 목록 확인, 애셋 유형 상세 조회 페이지로 이동하는 작업을 수행할 수 있습니다.</Description>
      <Description>애셋 유형 상세 조회 페이지: 애셋 유형 상세 정보를 확인, 애셋 유형 번호를 이용한 애셋 유형 상세 조회 작업을 수행할 수 있습니다.</Description>
      <Description>뷰어 목록 페이지: 뷰어는 애셋 내용을 입력받아 사용자 웹 브라우저에 시각화하는 것을 주요 기능으로 하는 소프트웨어 구성 요소입니다. 뷰어 목록 페이지에서는 시스템이 제공하는 모든 뷰어와 각 뷰어가 처리할 수 있는 미디어 형식, 애셋 유형을 확인할 수 있습니다.</Description>
      <Description>작업 추가 페이지: 작업을 추가할 수 있습니다. 본 시스템에서 애셋을 처리기로 처리하는 모든 과정은 작업으로 생성 및 처리된다.</Description>
      <Description>작업 목록 페이지: 작업 목록을 확인할 수 있습니다. 작업에는 여러 작업 실행 및 작업 실행 상태가 있을 수 있으며, 단일 작업에 여러 작업 실행이 있는 경우, 시스템은 가장 적절한 작업 실행의 작업 실행 상태를 표시한다.</Description>
      <Description>작업 상세 조회 페이지: 작업 상세 조회, 작업 번호를 이용한 작업 상세 조회 작업을 수행할 수 있습니다.</Description>
      <Description>작업 유형 목록 페이지: 작업 유형 목록을 확인할 수 있습니다. 작업 유형의 예에는 3차원 모델 렌더링, 3차원 모델 정보 확인, 3차원 모델 크기 구하기 등이 있습니다.</Description>
      <Description>작업 유형 상세 조회 페이지: 작업 유형 상세 조회, 작업 유형 번호를 이용한 작업 유형 상세 조회 작업을 수행할 수 있습니다.</Description>
      <Description>처리기 노드 목록 페이지: 처리기 노드는 실제 애셋의 내용을 다운로드받아 작업의 내용에 맞게 계산한 다음, 결과 애셋을 시스템에 추가하고 작업 실행을 완료된 것으로 표시합니다. 처리기 노드는 사용자가 직접 추가하지 않으며, API 키를 이용하여 처리기 노드가 스스로를 직접 시스템에 등록합니다.</Description>
      <Description>처리기 노드 상세 조회 페이지: 처리기 노드 상세 조회, 처리기 노드 번호를 이용한 처리기 노드 상세 조회 작업을 수행할 수 있습니다.</Description>
      <Description>암호화 키 추가 페이지: 암호화 키를 추가할 수 있습니다. 암호화 키를 이용하여 오브젝트 저장소에는 애셋을 256 비트 암호화된 상태로 저장하고, 처리할 때는 평문 상태로 처리할 수 있습니다. 암호화 기능을 이용하여 민감한 3차원 모델을 보호하고, 관련 규제가 있는 경우 준수할 수 있습니다.</Description>
      <Description>암호화 키 목록 페이지: 암호화 키 목록을 확인할 수 있으며, 암호화 키를 활성 또는 비활성으로 표시할 수 있습니다.</Description>
      <Description>암호화 키 상세 조회 페이지: 암호화 키 상세 조회, 암호화 키 번호를 이용한 암호화 키 상세 조회 작업을 수행할 수 있습니다.</Description>
      <Description>모니터링 대시보드 페이지: 전체 시스템에서 준 실시간 수집된 수치를 모니터링할 수 있습니다.</Description>
      <Description>오브젝트 저장소 모니터 페이지: 오브젝트 저장소 관련 수치를 중심으로 시스템을 모니터링할 수 있습니다.</Description>
      <Description>처리기 노드 모니터 페이지: 처리기 노드 관련 수치를 중심으로 시스템을 모니터링할 수 있습니다.</Description>
      <Description>작업 모니터 페이지: 작업 관련 수치를 중심으로 시스템을 모니터링 할 수 있습니다.</Description>
    </ul>
  </div>;
}

export default HelpPage;
