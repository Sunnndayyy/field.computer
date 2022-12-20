import React, {useState} from "react";



export default function App() {
  const [showMore, setShowMore] = useState(false);
  
  return (
    <div className="grid justify-items-center content-start">
      <h1 class="field">field</h1>
      <div className="h-4"></div>
      <h2 className="w-60">a calm technology</h2>
      <div className="h-8"></div>
      <h2 className="w-60">this is a blogging platform where you own your content forever, online and offline </h2>
      <div className="h-8"></div>
      <h2 className="w-60">home for the pages of your mind</h2>
      <img src="https://www.dropbox.com/s/6zsbhwgqe58egqw/Field%20demo.gif?raw=1" alt="field demo" className="pt-8 pl-14"></img>
      <div className="h-8"></div>
      <h2 className="w-60">no ads</h2>
      <div className="h-8"></div>
      <h2 className="w-60">no censorship</h2>
      <div className="h-8"></div>
      <div className="w-60">
        <button id="moreBtn" onClick={()=>setShowMore(!showMore)} className="font-bold">
          {showMore === true ? '- more' : '+  more'}
        </button>
        {showMore && <div>
          <div className="h-8"></div>
          <p className="w-60">
            field is on a path to decentralisation, meaning once fully established, users can propose changes and updates to the platform and vote on those proposals eg. new capabilities, updated user experience or electing governance members for protecting core values of the user base
            </p>
            <div className="h-8"></div>
            <p className="w-60">
              if you don’t like field.computer your field blog is built on a ‘home file’ (an offline file containing the total information of a webpage) simply save your blog offline and move to another ‘home file’ supporting platform or enjoy it from the privacy of a device with no internet
            </p>
            <div className="h-8"></div>
            <img src="https://www.dropbox.com/s/y2h3ovibsmzanps/field.computer.png?raw=1" alt="no one lives here" className="w-48"></img>
            <p className="w-32 text-xs pt-1">"no one lives here"</p>
          </div>}
      </div>
      <div className="h-96"></div>
      
    </div>

    
  );
}