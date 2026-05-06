import { useState, useEffect, useRef } from 'react'

const milestones = [
  {
    id: 0, year: '2016', month: 'May',
    title: 'Launched into orbit',
    subtitle: 'Graduated Piedmont Technical College',
    description: 'Finished my Associates degree and started figuring out what was next. The beginning of the journey.',
    type: 'education', size: 'major',
    color: '#F97316', glow: '#EA580C', radius: 28,
    x: 8, y: 55,
    mx: 8, my: 12,
  },
  {
    id: 1, year: '2016', month: 'November',
    title: 'National Champions',
    subtitle: 'Watched Clemson win the NCAA Championship 🏈',
    description: 'Death Valley was electric. An unforgettable moment for anyone who bleeds orange.',
    type: 'personal', size: 'minor',
    color: '#F97316', glow: '#EA580C', radius: 14,
    x: 15, y: 30,
    mx: 25, my: 20,
  },
  {
    id: 2, year: '2016', month: 'December',
    title: 'First mission',
    subtitle: 'Started at Wells Fargo — Teller',
    description: 'My first real job. Learned the fundamentals of client service, operations, and how to stay calm when things get complicated.',
    type: 'work', size: 'major',
    color: '#FCD34D', glow: '#F59E0B', radius: 32,
    x: 22, y: 68,
    mx: 75, my: 27,
  },
  {
    id: 3, year: '2017', month: 'June',
    title: 'First promotion',
    subtitle: 'Promoted to Lead Teller — Wells Fargo',
    description: 'Six months in and already leading. Started running team huddles, coaching colleagues, and taking on more responsibility.',
    type: 'work', size: 'major',
    color: '#FCD34D', glow: '#F59E0B', radius: 36,
    x: 30, y: 40,
    mx: 25, my: 34,
  },
  {
    id: 4, year: '2018', month: '',
    title: 'Back-to-back',
    subtitle: 'Watched Clemson win the NCAA Championship again 🏈',
    description: 'Twice in three years. Still thinking about it.',
    type: 'personal', size: 'minor',
    color: '#FB923C', glow: '#EA580C', radius: 12,
    x: 37, y: 72,
    mx: 70, my: 41,
  },
  {
    id: 5, year: '2019', month: 'Summer',
    title: 'New role unlocked',
    subtitle: 'Promoted to Personal Banker — Wells Fargo',
    description: 'Moved into a client-facing advisory role. Building real relationships, solving complex financial needs, and growing into someone people trusted with big decisions.',
    type: 'work', size: 'major',
    color: '#FCD34D', glow: '#F59E0B', radius: 40,
    x: 45, y: 55,
    mx: 30, my: 48,
  },
  {
    id: 6, year: '2020', month: 'June',
    title: 'New atmosphere',
    subtitle: 'Joined Eleos Technologies — QA Analyst & Support',
    description: 'Made the jump into tech. Started in QA and support, building deep product knowledge across 6 platform segments.',
    type: 'work', size: 'major',
    color: '#1D9E75', glow: '#0F6E56', radius: 38,
    x: 54, y: 35,
    mx: 70, my: 55,
  },
  {
    id: 7, year: '2020', month: 'August',
    title: 'Back to school',
    subtitle: 'Started B.S. at Clemson University',
    description: 'Decided to go all in — working full time and going back to school. Because why not do both at once?',
    type: 'education', size: 'minor',
    color: '#F97316', glow: '#EA580C', radius: 16,
    x: 60, y: 70,
    mx: 25, my: 61,
  },
  {
    id: 8, year: '2020', month: 'September',
    title: 'Leaving the atmosphere',
    subtitle: 'Left Wells Fargo',
    description: 'After a few months of juggling both, it was time to commit fully to the new path. No looking back.',
    type: 'personal', size: 'minor',
    color: '#94A3B8', glow: '#64748B', radius: 13,
    x: 64, y: 22,
    mx: 72, my: 67,
  },
  {
    id: 9, year: '2022', month: 'January',
    title: 'Leveling up',
    subtitle: 'Promoted to Associate Sales Engineer — Eleos',
    description: 'Moved from QA into a technical pre and post-sales role. Supporting resellers through complex integration challenges.',
    type: 'work', size: 'major',
    color: '#1D9E75', glow: '#0F6E56', radius: 34,
    x: 72, y: 58,
    mx: 30, my: 74,
  },
  {
    id: 10, year: '2023', month: 'May',
    title: 'Mission complete',
    subtitle: 'Graduated from Clemson University 🎓',
    description: "B.S. in Computer Information Systems. Took longer than the traditional path — working full time the whole way through — but earned every credit.",
    type: 'education', size: 'major',
    color: '#F97316', glow: '#EA580C', radius: 30,
    x: 79, y: 28,
    mx: 68, my: 80,
  },
  {
    id: 11, year: '2023', month: 'May',
    title: 'New orbit',
    subtitle: 'Promoted to Sales Engineer — Eleos',
    description: 'Took on direct enterprise clients and started owning integrations end-to-end. Led the migration to dbt and delivered 50+ reports.',
    type: 'work', size: 'major',
    color: '#1D9E75', glow: '#0F6E56', radius: 42,
    x: 85, y: 62,
    mx: 25, my: 86,
  },
  {
    id: 12, year: '2023', month: 'November',
    title: 'Most important crew member',
    subtitle: 'Got Salem 🐱',
    description: "Adopted the world's best coworker. Has not left my lap since.",
    type: 'personal', size: 'minor',
    color: '#C084FC', glow: '#A855F7', radius: 15,
    x: 90, y: 38,
    mx: 72, my: 91,
  },
  {
    id: 13, year: '2025', month: 'February',
    title: 'Deep space',
    subtitle: 'Promoted to Solutions Engineer — Eleos',
    description: "The role I've been building toward. Technical point of contact for 15 clients and 3 reseller partners. Building data infrastructure, leading solutioning, and still loving every bit of it.",
    type: 'work', size: 'major',
    color: '#1D9E75', glow: '#0F6E56', radius: 48,
    x: 96, y: 52,
    mx: 30, my: 96,
  },
  {
    id: 14, year: '2025', month: '',
    title: 'Transmission sent',
    subtitle: 'Launched this portfolio 🚀',
    description: 'You are here.',
    type: 'personal', size: 'minor',
    color: '#9FE1CB', glow: '#1D9E75', radius: 18,
    x: 101, y: 30,
    mx: 65, my: 99,
  },
]

