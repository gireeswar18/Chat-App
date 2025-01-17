import { useUserStore } from "../../lib/userStore";
import "./userInfo.css";

const UserInfo = () => {

  const {currentUser} = useUserStore();
  
  return (
    <div className="userInfo">
      <div className="user">
        <img src={currentUser.avatar || "./avatar.png"} alt="Avatar" />
        <h2>{currentUser.username}</h2>
      </div>
        <div className="icons">
          <img src="./more.png" alt="More" />
          <img src="./video.png" alt="Video" />
          <img src="./edit.png" alt="Edit" />
        </div>
    </div>
  );
};
export default UserInfo;
