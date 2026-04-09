import {
  Telescope, BookOpen, Leaf, Gamepad2,
  Music, TreePine, Headphones
} from 'lucide-react'

export default function About() {
  return (
    <div className="about-page">
      <div className="about-wrapper">

        <span className="about-eyebrow">About Me</span>
        <h1 className="about-title">More than a résumé.</h1>

        {/* ── Bio + Salem ── */}
        <div className="about-intro-row">
          <div className="about-bio-col">
            <div className="about-bio-card">
              <span className="about-section-label">The work</span>
              <p>
                I'm a <strong>Solutions Engineer</strong> who genuinely loves the work. I'm the kind of person who gets unreasonably excited when a tricky integration finally clicks, or when a query that was taking 10 seconds runs in 300ms.
              </p>
              <p>
                I work at <strong>Eleos Technologies</strong>, where we build a platform that lets transportation fleets create their own fully custom driver apps, without writing a line of mobile code. It's a technically deep product serving an industry that doesn't always speak "software," which means my job is as much about translation as it is about engineering. I sit between the product, the data, and the clients who depend on both.
              </p>
            </div>

          </div>

          <div className="about-salem-card">
            {
              <img src="/images/salem.jpg" alt="Salem the cat" className="about-salem-photo" />
            }
            <div className="about-salem-info">
              <p className="about-salem-name">Salem</p>
              <p className="about-salem-desc">
                The world's best coworker. Salem is a lap cat, warm, purring, and completely unbothered by deadlines. If you're sitting down, she's already on you.
              </p>
            </div>
          </div>
        </div>

        {/* ── The person (full width) ── */}
        <div className="about-bio-card about-bio-card--full">
          <span className="about-section-label">The person</span>
          <div className="about-bio-card-body">
            <p>
              I grew up loving <strong>stories</strong>. I came pretty close to getting a degree in English Literature before deciding I wanted something I could also pay rent with. That love of narrative never went away, though. It just shows up in how I explain technical concepts, write documentation, and approach problems.
            </p>
            <p>
              Outside of work I'm happiest when I'm outside, exploring something, or deeply immersed in a game with a great world to get lost in. I care a lot about the craft of things, whether that's the art direction of a video game, the pacing of a novel, or the architecture of a data pipeline.
            </p>
          </div>
        </div>

        {/* ── Currently ── */}
        <div className="about-currently-card">
          <span className="about-section-label">Currently into</span>
          <div className="about-currently-grid">
            <div className="about-currently-item">
              <Gamepad2 size={16} strokeWidth={1.5} className="about-currently-icon" />
              <span className="about-currently-type">Playing</span>
              <span className="about-currently-value">Outer Wilds</span>
              <span className="about-currently-sub">Love the time loop</span>
            </div>
            <div className="about-currently-item">
              <BookOpen size={16} strokeWidth={1.5} className="about-currently-icon" />
              <span className="about-currently-type">Reading</span>
              <span className="about-currently-value">Can't Spell Treason <br />Without Tea</span>
              <span className="about-currently-sub">Slowly but surely</span>
            </div>
            <div className="about-currently-item">
              <Headphones size={16} strokeWidth={1.5} className="about-currently-icon" />
              <span className="about-currently-type">Listening to</span>
              <span className="about-currently-value">TV Girl</span>
              <span className="about-currently-sub">Discovered recently</span>
            </div>
          </div>
        </div>

        {/* ── Hobbies ── */}
        <div className="about-hobbies-grid">
          <div className="about-hobby-card">
            <div className="about-hobby-header">
              <Gamepad2 size={20} strokeWidth={1.5} className="about-hobby-icon" />
              <span className="about-hobby-title">Games</span>
            </div>
            <p className="about-hobby-body">
              I love games that put me in another world, ones with real stories, stunning art, and landscapes worth getting lost in. <em>Outer Wilds</em> is the game I recommend to everyone regardless of whether they game. The Assassin's Creed series pulled me into history in a way school never managed to. And Crash Bandicoot / Ratchet & Clank will always hold a piece of my heart.
            </p>
            <div className="about-hobby-tags">
              <span className="about-hobby-tag">Outer Wilds</span>
              <span className="about-hobby-tag">Assassin's Creed</span>
              <span className="about-hobby-tag">Crash Bandicoot</span>
              <span className="about-hobby-tag">Ratchet & Clank</span>
              <span className="about-hobby-tag">Indie games</span>
            </div>
          </div>

          <div className="about-hobby-card">
            <div className="about-hobby-header">
              <Telescope size={20} strokeWidth={1.5} className="about-hobby-icon" />
              <span className="about-hobby-title">Science & History</span>
            </div>
            <p className="about-hobby-body">
              Space is my go-to rabbit hole, the scale of it is genuinely incomprehensible and I love that. I'm equally drawn to ancient civilizations: the Vikings, Indigenous peoples across continents, how people built entire worlds before we had any of the tools we take for granted. Science and storytelling, it turns out, are not so different.
            </p>
            <div className="about-hobby-tags">
              <span className="about-hobby-tag">Cosmology</span>
              <span className="about-hobby-tag">Vikings</span>
              <span className="about-hobby-tag">Indigenous history</span>
              <span className="about-hobby-tag">Archaeology</span>
            </div>
          </div>

          <div className="about-hobby-card">
            <div className="about-hobby-header">
              <Music size={20} strokeWidth={1.5} className="about-hobby-icon" />
              <span className="about-hobby-title">Music</span>
            </div>
            <p className="about-hobby-body">
              Music is always on. It sets the whole tone of whatever I'm doing, there's a playlist for coding, one for hiking, one for cooking, and one for when Salem decides my keyboard is actually a bed and I need something calming.
            </p>
            <div className="about-hobby-tags">
              <span className="about-hobby-tag">Always something on</span>
              <span className="about-hobby-tag">Chappel Roan</span>
              <span className="about-hobby-tag">SZA</span>
            </div>
          </div>

          <div className="about-hobby-card">
            <div className="about-hobby-header">
              <TreePine size={20} strokeWidth={1.5} className="about-hobby-icon" />
              <span className="about-hobby-title">The Outdoors</span>
            </div>
            <p className="about-hobby-body">
              Being outside genuinely lifts my spirits in a way nothing else quite does. Hiking is a favorite, but really any excuse to be in fresh air works, a walk, a trail, sitting somewhere with a good view. It's hard to stay stuck in your head when you're out in the world.
            </p>
            <div className="about-hobby-tags">
              <span className="about-hobby-tag">Hiking</span>
              <span className="about-hobby-tag">Trails</span>
              <span className="about-hobby-tag">Fresh air</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}