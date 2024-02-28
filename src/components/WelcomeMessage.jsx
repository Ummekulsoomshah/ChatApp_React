function WelcomeMessage({fetchPost}) {
  return (
  <>
  <center className="msg">

  <h1>Welcome to the site!</h1>
  <button type="button" class="btn btn-primary" onClick={fetchPost}>Get posts</button>
  </center>
  </>
  );
}
export default WelcomeMessage;