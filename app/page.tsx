import {
  ArrowRight,
  Boxes,
  Check,
  CloudDownload,
  Code2,
  Cpu,
  Database,
  Download,
  Gauge,
  Github,
  HardDrive,
  Layers3,
  Lock,
  Monitor,
  Package,
  Play,
  Server,
  Settings2,
  Share2,
  ShieldCheck,
  Sparkles,
  Terminal,
  Users,
  Wrench,
  Zap
} from "lucide-react";

const software = ["Vanilla", "Paper", "Purpur", "Fabric", "Forge", "NeoForge", "Quilt", "Velocity", "PumpkinMC"];

const features = [
  { icon: Server, title: "One place for every server", text: "Create and manage multiple Minecraft servers without jumping between folders, scripts and terminals." },
  { icon: Package, title: "Modrinth built in", text: "Find and install compatible plugins and mods directly from the app instead of downloading files manually." },
  { icon: Cpu, title: "Automatic Java management", text: "Detect and manage the Java runtimes your different Minecraft versions need." },
  { icon: Terminal, title: "Full server controls", text: "Start, stop, restart and monitor servers with a live console and useful management controls." },
  { icon: HardDrive, title: "Backups & schedules", text: "Protect worlds and configuration with local backups and scheduled backup tasks." },
  { icon: Gauge, title: "Performance monitoring", text: "Keep an eye on memory, CPU, storage and server state from a clean dashboard." },
  { icon: Users, title: "Accounts & permissions", text: "Create accounts, define roles and control exactly which users can access each server." },
  { icon: Share2, title: "Share servers", text: "Give trusted users access to individual servers without giving them control over everything." },
  { icon: ShieldCheck, title: "Security first", text: "Use local authentication, permission boundaries and audit logs to keep management controlled." }
];

const steps = [
  ["01", "Create", "Pick a name, location, Minecraft version and server software."],
  ["02", "Configure", "Set memory, Java, networking and your initial server settings."],
  ["03", "Install", "Download the selected server build and add plugins or mods through Modrinth."],
  ["04", "Run", "Start the server and manage its live console, resources, backups and users."]
];

