const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">Anime App</span>
      <ul className="list">
        <li className="listItem">
          <img
            src="https://i.pinimg.com/originals/c0/96/3a/c0963aa67205f87962b1fdc147abd8d6.jpg"
            alt=""
            className="avatar"
          />
        </li>
        <li className="listItem">Penny</li>
        <li className="listItem">Logout</li>
      </ul>
    </div>
  );
};

export default Navbar;
