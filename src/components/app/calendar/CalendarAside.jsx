/*
    날짜 : 2024/11/21
    이름 : 이도영
    내용 : 프로젝트 html 작성

    추가내역
    -------------
    00.00 이름 - 내용
*/
export default function CalendarAside() {
  return (
    <div id="sidebar-container">
      {/* 사이드바 */}
      <aside className="sidebar">
        <div className="sidebar-header">
          <h2>닉네임</h2>
          <a href="#" className="search-link" id="open-modal">
            🔍 검색
          </a>
        </div>
        <nav className="menu">
          <ul>
            <li>📄 개인스캐쥴</li>
            <li>팀 프로젝트</li>
            <li>+ 추가</li>
          </ul>
        </nav>
      </aside>
    </div>
  );
}
