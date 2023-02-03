<img src="https://capsule-render.vercel.app/api?type=waving&color=4665F9&height=300&section=header&text=민희언즈%20팀%20프로젝트&fontSize=55&fontAlignY=35&desc=DigitalZone의%20블록체인%20기반%20사이트%20제작&descAlign=50&descAlignY=53&fontColor=FFFFFF" />

# :wave: 소개 및 개요

- 프로젝트 기간 : 2023.01.27 ~ 2023.02.03

- 프로잭트 주제 : 리액트 라이브러리를 활용한 반응형 웹 앱 구현

- 프로젝트 주요 기능 :

1.  상단 탭 메뉴 : 메뉴 별 클릭 이동 // react router dom

2.  중단 배너 : 무한 슬라이드, 외부 링크 이동 // swiper-slide, Link

3.  메인 콘텐츠 : 리스트형 뷰, 무한 스크롤, 좌우 슬라이드 // swiper-slide, useInview, axios, JSON

4.  기타 : 백투탑 버튼, 알럿 팝업 // material-ui, Swal

# :hammer_and_wrench: 기술 스택

**Languages**

<img src="https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=HTML5&logoColor=white"/> <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=CSS3&logoColor=white"/> <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=JavaScript&logoColor=white"/>

**Libraries**

<img src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=React&logoColor=white"/> <img src="https://img.shields.io/badge/React%20Router-CA4245?style=flat&logo=React%20Router&logoColor=white"/> <img src="https://img.shields.io/badge/React%20Hook%20Form-EC5990?style=flat&logo=React%20Hook%20Form&logoColor=white"/>

**Styles**

<img src="https://img.shields.io/badge/Sass-CC6699?style=flat&logo=Sass&logoColor=white"/> <img src="https://img.shields.io/badge/MUI-007FFF?style=flat&logo=MUI&logoColor=white"/> \>

**Tools**

<img src="https://img.shields.io/badge/Figma-F24E1E?style=flat&logo=Figma&logoColor=white"/> <img src="https://img.shields.io/badge/Notion-000000?style=flat&logo=Notion&logoColor=white"/> <img src="https://img.shields.io/badge/Visual%20Studio%20Code-007ACC?style=flat&logo=Visual%20Studio%20Code&logoColor=white"/> <img src="https://img.shields.io/badge/GitHub-181717?style=flat&logo=GitHub&logoColor=white"/>

**Database**

<img src="https://img.shields.io/badge/jQuery-0769AD?style=flat-square&logo=jQuery&logoColor=white"/>

# :package: 프로젝트 구조

```
📦Digitalzone
src
 ┣ Components
 ┃ ┣ Block
 ┃ ┃ ┣ BlockChart
 ┃ ┃ ┣ BlockInfo
 ┃ ┃ ┣ Block.jsx
 ┃ ┃ ┣ Block.scss
 ┃ ┃ ┗ BlockTable.jsx
 ┃ ┣ CommonComponents
 ┃ ┃ ┣ Modal
 ┃ ┃ ┗ Page
 ┃ ┣ Context
 ┃ ┃ ┗ ThemeContext.js
 ┃ ┣ Dashboard
 ┃ ┃ ┣ DashboardInfo
 ┃ ┃ ┣ Dashboard.jsx
 ┃ ┃ ┗ Dashboard.scss
 ┃ ┣ Footer
 ┃ ┃ ┣ Footer.jsx
 ┃ ┃ ┗ Footer.scss
 ┃ ┣ Header
 ┃ ┃ ┣ Header_rightWrap
 ┃ ┃ ┣ Header.jsx
 ┃ ┃ ┗ Header.scss
 ┃ ┣ MenuTab
 ┃ ┃ ┣ MenuTab.jsx
 ┃ ┃ ┗ MenuTab.scss
 ┃ ┣ Node
 ┃ ┃ ┣ Chart.jsx
 ┃ ┃ ┣ Chart.scss
 ┃ ┃ ┣ Node.jsx
 ┃ ┃ ┣ Node.scss
 ┃ ┃ ┣ NodeDetail.jsx
 ┃ ┃ ┣ NodeDetail.scss
 ┃ ┃ ┣ Refresh.jsx
 ┃ ┃ ┣ Refresh.scss
 ┃ ┃ ┣ Tab.jsx
 ┃ ┃ ┗ Tab.scss
 ┃ ┣ NotFound
 ┃ ┃ ┣ NotFound.jsx
 ┃ ┃ ┗ NotFound.scss
 ┃ ┣ Service
 ┃ ┃ ┣ ServiceChart
 ┃ ┃ ┣ ServiceInfo
 ┃ ┃ ┣ Service.jsx
 ┃ ┃ ┣ Service.scss
 ┃ ┃ ┗ ServiceTable.jsx
 ┃ ┣ Transaction
 ┃ ┃ ┣ TranInfo
 ┃ ┃ ┣ TranMain
 ┃ ┃ ┣ Transaction.jsx
 ┃ ┃ ┗ Transaction.scss
 ┃ ┣ User
 ┃ ┃ ┣ FixedComponents
 ┃ ┃ ┃ ┣ UserAdd
 ┃ ┃ ┃ ┣ UserList
 ┃ ┃ ┃ ┣ UserLogin
 ┃ ┃ ┃ ┣ UserMyPage
 ┃ ┃ ┃ ┗ UserUpdate
 ┃ ┃ ┣ UserPageComponents
 ┃ ┃ ┃ ┣ UserAdd
 ┃ ┃ ┃ ┣ UserList
 ┃ ┃ ┃ ┣ UserLogin
 ┃ ┃ ┃ ┣ UserMyPage
 ┃ ┃ ┃ ┗ UserUpdate
 ┃ ┃ ┣ User.jsx
 ┃ ┃ ┗ User.scss
 ┃ ┗ Root.jsx
 ┣ Recoil
 ┃ ┣ Atom.jsx
 ┃ ┗ Selector.jsx
 ┣ style
 ┃ ┣ Globalstyle.js
 ┃ ┗ theme.js
 ┣ App.jsx
 ┣ App.scss
 ┣ firebase.js
 ┣ index.css
 ┗ index.js
```

# :card_index_dividers: 데이터 구조

<img src="https://github.com/jeongminhui/Digitalzone/blob/main/public/assets/data_structure_2.png" width=800 />

# :crayon: Flowchart

- 관리자 / 사용자
  <img src="https://github.com/jeongminhui/Digitalzone/blob/main/public/assets/flowchartuser.png" width=800 />

- 블록 / 트랜잭션 / 노드 / 서비스
  <img src="https://github.com/jeongminhui/Digitalzone/blob/main/public/assets/flowchartbtns.png" width=800 />

# :pushpin: 역할 분담

<img src="https://github.com/jeongminhui/Digitalzone/blob/main/public/assets/distributing_roles.png" width=800 />

# :date: 개발 일정

<img src="https://github.com/jeongminhui/Digitalzone/blob/main/public/assets/development_process.png" width=800 />

# :computer: Demo
