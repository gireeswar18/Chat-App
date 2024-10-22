import ChatList from '../ChatList/Chatlist';
import UserInfo from '../userInfo/UserInfo';
import './list.css';

const List = () => {
  return (
	<div className='list'>
		<UserInfo />
		<ChatList />
	</div>
  )
}
export default List