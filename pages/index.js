import App from "../components/App";
import Stream from "../components/Stream";
import NowPlaying from "../components/NowPlaying";

export default () => (
  <div>
    <h1>PBJ</h1>

    <div className="layout">
      <Stream />
      <App />
      <NowPlaying />
    </div>

    <style jsx>{`
      .layout {
        display: flex;
      }
    `}</style>
  </div>
);
