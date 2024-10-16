import React from 'react'
import {useParams} from 'react-router-dom'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

const Room = () => {
  const {id} = useParams();
  let myMeeting = async (element) => {
    // generate Kit Token
     const appID = 970449474;
     const serverSecret = "55f94e707c41221fc0aa71c34d8ea529";
     const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, id, Date.now().toString(), "Enter Name...");

   
    // Create instance object from Kit Token.
     const zp = ZegoUIKitPrebuilt.create(kitToken);
     // start the call
     zp.joinRoom({
       container: element,
       sharedLinks: [
         {
           name: 'Personal link',
           url:
           `https://cloud-chat-ten.vercel.app/room/${id}`
         },
       ],
       scenario: {
         mode: ZegoUIKitPrebuilt.GroupCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
       },
     });

   
 };

  return (
    <>
     <div
      className="myCallContainer"
      ref={myMeeting}
      style={{ width: '100vw', height: '100vh' }}
    ></div>
    </>
  )
}

export default Room