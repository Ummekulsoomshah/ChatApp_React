function WelcomeMessage({fetchPost}) {
  return (
  <>
  <center className="msg">

  <h1>Welcome to the site!</h1>
  <button onClick={fetchPost}>Get post</button>
  </center>
  </>
  );
}
export default WelcomeMessage;