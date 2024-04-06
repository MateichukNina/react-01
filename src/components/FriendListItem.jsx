export default function FriendListItem({ friend }) {
  return (
    <div className="item">
      <span
        className={friend.isOnline ? 'status online' : 'status offline'}
      ></span>
      <img
        className="avatar"
        src={friend.avatar}
        alt={friend.name}
        width="48"
      />
      <p className="name">{friend.name}</p>
    </div>
  );
}
