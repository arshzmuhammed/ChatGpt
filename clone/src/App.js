//clone//
import './App.css';
import chatLogo from './assets/chatgpt.svg';
import addBtn from './assets/add-30.png';
import MesageIcon from './assets/message.svg';
import home from './assets/home.svg';
import saved from './assets/bookmark.svg';
import rocket from './assets/rocket.svg';
import send from './assets/send.svg';
import userIcon from './assets/user-icon.png';
import gptImgLogo from './assets/chatgptLogo.svg';
import { sendMsgToOpenAI } from './openai';
import {useState} from 'react';
function App() {
  const [input,setInput] = useState('')
  const handleSend = async ()=>{
    const res = await sendMsgToOpenAI(input)
    console.log(res)
  }
  return (
    <div className="App">
     <div className="sidebar">
       <div className="upperSide">
            <div className="upperSideTop">
              <img src={chatLogo}  alt="" className="logo" />
              <span className="brand">ChatGpt</span>
              </div>
              <button className="mdBtn"><img src={addBtn} alt="New Chat" className="addBtn" />New Chat</button>
              <div className="upperSideBottom">
                <button className="query"><img src={MesageIcon} alt="Query" />What is Programming ?</button>
                <button className="query"><img src={MesageIcon} alt="Query" />How to use an API ?</button>
              </div>
            
       </div>
       <div className="lowerSide">
          <div className="listItems"><img src={home} alt="" className="listitemsimg" />Home</div>
          <div className="listItems"><img src={saved} alt="" className="listitemsimg" />Saved</div>
          <div className="listItems"><img src={rocket} alt="" className="listitemsimg" />Upgrade to pro</div>
       </div>
     </div>
     <div className="main">
       <div className="chats">
         <div className="chat">
          <img src={userIcon} alt="" className="ChatImg" /><p className="txt">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati incidunt vitae voluptatem eligendi, aliquam ut vel eos ea reiciendis minima!</p>
         </div>
         <div className="chat bot">
          <img src={gptImgLogo} alt="" className="ChatImg" /><p className="txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi harum reprehenderit iure dolor veniam unde illo, alias nobis molestiae quos odit mollitia at? Maxime error corporis dignissimos voluptatibus aperiam vel autem at ullam quis molestias inventore eligendi asperiores officia, temporibus ea in ipsam eos. Architecto asperiores quia, deserunt ducimus quisquam ipsum maiores autem dicta nisi nulla magni at provident tenetur iure consequuntur possimus nemo soluta adipisci mollitia obcaecati suscipit cum neque. Et voluptatem neque nam quas tempore. Tenetur, sed eos numquam omnis blanditiis obcaecati rerum odio animi illo voluptatum est nam cumque, ab, ratione laboriosam dolor delectus et excepturi quia!</p>
         </div>
       </div>
       <div className="chatFooter">
        <div className="inp">
          <input type="text" name="" id="" placeholder="Send a message..."  value={input} onChange={(e)=>{setInput(e.target.value)}} /><button className="send" onClick={handleSend}><img src={send} alt="Send" /></button>
        </div>
        <p>ChatGPT can make mistakes. Consider checking important information.</p>
       </div>
     </div>
    </div>
  )
}

export default App;
