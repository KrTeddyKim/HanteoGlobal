import React from 'react';
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';
import "./HeaderNav.scss";

const HeaderNav = () => {

    // 메뉴 카테고리 클릭(차트 제외)
    const clickHandler = (e) => {
        e.preventDefault();
        Swal.fire({
          text: "후즈팬 App에서 사용할 수 있는 기능입니다 ⭐️",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#DA3849",
          cancelButtonColor: "#30A64A",
          confirmButtonText: "App 다운로드",
          cancelButtonText: "취소",
        }).then((result) => {

        // App 다운로드 클릭
          if (result.isConfirmed) {
            window.location.href = "https://play.google.com/store/apps/details?id=com.hanteo.whosfanglobal&hl=ko&gl=US"
          } 
        // 취소 또는 외부 영역 클릭  
          else {
            Swal.fire({
              icon: "error",
              text: "취소되었습니다",
              showConfirmButton: false,
              timer: 2000,
            });
          }
        });
      };
    
    return (
        <div className='header_navbar'>
            <div className='inner'>
                <Link className='chart nav_item' to="/">차트</Link>
                <Link className='whook nav_item' to="/whook" onClick={clickHandler}>Whook</Link>
                <Link className='event nav_item' to="/event" onClick={clickHandler}>이벤트</Link>
                <Link className='news nav_item' to="/news" onClick={clickHandler}>뉴스</Link>
                <Link className='store nav_item' to="/store" onClick={clickHandler}>스토어</Link>
                <Link className='charge nav_item' to="/charge" onClick={clickHandler}>충전소</Link>
            </div>
        </div>
    );
};

export default HeaderNav;