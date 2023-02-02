import React from "react";
import "./Footer.scss";
import logo from "../../asset/imgs/logoRemoved.png";
const Footer = () => {
  return (
    <div className="footer">
      <div className="inner">
        <div className="left">
          <div className="img_container">
            <img className="img" src={logo} alt="저작권 OK 로고" />
          </div>
          <div className="row">
            <div className="row_top">
              <a className="row_top_1" href="http://www.hanteoglobal.com/">
                Company Introduction
              </a>
              <a
                className="row_top_2"
                href="https://view.officeapps.live.com/op/view.aspx?src=https://resource.hanteochart.io/qna/%ED%95%9C%ED%84%B0%EC%B0%A8%ED%8A%B8_%EB%AC%B8%EC%9D%98%EC%8B%A0%EC%B2%AD%EC%84%9C.docx"
              >
                Partnership
              </a>
            </div>
            <div className="row_bottom">
              <div className="copyright">
                Copyright ⓒ HANTEO GLOBAL, Inc. All Rights Reserved
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="lang_select_box mo">
            <select>
              <option value="ko">ko</option>
              <option value="en">en</option>
              <option value="es">es</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
