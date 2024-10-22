import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";
import { useChatStore } from "../../lib/chatStore";
import { auth, db } from "../../lib/firebase";
import { useUserStore } from "../../lib/userStore";
import "./details.css";

const Details = () => {
  const { chatId, user, isCurrentUserBlocked, isReceiverBlocked, changeBlock } =
    useChatStore();
  const { currentUser } = useUserStore();

  const handleBlock = async () => {
    if (!user) return;

    const userDocRef = doc(db, "users", currentUser.id);

    try {
      await updateDoc(userDocRef, {
        blocked: isReceiverBlocked ? arrayRemove(user.id) : arrayUnion(user.id),
      });
      changeBlock();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="details">
      <div className="user">
        <img src={user?.avatar || "./avatar.png"} alt="avatar" />
        <h2>{user?.username || "Unknown User"}</h2>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      <div className="info">
        <div className="option">
          <div className="title">
            <span>Chat Settings</span>
            <img src="./arrowUp.png" alt="up" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Privacy & Help</span>
            <img src="./arrowUp.png" alt="up" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared Photos</span>
            <img src="./arrowDown.png" alt="down" />
          </div>

          <div className="photos">
            <div className="photoItem">
              <div className="photoDetail">
                <img
                  src="https://th.bing.com/th/id/OIP.XvScO1EgPiwghgX3Umh-CwHaE6?w=265&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                  alt="image"
                />
                <span>abc.png</span>
              </div>
              <img src="./download.png" alt="download" className="icon" />
            </div>
          </div>

          <div className="photos">
            <div className="photoItem">
              <div className="photoDetail">
                <img
                  src="https://th.bing.com/th/id/OIP.XvScO1EgPiwghgX3Umh-CwHaE6?w=265&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                  alt="image"
                />
                <span>abc.png</span>
              </div>
              <img src="./download.png" alt="download" className="icon" />
            </div>
          </div>
        </div>

        <div className="option">
          <div className="title">
            <span>Shared Files</span>
            <img src="./arrowUp.png" alt="up" />
          </div>
        </div>
      </div>
      <div className="btns">
        <button onClick={handleBlock}>
          {isCurrentUserBlocked
            ? "You are Blocked!"
            : isReceiverBlocked
            ? "User blocked"
            : "Block User"}
        </button>
        <button className="logout" onClick={() => auth.signOut()}>
          Log Out
        </button>
      </div>
    </div>
  );
};
export default Details;
