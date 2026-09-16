import { useState, useEffect, useMemo, useRef } from 'react'

const milestones = [
  {
    id: 0, year: '2016', month: 'May',
    title: 'First steps on the trail',
    subtitle: 'Graduated Piedmont Technical College',
    description: 'Finished my Associates degree and started figuring out what was next. The beginning of the journey.',
    type: 'education', size: 'major',
    radius: 28,
    x: 8, y: 55,
    mx: 8, my: 12,
  },
  {
    id: 1, year: '2016', month: 'November',
    title: 'National Champions',
    subtitle: 'Watched Clemson win the NCAA Championship 🏈',
    description: 'Death Valley was electric. An unforgettable moment for anyone who bleeds orange.',
    type: 'personal', size: 'minor',
    radius: 14,
    x: 15, y: 30,
    mx: 25, my: 20,
  },
  {
    id: 2, year: '2016', month: 'December',
    title: 'Trailhead',
    subtitle: 'Started at Wells Fargo — Teller',
    description: 'My first real job. Learned the fundamentals of client service, operations, and how to stay calm when things get complicated.',
    type: 'work', size: 'major',
    radius: 32,
    x: 22, y: 68,
    mx: 75, my: 27,
  },
  {
    id: 3, year: '2017', month: 'June',
    title: 'First promotion',
    subtitle: 'Promoted to Lead Teller — Wells Fargo',
    description: 'Six months in and already leading. Started running team huddles, coaching colleagues, and taking on more responsibility.',
    type: 'work', size: 'major',
    radius: 36,
    x: 30, y: 40,
    mx: 25, my: 34,
  },
  {
    id: 4, year: '2018', month: '',
    title: 'Back-to-back',
    subtitle: 'Watched Clemson win the NCAA Championship again 🏈',
    description: 'Twice in three years. Still thinking about it.',
    type: 'personal', size: 'minor',
    radius: 12,
    x: 37, y: 72,
    mx: 70, my: 41,
  },
  {
    id: 5, year: '2019', month: 'Summer',
    title: 'New role unlocked',
    subtitle: 'Promoted to Personal Banker — Wells Fargo',
    description: 'Moved into a client-facing advisory role. Building real relationships, solving complex financial needs, and growing into someone people trusted with big decisions.',
    type: 'work', size: 'major',
    radius: 40,
    x: 45, y: 55,
    mx: 30, my: 48,
  },
  {
    id: 6, year: '2020', month: 'June',
    title: 'New country',
    subtitle: 'Joined Eleos Technologies — QA Analyst & Support',
    description: 'Made the jump into tech. Started in QA and support, building deep product knowledge across 6 platform segments.',
    type: 'work', size: 'major',
    radius: 38,
    x: 54, y: 35,
    mx: 70, my: 55,
  },
  {
    id: 7, year: '2020', month: 'August',
    title: 'Back to school',
    subtitle: 'Started B.S. at Clemson University',
    description: 'Decided to go all in — working full time and going back to school. Because why not do both at once?',
    type: 'education', size: 'minor',
    radius: 16,
    x: 60, y: 70,
    mx: 25, my: 61,
  },
  {
    id: 8, year: '2020', month: 'September',
    title: 'Closing the old trail',
    subtitle: 'Left Wells Fargo',
    description: 'After a few months of juggling both, it was time to commit fully to the new path. No looking back.',
    type: 'personal', size: 'minor',
    radius: 13,
    x: 64, y: 22,
    mx: 72, my: 67,
  },
  {
    id: 9, year: '2022', month: 'January',
    title: 'Leveling up',
    subtitle: 'Promoted to Associate Sales Engineer — Eleos',
    description: 'Moved from QA into a technical pre and post-sales role. Supporting resellers through complex integration challenges.',
    type: 'work', size: 'major',
    radius: 34,
    x: 72, y: 58,
    mx: 30, my: 74,
  },
  {
    id: 10, year: '2023', month: 'May',
    title: 'The summit',
    subtitle: 'Graduated from Clemson University 🎓',
    description: "B.S. in Computer Information Systems. Took longer than the traditional path — working full time the whole way through — but earned every credit.",
    type: 'education', size: 'major',
    radius: 30,
    x: 79, y: 28,
    mx: 68, my: 80,
  },
  {
    id: 11, year: '2023', month: 'May',
    title: 'New ridgeline',
    subtitle: 'Promoted to Sales Engineer — Eleos',
    description: 'Took on direct enterprise clients and started owning integrations end-to-end. Led the migration to dbt and delivered 50+ reports.',
    type: 'work', size: 'major',
    radius: 42,
    x: 85, y: 62,
    mx: 25, my: 86,
  },
  {
    id: 12, year: '2023', month: 'November',
    title: 'Best trail companion',
    subtitle: 'Got Salem 🐱',
    description: "Adopted the world's best coworker. Has not left my lap since.",
    type: 'personal', size: 'minor',
    radius: 15,
    x: 90, y: 38,
    mx: 72, my: 91,
  },
  {
    id: 13, year: '2025', month: 'February',
    title: 'The high ridge',
    subtitle: 'Promoted to Solutions Engineer — Eleos',
    description: "The role I've been building toward. Technical point of contact for 15 clients and 3 reseller partners. Building data infrastructure, leading solutioning, and still loving every bit of it.",
    type: 'work', size: 'major',
    radius: 48,
    x: 96, y: 52,
    mx: 30, my: 96,
  },
  {
    id: 14, year: '2025', month: '',
    title: 'Leaving a marker',
    subtitle: 'Built this portfolio 🗺️',
    description: 'You are here.',
    type: 'personal', size: 'minor',
    radius: 18,
    x: 101, y: 30,
    mx: 65, my: 99,
  },
]

