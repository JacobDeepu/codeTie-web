import { useEffect } from "react";
import { createSocketConnection } from "../utils/socket";
import { useParams } from "react-router";
import { useSelector } from "react-redux";

const Chat = () => {
  const { targetUserId } = useParams();
  const user = useSelector((store) => store.user);
  const userId = user?._id;

  useEffect(() => {
    const socket = createSocketConnection();
    socket.emit("joinChat", { userId, targetUserId });
  }, []);
  return (
    <div className="flex justify-center ">
      <div className=" rounded-md p-5 m-10 border border-base-300    lg:w-1/2 w-full ">
        <div className="avatar">
          <div className="w-8 rounded-full">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
          <h1 className="mx-5 font-bold items-center">Emma Whatson</h1>
        </div>
        <div className="grid place-content-center border-t border-base-300 h-96">
          <div className="chat chat-start absolute">
            <div className="chat-header ">
              Obi-Wan Kenobi
              <time className="text-xs opacity-50">2 hours ago</time>
            </div>
            <div className="chat-bubble">You were the Chosen One!</div>
            <div className="chat-footer opacity-50">Seen</div>
          </div>
        </div>
        <div className="bottom-0 ">
          <input
            type="text"
            placeholder="Type here"
            className="input input-primary w-5/6"
          />
          <button className="btn btn-primary mx-3">Send</button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
