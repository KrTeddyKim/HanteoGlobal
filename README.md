# :wave: 소개 및 개요

- 프로젝트 기간 : 2023.01.27 ~ 2023.02.03

- 프로잭트 주제 : 리액트 라이브러리를 활용한 반응형 웹 앱 구현

- 프로젝트 주요 기능 :

  1.  상단 탭 메뉴 : 메뉴 별 클릭 이동 // react router dom

  2.  중단 배너 : 무한 슬라이드, 외부 링크 이동 // swiper-slide, Link

  3.  메인 콘텐츠 : 리스트형 뷰, 무한 스크롤, 좌우 슬라이드 // swiper-slide, useInview, axios, JSON

  4.  기타 : 백투탑 버튼, 알럿 팝업 // material-ui, Swal

* 특이 사항:

  1. 실행 명령어: $ npm run dev (메인 서버와 JSON 서버 동시 호출)
  2. 반응형 웹 앱 : 425 x 900 size 와 full size 두가지 모두 맞춤 구현

# :hammer_and_wrench: 기술 스택

**Languages**

<img src="https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=HTML5&logoColor=white"/> <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=CSS3&logoColor=white"/> <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=JavaScript&logoColor=white"/>

**Libraries**

<img src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=React&logoColor=white"/> <img src="https://img.shields.io/badge/React%20Router-CA4245?style=flat&logo=React%20Router&logoColor=white"/> <img src="https://img.shields.io/badge/React%20Hook%20Form-EC5990?style=flat&logo=React%20Hook%20Form&logoColor=white"/>

**Styles**

<img src="https://img.shields.io/badge/Sass-CC6699?style=flat&logo=Sass&logoColor=white"/> <img src="https://img.shields.io/badge/MUI-007FFF?style=flat&logo=MUI&logoColor=white"/>

**Tools**

<img src="https://img.shields.io/badge/Figma-F24E1E?style=flat&logo=Figma&logoColor=white"/> <img src="https://img.shields.io/badge/Notion-000000?style=flat&logo=Notion&logoColor=white"/> <img src="https://img.shields.io/badge/Visual%20Studio%20Code-007ACC?style=flat&logo=Visual%20Studio%20Code&logoColor=white"/> <img src="https://img.shields.io/badge/GitHub-181717?style=flat&logo=GitHub&logoColor=white"/>

**Database**

<img src="https://img.shields.io/badge/JSON-000000?style=flat-square&logo=json&logoColor=white"/>

# :package: 프로젝트 구조

```
📦Heateo
src
 ┣ Components
 ┃ ┣ Common/MUI
 ┃ ┃ ┣ BackToTopButton.jsx
 ┃ ┃ ┗ BackToTopButton.scss
 ┃ ┣ Header
 ┃ ┃ ┣ HeaderNav.jsx
 ┃ ┃ ┗ HeaderNav.scss
 ┃ ┣ MenuTab
 ┃ ┃ ┣ ChartTab
 ┃ ┃ ┃ ┣ Banner
 ┃ ┃ ┃ ┃ ┣ Banner.jsx
 ┃ ┃ ┃ ┃ ┗ Banner.scss
 ┃ ┃ ┃ ┣ Contents
 ┃ ┃ ┃ ┃ ┣Contents
 ┃ ┃ ┃ ┃ ┃ ┣ Artist.jsx
 ┃ ┃ ┃ ┃ ┃ ┣ Global.jsx
 ┃ ┃ ┃ ┃ ┃ ┗ PhysicalRecord.jsx
 ┃ ┃ ┃ ┃ ┃ ContentsApp.jsx
 ┃ ┃ ┃ ┃ ┗ ContentsApp.scss
 ┃ ┃ ┣ Event
 ┃ ┃ ┃ ┗ EvetApp.jsx
 ┃ ┃ ┣ NewsTab
 ┃ ┃ ┃ ┗ NewsApp.jsx
 ┃ ┃ ┣ StoreTab
 ┃ ┃ ┃ ┗ StoreApp.jsx
 ┃ ┃ ┣ WhookTab
 ┃ ┃ ┃ ┗ WhookApp.jsx
 ┃ ┣ Footer
 ┃ ┃ ┣ Footer.jsx
 ┃ ┃ ┗ Footer.scss
 ┃ ┗ Root.jsx
 ┣ asset
 ┃ ┣ db
 ┃ ┗ imgs
 ┣ db.json
 ┣ App.jsx
 ┣ App.scss
 ┣ index.css
 ┗ index.js
```

# :card_index_dividers: 프로젝트 구조

<img src="https://github.com/KrTeddyKim/HanteoGlobal/blob/main/public/ProjectStructure.png" width=800 />

# :computer: Demo

<img src="https://user-images.githubusercontent.com/119502221/216502594-1c6c0dec-31bf-423c-859a-a9effb136a6f.gif" width=800 />
