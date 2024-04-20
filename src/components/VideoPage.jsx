import React, { useEffect, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { APP_ID, SERVER_SECRET } from "./constant";

const VideoPage = () => {
  const { id } = useParams();
  const elementRef = useRef(null);

  useEffect(() => {
    if (!elementRef.current || !id) return;

    const roomID = id;
    const userID = id; // Replace with your actual user ID

    const myMeeting = async () => {
      const appID = APP_ID;
      const serverSecret = SERVER_SECRET;
      const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
        appID,
        serverSecret,
        roomID,
        Date.now().toString(),
        userID // Pass the user ID here
      );

      const zp = ZegoUIKitPrebuilt.create(kitToken);
      zp.joinRoom({
        container: elementRef.current,
        sharedLinks: [
          {
            name: "Copylink",
            url: `${window.location.protocol}//${window.location.host}${window.location.pathname}?roomID=${roomID}`,
          },
        ],
        scenario: {
          mode: ZegoUIKitPrebuilt.OneONoneCall,
        },
      });
    };

    myMeeting();
  }, [id]);

  return (
    <>
      <div style={{ height: "100vh", width: "100%", backgroundColor: "lightblue" }} ref={elementRef}></div>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '4rem' }}>
  <Link to='/'><button style={{ padding: '5px 5px', textAlign: 'center', backgroundColor: 'blue', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
    Home Page
  </button></Link>
</div>

    </>
  );
};

export default VideoPage;