const typeColors = { work: '#1D9E75', education: '#C68A34', personal: '#C1663F' }
const typeHalos = {
  work: 'rgba(29, 158, 117, 0.20)',
  education: 'rgba(198, 138, 52, 0.20)',
  personal: 'rgba(193, 102, 63, 0.20)',
}
const typeLabels = { work: 'Career', education: 'Education', personal: 'Personal' }

/* ── Map decoration ──────────────────────────────────────────
   Seeded so the map is drawn identically every render — a map
   that reshuffles itself on each visit stops reading as a place. */

function mulberry32(seed) {
  return function random() {
    seed = (seed + 0x6d2b79f5) | 0
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

/** Closed path through the midpoints of `pts` — reads as a hand-drawn contour. */
function closedBlob(pts) {
  const mid = (a, b) => [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2]
  const n = pts.length
  const start = mid(pts[n - 1], pts[0])
  let d = `M ${start[0].toFixed(1)} ${start[1].toFixed(1)}`
  for (let i = 0; i < n; i++) {
    const c = pts[i]
    const m = mid(pts[i], pts[(i + 1) % n])
    d += ` Q ${c[0].toFixed(1)} ${c[1].toFixed(1)} ${m[0].toFixed(1)} ${m[1].toFixed(1)}`
  }
  return `${d} Z`
}

/** Catmull-Rom spline as cubic béziers — passes exactly through every point. */
function trailPath(pts, tension = 0.5) {
  if (pts.length < 2) return ''
  let d = `M ${pts[0][0].toFixed(1)} ${pts[0][1].toFixed(1)}`
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[i - 1] || pts[i]
    const p1 = pts[i]
    const p2 = pts[i + 1]
    const p3 = pts[i + 2] || p2
    const k = (tension * 2) / 6
    const c1x = p1[0] + (p2[0] - p0[0]) * k
    const c1y = p1[1] + (p2[1] - p0[1]) * k
    const c2x = p2[0] - (p3[0] - p1[0]) * k
    const c2y = p2[1] - (p3[1] - p1[1]) * k
    d += ` C ${c1x.toFixed(1)} ${c1y.toFixed(1)}, ${c2x.toFixed(1)} ${c2y.toFixed(1)}, ${p2[0].toFixed(1)} ${p2[1].toFixed(1)}`
  }
  return d
}

/** Jittered grid — spreads features evenly instead of letting pure
 *  random clump them into a few corners and leave the rest blank. */
function scatter(w, h, cell, rand) {
  const cols = Math.max(2, Math.round(w / cell))
  const rows = Math.max(2, Math.round(h / cell))
  const cw = w / cols
  const ch = h / rows
  const spots = []
  for (let cx = 0; cx < cols; cx++) {
    for (let cy = 0; cy < rows; cy++) {
      spots.push([
        (cx + 0.15 + rand() * 0.7) * cw,
        (cy + 0.15 + rand() * 0.7) * ch,
      ])
    }
  }
  return spots
}

function buildTerrain(w, h) {
  const rand = mulberry32(20160501)

  // Elevation contours — clusters of nested wobbly rings
  const contours = []
  scatter(w, h, 250, rand).forEach(([cx, cy], c) => {
    const rings = 2 + Math.floor(rand() * 3)
    const base = 22 + rand() * 30
    for (let k = 0; k < rings; k++) {
      const r = base + k * (13 + rand() * 8)
      const pts = []
      for (let j = 0; j < 10; j++) {
        const a = (j / 10) * Math.PI * 2
        const rr = r * (0.82 + rand() * 0.3)
        pts.push([cx + Math.cos(a) * rr * 1.3, cy + Math.sin(a) * rr])
      }
      contours.push({ id: `${c}-${k}`, d: closedBlob(pts), ring: k })
    }
  })

  // Paper flecks
  const flecks = Array.from({ length: Math.round((w * h) / 9000) }, (_, i) => ({
    id: i,
    x: rand() * 100,
    y: rand() * 100,
    size: rand() * 1.8 + 0.6,
    opacity: rand() * 0.3 + 0.08,
  }))

  // Scattered pines
  const pines = scatter(w, h, 165, rand).map(([px, py], i) => ({
    id: i,
    x: (px / w) * 100,
    y: (py / h) * 100,
    scale: 0.7 + rand() * 0.7,
    opacity: 0.16 + rand() * 0.2,
  }))

  return { contours, flecks, pines }
}

export default function Timeline() {
  const [current, setCurrent] = useState(0)
  // Where the balloon is headed, as a milestone index — deriving its
  // pixel position at render keeps it correct across a resize.
  const [balloonTarget, setBalloonTarget] = useState(0)
  const [isFlying, setIsFlying] = useState(false)
  const [showCard, setShowCard] = useState(true)
  const [cardMilestone, setCardMilestone] = useState(milestones[0])
  const [visited, setVisited] = useState(new Set([0]))
  const [isMobile, setIsMobile] = useState(false)
  const sceneRef = useRef(null)

  const SCENE_W = 2400
  const SCENE_H = 520
  const M_SCENE_W = 340 // mobile scene width
  const M_SCENE_H = 2200 // mobile scene height — tall vertical scroll

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 600)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  // Auto-scroll scene to keep the balloon visible
  useEffect(() => {
    if (!sceneRef.current) return
    const target = milestones[balloonTarget]
    if (isMobile) {
      const targetY = (target.my / 100) * M_SCENE_H
      const scrollTarget = targetY - sceneRef.current.clientHeight * 0.4
      sceneRef.current.scrollTo({ top: Math.max(0, scrollTarget), behavior: 'smooth' })
    } else {
      const targetX = (target.x / 105) * SCENE_W
      const scrollTarget = targetX - sceneRef.current.clientWidth * 0.4
      sceneRef.current.scrollTo({ left: Math.max(0, scrollTarget), behavior: 'smooth' })
    }
  }, [balloonTarget, isMobile])

  const flyTo = (index) => {
    if (isFlying || index === current) return
    const target = milestones[index]
    setIsFlying(true)
    setShowCard(false)
    setBalloonTarget(index)
    setTimeout(() => {
      setCurrent(index)
      setCardMilestone(target)
      setVisited((prev) => new Set([...prev, index]))
      setIsFlying(false)
      setShowCard(true)
    }, 900)
  }

  const navigate = (dir) => {
    const next = current + dir
    if (next >= 0 && next < milestones.length) flyTo(next)
  }

  // Coordinate helpers
  const pxX = (pct) => (pct / 105) * SCENE_W
  const pxY = (pct) => (pct / 100) * SCENE_H
  const mpxX = (pct) => (pct / 100) * M_SCENE_W
  const mpxY = (pct) => (pct / 100) * M_SCENE_H

  const sceneW = isMobile ? M_SCENE_W : SCENE_W
  const sceneH = isMobile ? M_SCENE_H : SCENE_H

  const getMarkerX = (m) => (isMobile ? mpxX(m.mx) : pxX(m.x))
  const getMarkerY = (m) => (isMobile ? mpxY(m.my) : pxY(m.y))
  const getMarkerR = (m) =>
    isMobile ? Math.max(m.radius * 0.46, 8) : Math.max(m.radius * 0.6, 10)

  // Lift the balloon clear of whatever marker it is sitting on, so the
  // basket never covers the marker it is pointing out.
  const balloonMilestone = milestones[balloonTarget]
  const balloonX = getMarkerX(balloonMilestone)
  const balloonY = getMarkerY(balloonMilestone) - getMarkerR(balloonMilestone)

  const terrain = useMemo(() => buildTerrain(sceneW, sceneH), [sceneW, sceneH])

  const points = useMemo(
    () => milestones.map((m) => [getMarkerX(m), getMarkerY(m)]),
    [isMobile]
  )
  const fullTrail = useMemo(() => trailPath(points), [points])
  // The stretch already travelled, drawn solid over the dashed route
  const walkedTrail = useMemo(
    () => (current > 0 ? trailPath(points.slice(0, current + 1)) : ''),
    [points, current]
  )

  const sceneStyle = isMobile
    ? { width: M_SCENE_W, height: M_SCENE_H }
    : { width: SCENE_W }

  const compass = isMobile ? { left: 26, top: 44 } : { left: 54, top: 62 }

  return (
    <div className="tl-page">

      {/* Header */}
      <div className="tl-header">
        <span className="tl-eyebrow">Career &amp; Life</span>
        <h1 className="tl-title">The Journey</h1>
        <p className="tl-subtitle">
          {cardMilestone.month && `${cardMilestone.month} `}{cardMilestone.year}
          &nbsp;·&nbsp;stop {current + 1} of {milestones.length}
        </p>

        <div className="tl-legend">
          {Object.keys(typeLabels).map((key) => (
            <span key={key} className="tl-legend-item">
              <span
                className="tl-legend-dot"
                style={{ '--marker-color': typeColors[key] }}
              />
              {typeLabels[key]}
            </span>
          ))}
        </div>
      </div>

      {/* Trail map */}
      <div className={`tl-scene-wrap ${isMobile ? 'mobile' : ''}`} ref={sceneRef}>
        <div className="tl-scene" style={sceneStyle}>

          {/* Elevation contours */}
          <svg className="tl-contour-svg" width={sceneW} height={sceneH} aria-hidden="true">
            {terrain.contours.map((c) => (
              <path
                key={c.id}
                d={c.d}
                fill="none"
                stroke="rgba(15, 110, 86, 0.13)"
                strokeWidth={c.ring === 0 ? 1.1 : 0.8}
                strokeOpacity={1 - c.ring * 0.16}
              />
            ))}
          </svg>

          {/* Paper flecks */}
          {terrain.flecks.map((f) => (
            <div
              key={f.id}
              className="tl-fleck"
              style={{
                left: `${f.x}%`,
                top: `${f.y}%`,
                width: f.size,
                height: f.size,
                opacity: f.opacity,
              }}
            />
          ))}

          {/* Pines */}
          {terrain.pines.map((p) => (
            <svg
              key={p.id}
              className="tl-pine"
              viewBox="0 0 12 16"
              width={12 * p.scale}
              height={16 * p.scale}
              style={{ left: `${p.x}%`, top: `${p.y}%`, opacity: p.opacity }}
              aria-hidden="true"
            >
              <path d="M6 0 L10.5 9 H1.5 Z" fill="#0F6E56" />
              <path d="M6 4 L11 14 H1 Z" fill="#0F6E56" />
              <rect x="5.2" y="13.5" width="1.6" height="2.5" fill="#8B6B4A" />
            </svg>
          ))}

          {/* Compass rose */}
          <svg
            className="tl-compass"
            style={compass}
            viewBox="0 0 64 64"
            width="58"
            height="58"
            aria-hidden="true"
          >
            <circle cx="32" cy="32" r="27" fill="none" stroke="#0F6E56" strokeWidth="1" opacity=".3" />
            <circle cx="32" cy="32" r="21" fill="none" stroke="#0F6E56" strokeWidth=".7" opacity=".2" />
            <path d="M32 6 L37 30 L32 34 L27 30 Z" fill="#C1663F" opacity=".75" />
            <path d="M32 58 L27 34 L32 30 L37 34 Z" fill="#0F6E56" opacity=".45" />
            <path d="M6 32 L30 27 L34 32 L30 37 Z" fill="#0F6E56" opacity=".25" />
            <path d="M58 32 L34 37 L30 32 L34 27 Z" fill="#0F6E56" opacity=".25" />
            <text x="32" y="4.5" textAnchor="middle" fontSize="7" fill="#0F6E56" opacity=".6"
              fontFamily="DM Sans, sans-serif" fontWeight="500">N</text>
          </svg>

          {/* The trail */}
          <svg className="tl-path-svg" width={sceneW} height={sceneH} aria-hidden="true">
            <path
              d={fullTrail}
              fill="none"
              stroke="#8B6B4A"
              strokeOpacity=".38"
              strokeWidth="2"
              strokeDasharray="1 7"
              strokeLinecap="round"
            />
            {walkedTrail && (
              <path
                className="tl-path-walked"
                d={walkedTrail}
                fill="none"
                stroke="var(--teal-400)"
                strokeOpacity=".55"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            )}
          </svg>

          {/* Trail markers */}
          {milestones.map((m, i) => {
            const x = getMarkerX(m)
            const y = getMarkerY(m)
            const r = getMarkerR(m)
            return (
              <button
                key={m.id}
                className={`tl-marker${i === current ? ' active' : ''}${visited.has(i) ? ' visited' : ''}`}
                style={{
                  left: x - r,
                  top: y - r,
                  width: r * 2,
                  height: r * 2,
                  '--marker-color': typeColors[m.type],
                  '--marker-halo': typeHalos[m.type],
                }}
                onClick={() => flyTo(i)}
                aria-label={`${m.month} ${m.year} — ${m.subtitle}`}
                title={`${m.month} ${m.year} — ${m.subtitle}`}
              >
                {i === current && <span className="tl-marker-ring" />}
              </button>
            )
          })}

          {/* The balloon */}
          <div
            className={`tl-balloon ${isFlying ? 'flying' : 'idle'}`}
            style={{
              left: balloonX - 30,
              top: balloonY - 84,
              transition: isFlying
                ? 'left 0.9s cubic-bezier(0.4,0,0.2,1), top 0.9s cubic-bezier(0.4,0,0.2,1)'
                : 'none',
            }}
          >
            <div className="tl-balloon-envelope">
              <span className="tl-balloon-gore" />
              <span className="tl-balloon-gore" />
            </div>
            <div className="tl-balloon-ropes" />
            <div className="tl-balloon-basket" />
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
        <button
          className="tl-btn tl-btn-fwd"
          onClick={() => navigate(1)}
          disabled={current === milestones.length - 1 || isFlying}
        >
          {current === milestones.length - 1 ? 'End of the trail' : 'Onward →'}
        </button>
      </div>

    </div>
  )
}
