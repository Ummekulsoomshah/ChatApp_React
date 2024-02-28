function Loadingspinner() {
  return (
    <>
    <center className="myspinner">


      <div class="spinner-border" style={{width: "5rem", height:"5rem", color:"blue"}} role="status">
      <span class="visually-hidden">Loading...</span>
    </div >
      <div class="spinner-grow"style={{width: "5rem", height:"5rem", color
      :"blue"}} role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
        </center>
    </>
  );
}
export default Loadingspinner;