export default function Home() {
  return (
    <main>
      <nav className="nav shell">
        <a className="brand" href="#">
          <span className="brand-mark"><GhostMark /></span>
          <span>Ghost Servers</span>
        </a>
        <div className="nav-links">
          <a href="#features">Features</a>
          <a href="#how-it-works">How it works</a>
          <a href="#software">Software</a>
        </div>
        <div className="nav-actions">
          <a className="github" href="https://github.com/SoullessGhosty/GhostServersWebsite" target="_blank" rel="noreferrer"><Github size={17} /> GitHub</a>
          <a className="button button-dark" href="#download">Download <ArrowRight size={16} /></a>
        </div>
      </nav>

      <section className="hero shell">
        <div className="hero-copy">
          <div className="eyebrow"><span className="status-dot" /> Local hosting, simplified</div>
          <h1>Your Minecraft servers.<br /><span>Your machine.</span></h1>
          <p className="hero-text">
            Ghost Servers is a modern Windows desktop app for creating, managing and sharing Minecraft servers locally — with the power of a hosting panel and the simplicity of a desktop app.
          </p>
          <div className="hero-actions">
            <a className="button button-dark large" href="#download"><Download size={18} /> Get Ghost Servers</a>
            <a className="button button-glass large" href="#features">Explore features <ArrowRight size={17} /></a>
          </div>
          <div className="trust-row">
            <span><Check size={15} /> Windows desktop</span>
            <span><Check size={15} /> Multi-server</span>
            <span><Check size={15} /> Open to extensibility</span>
          </div>
        </div>

        <div className="dashboard-wrap">
          <div className="dashboard-glow" />
          <div className="dashboard glass">
            <div className="dash-sidebar">
              <div className="mini-brand"><span className="mini-mark"><GhostMark /></span></div>
              <div className="side-active"><Server size={16} /></div>
              <div><Boxes size={16} /></div>
              <div><Users size={16} /></div>
              <div><Settings2 size={16} /></div>
            </div>
            <div className="dash-main">
              <div className="dash-top">
                <div><small>OVERVIEW</small><h3>My Servers</h3></div>
                <button className="new-server"><span>+</span> New Server</button>
              </div>
              <div className="dash-stats">
                <Stat label="SERVERS" value="4" />
                <Stat label="ONLINE" value="3" />
                <Stat label="MEMORY" value="7.2 GB" />
              </div>
              <div className="server-card active-server">
                <div className="server-icon"><Zap size={18} /></div>
                <div className="server-info"><strong>Survival</strong><span>Paper • 1.21.x</span></div>
                <div className="online"><i /> Online</div>
                <div className="metric">1.4 GB</div>
              </div>
              <div className="server-card">
                <div className="server-icon muted"><Layers3 size={18} /></div>
                <div className="server-info"><strong>Creative</strong><span>Fabric • 1.21.x</span></div>
                <div className="offline">Offline</div>
                <div className="metric">—</div>
              </div>
              <div className="console">
                <div className="console-head"><span><Terminal size={13} /> LIVE CONSOLE</span><span>127.0.0.1:25565</span></div>
                <div className="console-lines">
                  <p><b>[12:48:21]</b> Server thread/INFO Done (2.314s)!</p>
                  <p><b>[12:48:22]</b> Player joined the game</p>
                  <p className="dim"><b>[12:48:23]</b> Loaded 128 chunks</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="software-strip" id="software">
        <div className="shell">
          <p>Built to support the Minecraft ecosystem</p>
          <div className="software-list">
            {software.map((item) => <span key={item}>{item}</span>)}
          </div>
        </div>
      </section>

      <section className="section shell" id="features">
        <div className="section-heading">
          <div className="eyebrow">Everything in one place</div>
          <h2>A local control panel<br />without the complexity.</h2>
          <p>Ghost Servers brings the important parts of a professional hosting panel to your Windows desktop.</p>
        </div>
        <div className="feature-grid">
          {features.map(({ icon: Icon, title, text }) => (
            <article className="feature glass" key={title}>
              <div className="icon-box"><Icon size={20} /></div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="dark-section">
        <div className="shell split">
          <div>
            <div className="eyebrow light">Dynamic by design</div>
            <h2>No hardcoded server builds.</h2>
            <p>
              Ghost Servers is designed around dynamic server software and version discovery. Available builds can be retrieved from official endpoints where supported, so new releases can appear without rebuilding the app.
            </p>
            <div className="check-list">
              <span><Check size={16} /> Dynamic version selection</span>
              <span><Check size={16} /> Official download sources</span>
              <span><Check size={16} /> Plugin & mod discovery</span>
              <span><Check size={16} /> Extensible server providers</span>
            </div>
          </div>
          <div className="api-card glass-dark">
            <div className="api-header"><Code2 size={16} /> SERVER PROVIDER</div>
            <div className="code-block">
              <div><span className="purple">serverSoftware</span>: <span className="white">"Paper"</span></div>
              <div><span className="purple">minecraftVersion</span>: <span className="white">"1.21.x"</span></div>
              <div><span className="purple">build</span>: <span className="white">"latest"</span></div>
              <div><span className="purple">source</span>: <span className="white">"official"</span></div>
              <div className="line" />
              <div><span className="green">✓ Build available</span></div>
              <div><span className="green">✓ Download ready</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section shell" id="how-it-works">
        <div className="section-heading center">
          <div className="eyebrow">Simple workflow</div>
          <h2>From zero to server in minutes.</h2>
        </div>
        <div className="steps">
          {steps.map(([num, title, text]) => (
            <div className="step" key={num}>
              <span className="step-num">{num}</span>
              <div><h3>{title}</h3><p>{text}</p></div>
            </div>
          ))}
        </div>
      </section>

      <section className="section shell architecture">
        <div className="architecture-card glass">
          <div className="arch-icon"><Monitor size={24} /></div>
          <div>
            <div className="eyebrow">Made for your desktop</div>
            <h2>Fast, private and local.</h2>
            <p>Ghost Servers is intended as a Windows desktop application. Your servers live on your machine, while the app provides the management layer around them.</p>
          </div>
          <div className="arch-stack">
            <span><Zap size={14} /> Desktop UI</span>
            <span><Wrench size={14} /> Server management</span>
            <span><Database size={14} /> Local data</span>
          </div>
        </div>
      </section>

      <section className="cta shell" id="download">
        <div className="cta-card">
          <div className="eyebrow light"><Sparkles size={14} /> Ghost Servers</div>
          <h2>Stop managing servers manually.</h2>
          <p>Create. Configure. Run. Share. Everything from one place.</p>
          <div className="hero-actions">
            <a className="button button-white large" href="https://github.com/" target="_blank" rel="noreferrer"><Github size={18} /> View on GitHub</a>
            <a className="button button-outline large" href="#features">See what&apos;s included</a>
          </div>
        </div>
      </section>

      <footer className="footer shell">
        <div className="brand"><span className="brand-mark"><GhostMark /></span><span>Ghost Servers</span></div>
        <span>Local Minecraft server management, simplified.</span>
        <span>© 2026 Ghost Servers</span>
      </footer>
    </main>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return <div className="stat"><small>{label}</small><strong>{value}</strong></div>;
}

function GhostMark() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 20V9.5C5 5.9 7.8 3 11.5 3S18 5.9 18 9.5V20l-3-2-3 2-3-2-4 2Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
      <path d="M8.5 10h.01M15.5 10h.01" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"/>
      <path d="M9 14c1.6 1 3.4 1 5 0" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
    </svg>
  );
}
