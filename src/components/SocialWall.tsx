const samplePosts = [
  {
    id: 1,
    handle: '@ForeverAloneSOL',
    time: '2m ago',
    text: 'Fair launch, no supply cap drama. Just memes and ridiculous $ALONE vibes.'
  },
  {
    id: 2,
    handle: '@berandito',
    time: '12m ago',
    text: 'Saw six Pump.Fun alerts this morning and all of them were just me laughing at being lonely.'
  },
  {
    id: 3,
    handle: '@PumpFunAlerts',
    time: '22m ago',
    text: 'Jupiter markets lit the signal for $ALONE. No roadmap but plenty of friends missing status updates.'
  }
]

export function SocialWall() {
  return (
    <div className="social-wall">
      <div className="social-wall-header">
        <p className="eyebrow">Social Wall</p>
        <span>Live vibes</span>
      </div>
      <div className="social-wall-grid">
        {samplePosts.map((post) => (
          <div key={post.id} className="social-wall-card">
            <div className="social-wall-meta">
              <strong>{post.handle}</strong>
              <span>{post.time}</span>
            </div>
            <p>{post.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
