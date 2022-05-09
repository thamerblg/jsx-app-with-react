import "./style.css";
import imageInSrc from "./imageInSrc.png";
import reactInSeconds from "./reactInSeconds.mp4";

function App() {
  return (
    <>
      <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>
        <h1 class="title red">Your name here</h1>

        <br />

        <img src={imageInSrc} alt="imageInSrc" className="photo" />

        <br />

        <img src="/imageInPublic.jpg" alt="imageInPublic" className="photo" />
      </div>

      <video width="320" height="240" controls>
        <source src={reactInSeconds} type="video/mp4" />
      </video>
    </>
  );
}

export default App;
