const FAKE_STREAM = [
  {
    title: 'Someone Great'
  },
  {
    title: 'Let It Go'
  },
  {
    title: 'Royals'
  },
  {
    title: 'Aint it so'
  },
  {
    title: 'Get Lucky!!!'
  }
]

export default () => (
  <div>
    <ul>
      { FAKE_STREAM.map(item => (
        <li>{ item.title }</li>
      ))}
    </ul>

    <style jsx>{`
      li {
        border-bottom: 1px solid gray;
        list-style: none;
        padding: 1rem;
      }
      li:last-child {
        border: none;
      }
    `}</style>
  </div>
)
