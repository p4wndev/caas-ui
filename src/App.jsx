// import { useState } from 'react'
import './App.css'
import userIcon from './assets/userIcon.png'
import ctuIcon from './assets/ctuIcon.png'

function App() {
  return (
    <>
    <div className="App">
      <div className="sideBar">
        <div className="upperSide">

          <div className="upperSideTop">
            <img className="Logo" src={ctuIcon}/>
            <div className="upperSideTopBrand">
              <span className="brand">CAAS</span>
              <p>Hệ Thống Tư Vấn Tuyển Sinh</p>
            </div>
            
          </div>
          <button className="midBtn"><i className="ri-add-line"></i>Cuộc hội thoại mới</button>

          <div className="upperSideBottom">
            <button className="query"><i className="ri-chat-4-line"></i>Gợi ý 1...</button>
            <button className="query"><i className="ri-chat-4-line"></i>Gợi ý 2...</button>
          </div>
        </div>
        <div className="lowerSide">
          <div className="listItems"><button className="bottomBtn"><i className="ri-home-fill"></i>Trang Chủ</button></div>
          <div className="listItems"><button className="bottomBtn"><i className="ri-settings-fill"></i>Cài Đặt</button></div>
        </div>
      </div>
      <div className="main">
        <div className="mainChat">
        <div className="chats">
          <div className="chat">
            <img className="chatImg"  src={userIcon} /> <p className="txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis asperiores similique unde aut explicabo inventore voluptate odit in ipsum aspernatur?</p>
          </div>
          <div className="chat bot">
          <img className="chatImg" src={ctuIcon} /><p className="txt">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum eligendi beatae culpa voluptatum? Quidem rerum facere quisquam ducimus, iusto inventore eos, doloremque non voluptatem est, ad atque? Eos officia recusandae velit iste minus, incidunt dolorem repellendus voluptatibus quo dolore. Aut molestias maiores eveniet aperiam, dicta odio cumque? Cumque quia tempore assumenda quae. Enim quam dicta nemo aperiam, officiis hic assumenda magni dolorum quibusdam animi aliquam alias libero architecto labore reiciendis velit excepturi esse quis, optio nisi sequi. Eos cupiditate sed deserunt molestias delectus maxime ex animi debitis ad fugit, sunt temporibus, illum rem commodi beatae, ducimus corporis reprehenderit nostrum! Delectus.</p>
          </div>
          <div className="chat">
            <img className="chatImg"  src={userIcon} /> <p className="txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis asperiores similique unde aut explicabo inventore voluptate odit in ipsum aspernatur?</p>
          </div>
          <div className="chat bot">
          <img className="chatImg" src={ctuIcon} /><p className="txt">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum eligendi beatae culpa voluptatum? Quidem rerum facere quisquam ducimus, iusto inventore eos, doloremque non voluptatem est, ad atque? Eos officia recusandae velit iste minus, incidunt dolorem repellendus voluptatibus quo dolore. Aut molestias maiores eveniet aperiam, dicta odio cumque? Cumque quia tempore assumenda quae. Enim quam dicta nemo aperiam, officiis hic assumenda magni dolorum quibusdam animi aliquam alias libero architecto labore reiciendis velit excepturi esse quis, optio nisi sequi. Eos cupiditate sed deserunt molestias delectus maxime ex animi debitis ad fugit, sunt temporibus, illum rem commodi beatae, ducimus corporis reprehenderit nostrum! Delectus.</p>
          </div>
        </div>
        <div className="chatFooter">
          <div className="inp">
            <button className="files"><i className="ri-file-upload-fill"></i></button> <input type="text" placeholder="Đặt câu hỏi..." /> <button className="mic"><i className="ri-mic-fill"></i></button> <button className="send" ><i className="ri-send-plane-2-fill"></i></button> 
          </div>
        </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
