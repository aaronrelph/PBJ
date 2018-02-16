import Main from '../components/main'
import Stream from '../components/stream'

export default () => (
  <div>
    <h1>PBJ</h1>

    <div className="layout">
      <Stream />
      <Main />
    </div>

    <style jsx>{`
      .layout {
        display: flex;
      }
    `}</style>
  </div>
)
