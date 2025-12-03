const samplePosts = [
  {
    id: 1,
    handle: '@berandito',
    time: '2m ago',
    text: 'New funny face from berandito just dropped! So relatable. What do you guys think?'
  },
  {
    id: 2,
    handle: '@ragedoodler',
    time: '12m ago',
    text: 'Just doodling new rage comics. This new face feels kinda special. Maybe it\'ll go viral?'
  },
  {
    id: 3,
    handle: '@MemeHunter',
    time: '22m ago',
    text: 'Found this new face on a forum. It\'s awesome! Hope more people start using it in their comics.'
  }
]

export function SocialWall() {
  return (
    <div className="social-wall">
      <div className="social-wall-header">
        <p className="eyebrow">Forum Chatter</p>
        <span>Real Talk</span>
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