const typeColors = { work: '#1D9E75', education: '#F97316', personal: '#C084FC' }
const typeLabels  = { work: 'Career',  education: 'Education', personal: 'Personal' }

function generateStars(count) {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 0.5,
    opacity: Math.random() * 0.6 + 0.15,
    dur: Math.random() * 4 + 2,
    delay: Math.random() * 5,
  }))
}

const STARS = generateStars(180)

export default function Timeline() {
  const [current, setCurrent]           = useState(0)
  const [ufoPos, setUfoPos]             = useState({ x: milestones[0].x, y: milestones[0].y })
  const [isFlying, setIsFlying]         = useState(false)
  const [showCard, setShowCard]         = useState(true)
  const [cardMilestone, setCardMilestone] = useState(milestones[0])
  const [visited, setVisited]           = useState(new Set([0]))
  const [isMobile, setIsMobile]         = useState(false)
  const sceneRef = useRef(null)

  const SCENE_W  = 2400
  const SCENE_H  = 520
  const M_SCENE_W = 340   // mobile scene width
  const M_SCENE_H = 2200  // mobile scene height — tall vertical scroll

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 600)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  // Auto-scroll scene to keep UFO visible
  useEffect(() => {
    if (!sceneRef.current) return
    if (isMobile) {
      const targetY = (ufoPos.y / 100) * M_SCENE_H
      const scrollTarget = targetY - sceneRef.current.clientHeight * 0.4
      sceneRef.current.scrollTo({ top: Math.max(0, scrollTarget), behavior: 'smooth' })
    } else {
      const targetX = (ufoPos.x / 105) * SCENE_W
      const scrollTarget = targetX - sceneRef.current.clientWidth * 0.4
      sceneRef.current.scrollTo({ left: Math.max(0, scrollTarget), behavior: 'smooth' })
    }
  }, [ufoPos, isMobile])

  const flyTo = (index) => {
    if (isFlying || index === current) return
    const target = milestones[index]
    setIsFlying(true)
    setShowCard(false)
    setUfoPos(isMobile ? { x: target.mx, y: target.my } : { x: target.x, y: target.y })
    setTimeout(() => {
      setCurrent(index)
      setCardMilestone(target)
      setVisited(prev => new Set([...prev, index]))
      setIsFlying(false)
      setShowCard(true)
    }, 900)
  }

  const navigate = (dir) => {
    const next = current + dir
    if (next >= 0 && next < milestones.length) flyTo(next)
  }

  // Coordinate helpers
  const pxX  = (pct) => (pct / 105) * SCENE_W
  const pxY  = (pct) => (pct / 100) * SCENE_H
  const mpxX = (pct) => (pct / 100) * M_SCENE_W
  const mpxY = (pct) => (pct / 100) * M_SCENE_H

  const sceneW = isMobile ? M_SCENE_W : SCENE_W
  const sceneH = isMobile ? M_SCENE_H : SCENE_H

  const getPlanetX = (m) => isMobile ? mpxX(m.mx) : pxX(m.x)
  const getPlanetY = (m) => isMobile ? mpxY(m.my) : pxY(m.y)

  const ufoScreenX = isMobile ? mpxX(ufoPos.x) : pxX(ufoPos.x)
  const ufoScreenY = isMobile ? mpxY(ufoPos.y) : pxY(ufoPos.y)

  const mobileSceneStyle = isMobile
    ? { width: M_SCENE_W, height: M_SCENE_H }
    : { width: SCENE_W }

  return (
    <div className="tl-page">

      {/* Header */}
      <div className="tl-header">
        <span className="tl-eyebrow">Career & Life</span>
        <h1 className="tl-title">The Journey</h1>
        <p className="tl-subtitle">
          {cardMilestone.month && `${cardMilestone.month} `}{cardMilestone.year}
          &nbsp;·&nbsp;
          {current + 1} of {milestones.length}
        </p>
      </div>

      {/* Space scene */}
      <div
        className={`tl-scene-wrap ${isMobile ? 'mobile' : ''}`}
        ref={sceneRef}
      >
        <div className="tl-scene" style={mobileSceneStyle}>

          {/* Stars */}
          {STARS.map(s => (
            <div key={s.id} className="tl-star" style={{
              left: `${s.x}%`, top: `${s.y}%`,
              width: s.size, height: s.size,
              opacity: s.opacity,
              animationDuration: `${s.dur}s`,
              animationDelay: `${s.delay}s`,
            }} />
          ))}

          {/* Flight path */}
          <svg className="tl-path-svg" width={sceneW} height={sceneH}>
            {milestones.slice(0, -1).map((m, i) => {
              const next = milestones[i + 1]
              return (
                <line
                  key={m.id}
                  x1={getPlanetX(m)}   y1={getPlanetY(m)}
                  x2={getPlanetX(next)} y2={getPlanetY(next)}
                  stroke="rgba(29,158,117,0.15)"
                  strokeWidth="1.5"
                  strokeDasharray="4 8"
                />
              )
            })}
          </svg>

          {/* Planets */}
          {milestones.map((m, i) => {
            const x = getPlanetX(m)
            const y = getPlanetY(m)
            const r = isMobile ? Math.max(m.radius * 0.75, 10) : m.radius
            const isActive  = i === current
            const isVisited = visited.has(i)
            return (
              <button
                key={m.id}
                className={`tl-planet ${isActive ? 'active' : ''} ${isVisited ? 'visited' : ''}`}
                style={{
                  left: x - r,
                  top: y - r,
                  width: r * 2,
                  height: r * 2,
                  '--planet-color': m.color,
                  '--planet-glow': m.glow,
                  borderRadius: '50%',
                }}
                onClick={() => flyTo(i)}
                title={`${m.month} ${m.year} — ${m.subtitle}`}
              >
                {isActive && <div className="tl-planet-ring" />}
              </button>
            )
          })}

          {/* UFO */}
          <div
            className={`tl-ufo-wrap ${isFlying ? 'flying' : 'idle'}`}
            style={{
              left: ufoScreenX - 40,
              top: ufoScreenY - 52,
              transition: isFlying
                ? 'left 0.9s cubic-bezier(0.4,0,0.2,1), top 0.9s cubic-bezier(0.4,0,0.2,1)'
                : 'none',
            }}
          >
            <div className="tl-ufo-beam" />
            <div className="tl-ufo-dome" />
            <div className="tl-ufo-saucer">
              <div className="tl-ufo-light l1" />
              <div className="tl-ufo-light l2" />
              <div className="tl-ufo-light l3" />
              <div className="tl-ufo-light l4" />
            </div>
          </div>

        </div>
      </div>

      {/* Milestone card */}
      <div className={`tl-card ${showCard ? 'visible' : ''}`}>
        <div className="tl-card-meta" style={{ color: typeColors[cardMilestone.type] }}>
          <span className="tl-card-dot" style={{ background: typeColors[cardMilestone.type] }} />
          {typeLabels[cardMilestone.type]} · {cardMilestone.month && `${cardMilestone.month} `}{cardMilestone.year}
        </div>
        <h2 className="tl-card-title">{cardMilestone.title}</h2>
        <p className="tl-card-subtitle">{cardMilestone.subtitle}</p>
        <p className="tl-card-desc">{cardMilestone.description}</p>
      </div>

      {/* Nav */}
      <div className="tl-controls">
        <button className="tl-btn" onClick={() => navigate(-1)} disabled={current === 0 || isFlying}>
          ← Back
        </button>
        <span className="tl-progress">
          {current + 1} / {milestones.length}
        </span>
        <button className="tl-btn tl-btn-fwd" onClick={() => navigate(1)} disabled={current === milestones.length - 1 || isFlying}>
          {current === milestones.length - 1 ? 'The end 🚀' : 'Warp →'}
        </button>
      </div>

    </div>
  )
}