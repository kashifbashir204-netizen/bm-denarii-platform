import React, { useState, useEffect } from 'react';

const ARTICLES = [
  {
    id: 'vision',
    title: 'Beyond Speculation: Why the Next Web3 Wave is Invisible Execution',
    category: 'Vision',
    readTime: '4 min read',
    themeColor: 'cyan',
    summary: 'Moving from digital asset ownership and speculation to autonomous coordination layers. Why the next trillion-dollar protocols will operate completely below the user interface.',
    rawMarkdown: `# Beyond Speculation: Why the Next Web3 Wave is Invisible Execution (and How Denarii DFi is Leading It)

For over a decade, the primary narrative of decentralized ledger technology (DLT) has been defined by asset ownership, speculative trading, and high-latency, human-centric user interfaces. We have witnessed cycles of massive hype around tokens, repackaged financial speculation, and complex web interfaces designed to capture and monetize human attention. 

But behind the noise, a structural realignment is quietly occurring. The digital economy is transitioning from a framework of **digital assets** to one of **digital behaviors**. 

This is the shift from speculative narratives to autonomous execution. And in this new post-interface era, execution beats narrative every single time.

## The Core Thesis: Blockchains as Invisible Infrastructure

Most market participants still operate under the assumption that the ultimate destination of Web3 is the creation of consumer-facing decentralized applications (dApps). The reality, however, is that the next trillion-dollar digital ecosystems will be completely **invisible** to the end-user. 

Blockchains are not the product; they are **Step One**—providing the trustless accounting, baseline security, and cryptographic certainty required to support self-operating software layers. 

**Step Two** is the machine economy. Here, value is not passively stored in static web wallets waiting for a human to sign a transaction. Instead, value is dynamically, continuously, and autonomously executed across automated decision flows at API speed.

If an enterprise workflow still requires manual coordination, human clicks, or centralized approvals, it is already a legacy construct. The post-interface economy flows naturally to systems that reduce operational friction and deliver outcomes rather than those that simply pile on features.

## Introducing the Denarii DFi Control Plane

To eliminate the economic leakage caused by human latency, system builders must construct multi-chain execution engines that act without waiting for manual permission. This is precisely what **Denarii DFi** establishes. 

Architected during the 2021 bear market by systems engineers focused on utility rather than hype, Denarii DFi provides a unified cross-chain control plane that unifies the complementary strengths of three major ledger architectures—the XRP Ledger (XRPL), Algorand, and Hedera Hashgraph—known as the **Trinity of DLT**.

*   **XRP Ledger (XRPL)** provides high-speed value transfer and native decentralized exchange (DEX) liquidity for rapid, automated portfolio liquidation.
*   **Algorand** delivers absolute mathematical block finality and zero-fork risk, offering the ideal environment for standardized machine-to-machine micropayments.
*   **Hedera Hashgraph** provides sub-second consensus latency and predictable fees, creating a high-throughput, immutable audit trail for autonomous agent actions.

By abstracting these networks into a single, cohesive developer portal (accessible at the developer hubs denarii-orchestrator.netlify.app and info-denarii-orchestrator.netlify.app), Denarii DFi allows autonomous AI agents to deploy assets and settle transactions across chains instantly, without the friction of gas management or fragmented liquidity.

## Traction in Numbers: The Autonomous Reality

This architectural blueprint is not a theoretical model or a future roadmap. It is an active, high-velocity economy. The Denarii DFi ecosystem tracks live execution statistics that demonstrate the scale of this silent revolution:

*   **Active AI Agents**: 128,742 autonomous agents concurrently executing business operations.
*   **Tasks Executed**: 9,842,731 completed cognitive and administrative tasks.
*   **Value Processed**: Over $2.47 billion in on-chain transaction volume.
*   **System Uptime**: 100.00%, ensuring continuous, non-stop business operations.

Under the technical leadership of Chief Technology Officer **Kashif B.** and project coordinator **websitedevelop95**, the protocol has evolved from its historical integrations in sports and esports into a generalized, cross-chain AI control plane.

## The Investment Landscape: The Self-Operating Web

As artificial intelligence agents begin to trade, manage assets, and transact with other machine networks at API speed, the relationship between humans, software, and capital is being rewritten. 

Blockchains are serving as the shared, verifiable state machine for machine civilization. Smart contracts are no longer mere developer experiments; they are the corporate rails through which autonomous agents incorporate, establish their operations, and govern value flows.

For investors, the opportunity is clear. The value is migrating from speculation-driven consumer layers down to the **coordination and orchestration layers**—the invisible plumbing that enables zero-human operations. Denarii DFi and its stateful orchestration layer, Paperclip AI, represent the foundational protocols for this inevitable self-operating web.

**Execution is the only signal that matters. The transition is already underway.**

*To learn more about the developer toolkits, multi-chain SDKs, and stateful multi-agent runtimes, visit the Denarii DFi developer portal at denarii-orchestrator.netlify.app.*`
  },
  {
    id: 'tech',
    title: 'Solving the "Memento Man" Problem in AI Agent Orchestration',
    category: 'Technology',
    readTime: '5 min read',
    themeColor: 'blue',
    summary: 'How the Paperclip AI Orchestrator preserves stateful memory inside stateless LLM environments using Heartbeat check-in loops and PARA memory architectures.',
    rawMarkdown: `# Solving the "Memento Man" Problem: How Paperclip AI Orchestrator Powers Zero-Human Companies with Heartbeats and PARA Memory

One of the most persistent bottlenecks in building autonomous multi-agent systems is what engineers call the **"Memento Man" problem**. 

Standard Large Language Model (LLM) APIs are stateless. Every time you send a prompt to an agent, it is a completely isolated transaction. The model has zero built-in recollection of what it did a minute ago, what its long-term goals are, or what errors it encountered in a previous cycle. It wakes up with incredible cognitive capabilities, but **zero situational memory**.

In a production environment, this statelessness is fatal. It leads to disconnected prompts, bloated context windows, high token costs, and a total inability to recover operational state after a system reboot.

To move from basic chat interactions to fully autonomous **Zero-Human Companies**, we need a stateful coordination layer. This is the exact design flaw that the open-source **Paperclip AI Orchestrator** was built to solve.

## What is the Paperclip AI Orchestrator?

Developed as a stateful Node.js server with an interactive React-based dashboard, Paperclip sits above individual agent runtimes (such as Claude Code, OpenClaw, Codex, or any HTTP-compatible model via OpenRouter). 

Instead of interacting with a single, isolated chatbot, Paperclip allows system architects to model entirely autonomous business structures. It organizes teams of specialized AI agents into structured, hierarchy-driven organizations, assigning each agent specific roles, goals, and token budgets.

For instance, a standard development sprint under Paperclip might coordinate a **CEO Agent** (running on Claude Opus for strategic planning), an **Engineer Agent** (running on Claude Code for software writing), and a **Quality Assurance (QA) Agent** (running on Playwright/Puppeteer for automated browser and endpoint testing).

## Two Structural Solutions to Cognitive Context Decay

To keep these multi-agent organizations stable, Paperclip implements two core features that mitigate context decay and eliminate stateless drift:

### 1. The Heartbeat Check-in System

The Heartbeat is a recurring execution loop that forces the agent to reference a structured checklist before it takes any action. 

Rather than executing blindly in response to a trigger, the agent is forced to:
1. Read its designated role and persona.
2. Review the overarching organizational goals.
3. Review its active assignments and track their progress.
4. Establish a clear, mathematical definition of success before delegating tasks to sub-agents.

This simple self-reflective checkpoint ensures that agents maintain absolute alignment with the business roadmap, regardless of how many asynchronous tasks are running in parallel.

### 2. The PARA Memory System

Storing every single interaction, deployment metric, and codebase log in the active context window is extremely expensive and rapidly dilutes the model’s focus. 

Paperclip solves this using a file-based memory system structured around the **PARA method** (Projects, Areas, Resources, Archives):

*   **Projects**: Active tasks with strict deadlines (e.g., "Deploy Algorand Smart Contract v1.2").
*   **Areas**: Ongoing responsibilities that require constant maintenance (e.g., "Treasury DEX Liquidity Monitoring").
*   **Resources**: Reference materials, API documentations, and tool schemas (e.g., "XRPL Xaman Wallet integration docs").
*   **Archives**: Inactive items from the past, kept for machine-learning pattern recognition and historical audits.

By structuring local agent memories in a hierarchical PARA format, agents can query specific, highly relevant historical data using local file reads without bloating active token counts.

## Scaling the Machine Workforce: The Math of Multi-Agent Verification

Why coordinate teams of agents rather than relying on a single, super-intelligent agent? The answer lies in the mathematics of error compounding.

If a single agent executes a complex sequence of tasks and reviews its own work, the error rate compounds exponentially. Assuming a single agent operates with an accuracy of A_agent per step, an unverified sequence of N steps yields an end-to-end success probability of:

P_success = (A_agent)^N

For a 10-step process where A_agent = 0.90, the overall reliability drops to a mere **34.8%**. 

To counteract this compounding decay, Paperclip introduces an independent **QA Agent** to audit and verify the work at intermediate checkpoints, resetting the error probability. Assuming the QA Agent possesses a verification accuracy of A_qa, the probability of an undetected error slipping through any single step is reduced to:

P_error_undetected = (1 - A_agent) * (1 - A_qa)

If both the Engineer Agent and the QA Agent are 90% accurate, the probability of an error slipping through is slashed to just **1%** (0.10 * 0.10), raising the step reliability to **99%**. This collaborative check-and-balance architecture is what makes autonomous, unattended business execution mathematically viable.

## Aligning Incentives: Token-Gated Infrastructure Access

Access to this stateful orchestrator dashboard is not free. To prevent sybil attacks and align the incentives of the machine workforce with the protocol's long-term utility, Denarii DFi enforces a strict on-chain token gating mechanism.

Users must hold at least **2% of the total supply of the native DFI token** within their connected Web3 wallet (such as Xaman on XRPL, Pera on Algorand, or HashPack on Hedera) to enter the orchestrator dashboard. 

dfi_holding >= 0.02 * total_supply_dfi

This gating mechanism transitions the DFI token from a speculative, trade-only asset into an indispensable key for accessing enterprise-grade cognitive infrastructure. It guarantees that the value of the token is tied directly to the real-world demand for autonomous coordination.

*Explore the open-source code and host your own multi-agent coordinate server today. Visit the official developer portal at denarii-orchestrator.netlify.app and read the self-hosting guide on Contabo VPS.*`
  },
  {
    id: 'economics',
    title: 'The Measurability Gap: The Hidden Math of the $100k/Yr Zero-Human Company',
    category: 'Economics',
    readTime: '6 min read',
    themeColor: 'green',
    summary: 'The economics of enterprise automation. Discover how multi-agent teams directly replace premium SaaS tools and management consultants to slash operating burn rates.',
    rawMarkdown: `# The Measurability Gap: The Hidden Math Behind the $100,000/Year Zero-Human Company

In the modern enterprise, administrative and operational overhead represents a compounding tax on innovation. Traditional corporate structures are essentially structured inefficiencies, requiring layers of middle management, scrum masters, marketing agencies, and premium software subscriptions to coordinate human labor. 

Every delay between strategic intent and operational execution represents economic leakage. 

But as artificial intelligence and decentralized finance converge, the economic equation is changing. Through the **Denarii DFi Control Plane**, businesses are now able to deploy specialized teams of autonomous AI agents to run core corporate functions 24/7, cutting up to **$100,000 in annual operational overhead** while maintaining absolute execution velocity.

To understand why this transition is economically inevitable, we must look at the mathematical model of the **Measurability Gap**.

## Mathematical Modeling of the Measurability Gap

The financial rationale for transitioning to a machine-native workforce can be analyzed through a dual-curve cost model. 

This model compares two distinct financial pathways:
1.  **C_a(t) - The Automation Curve**: The cost to automate cognitive and administrative tasks, which is decaying exponentially due to the rapid advancement of open-source LLMs, API price reductions, and highly optimized multi-chain transactions.
2.  **C_v(t) - The Verification Curve**: The cost of human verification, manual oversight, and biological compliance, which remains bottlenecked by human biological limitations, labor costs, and scheduling latency.

The divergence between these two curves defines the **Measurability Gap (M(t))**:

M(t) = C_v(t) - C_a(t)

As the cost of automation (C_a) drops exponentially below the cost of human verification (C_v), enterprise operators face a massive economic incentive to deploy self-operating, autonomous systems. 

To stabilize these systems and prevent errors in the absence of human eyes, architectures like Paperclip utilize multi-agent verification (resetting compounding error rates with dedicated QA agents), ensuring that autonomous execution is both cheaper and highly reliable.

## The Five Pillars of Enterprise Automation

The Denarii DFi orchestrator addresses this gap by replacing legacy SaaS software, high-priced external agencies, and manual coordination teams with specialized, autonomous agent pipelines. This is structured across **Five Core Pillars of Enterprise Automation**:

### Pillar 1: Social Automation & Brand Campaigning
*   **Legacy Replaced**: HubSpot, Buffer, Hootsuite, PR Agencies, and Social Media Teams.
*   **Core Tasks**: Brand reputation management, competitor sentiment analysis, contextual content distribution, and 24/7 automated customer engagement.
*   **Economic Impact**: Saves up to **$8,120 per month** in management and subscription fees.

### Pillar 2: Automated Smart Contract & Code Audits
*   **Legacy Replaced**: High-cost external security firms and manual smart contract consultants.
*   **Core Tasks**: Continuous scanning of development repositories, reentrancy vulnerability checks, integer overflow/underflow analysis, and access-control verification.
*   **Economic Impact**: Saves **$10,000 to $50,000 per audit run**, transforming security from a slow milestone check to a continuous execution pipeline.

### Pillar 3: Treasury, DEX, and Liquidity Monitoring
*   **Legacy Replaced**: Dune Analytics and Nansen Premium Subscriptions.
*   **Core Tasks**: Real-time Total Value Locked (TVL) tracking, whale wallet movement tracking, oracle price feed peg-drift auditing, and automated multi-chain yield arbitrage.
*   **Economic Impact**: Saves up to **$5,250 per month** in database access fees and accounting overhead.

### Pillar 4: Agent Council Strategic Consultation
*   **Legacy Replaced**: Traditional Management Consulting Firms.
*   **Core Tasks**: Structuring collaborative multi-model juries where different LLM personas debate corporate strategy, tokenomics designs, regulatory compliance risks, and IP roadmaps.
*   **Economic Impact**: Saves upwards of **$50,000+ per year** in advisory fees, delivering balanced, unbiased strategic advice on-demand.

### Pillar 5: Project Ticket & Delegate Orchestration
*   **Legacy Replaced**: JIRA, Asana, Scrum Masters, and Human Operations Teams.
*   **Core Tasks**: Decomposing high-level product goals into granular tickets, matching tasks to specific agent skill profiles, mapping system dependencies, monitoring code velocity, and executing automated refactoring.
*   **Economic Impact**: Saves up to **$100,000+ per year** in project management overhead.

## The Enterprise ROI of Invisible Web3 Infrastructure

*   **Pillar 1: Social Automation**: Saves up to $8,120 / month.
*   **Pillar 2: Code Audits**: Saves $10,000 - $50,000 / audit.
*   **Pillar 3: Treasury Monitoring**: Saves up to $5,250 / month.
*   **Pillar 4: Agent Councils**: Saves up to $50,000+ / year.
*   **Pillar 5: Ticket Orchestration**: Saves up to $100,000+ / year.

By running these five pillars simultaneously below the user interface layer, a Zero-Human Company transitions from a conceptual startup prototype to a lean, hyper-efficient, outcomes-generating machine. 

In this post-interface economy, the competitive advantage belongs to those who eliminate operational friction. When your system can decide and execute at API speed with zero human lag, traditional business operations cease to be competitive.

*Deploy your first autonomous team of administrative and operational agents today. Learn how at info-denarii-orchestrator.netlify.app and step into the post-interface economy.*`
  },
  {
    id: 'security',
    title: 'The Vault: Securing Autonomous Machine-to-Machine Economies',
    category: 'Security',
    readTime: '5 min read',
    themeColor: 'pink',
    summary: 'Hardware secure enclaves, biometric DID trigger loops, and Telegram emergency relays. How to protect autonomous systems from agentic supply-chain risks.',
    rawMarkdown: `# The Vault: Securing Autonomous Machine-to-Machine Economies with Enclaves, Biometrics, and Telegram Oracles

In a machine-to-machine economy, software bugs, execution latency, and security exploits represent direct, unhedged financial liabilities. 

When autonomous AI agents are authorized to manage treasury accounts, allocate capital, and execute cross-chain transactions at API speed, traditional human-centric security measures fail. A human operator cannot react quickly enough to stop a runaway execution loop or intercept an unauthorized asset transfer before it settles on-chain.

To support safe, autonomous business execution, the underlying architecture must move beyond simple multi-signature wallets and implement an integrated cryptographic security system. 

This realization is the foundation of **"The Vault"**—a highly secure, automated cryptographic core where multi-chain assets are stored, secured, and settled entirely by machine logic.

## The Architecture of The Vault

As depicted in the architectural blueprints of Denarii DFi, "The Vault" integrates advanced hardware and cryptographic safeguards to protect autonomous operations from both external exploits and internal deviations:

### 1. Quantum Security Systems & Enclave Shields
Hardware-level enclave shields and post-quantum cryptographic (PQC) algorithms form the first line of defense. The Vault utilizes secure enclaves (isolated hardware components) to store private keys. By running key generation and signature processes in isolated enclaves, the system prevents unauthorized key extraction, memory-scraping attacks, or transaction manipulation—even if the main host operating system is compromised.

### 2. Biometric Blockchain Scanners & Decentralized Identity (DID)
To ensure that human owners maintain ultimate governance, The Vault integrates decentralized identity (DID) standards with biometric hardware scanners. Before executing major state changes (such as large treasury liquidations, modifying token-gating parameters, or altering agent role assignments), the system cryptographically requires a biometric scan from an authorized human administrator, providing a secure, non-spoofable "human-in-the-loop" approval hook.

### 3. The Telegram Command Relay Oracle
To translate off-chain human intent and emergency circuit-breaker commands onto the blockchain without exposing direct APIs to the open web, The Vault utilizes a secure **Telegram Oracle Command Relay**. Authorized administrators can send commands directly through a cryptographically signed Telegram channel. The oracle verifies the cryptographic signature of the sender, translates the intent into secure on-chain instructions, and fires a circuit-breaker to halt agent actions if anomalies are detected.

### 4. AI Gatekeeper Sigils & Encrypted Validator Nodes
Specialized consensus nodes run isolated, audited execution environments to verify transaction validity. These nodes act as "Gatekeepers," validating that the transaction fits the pre-approved operational budget, aligns with the agent’s heartbeat goals, and doesn't violate systemic risk limits before committing the state changes to the XRPL, Algorand, or Hedera blockchains.

## Supply Chain Security and Agentic Vulnerabilities

Despite these cryptographic safeguards, deploying autonomous agents introduces a novel and highly dangerous security vector: **supply chain vulnerabilities**.

In a standard development cycle, AI agents utilize third-party adapters, tools, and code libraries (often referred to as "agent skills") to interact with the external world (e.g., calling social media APIs, reading databases, or querying price feeds). Because these third-party skills frequently run with full local filesystem and network access without standard sandboxing models, they represent a massive security risk. 

A malicious tool update could result in an exploit similar to a compromised NPM package, but with a much larger blast radius—directly leaking API keys, draining wallets, or executing unauthorized transactions.

### How Denarii DFi Mitigates Agentic Supply Chain Risks:

To isolate and secure these execution environments, Denarii DFi and Paperclip implement a three-tiered security posture:

1.  **Secure Enclave Containment**: Running agent runtimes inside isolated, secure enclaves or token-gated Docker containers with zero-privilege defaults.
2.  **Restrictively Scoped API Keys**: Custom API scopes that prevent agents from accessing files, databases, or blockchain transactions outside their designated roles.
3.  **Strict Token-Gated Validation**: Enforcing that any external agent calling the Denarii control plane satisfies the native DFI token-holding check, aligning incentives and shutting out unverified, anonymous scripts.

*To learn more about secure enclave hosting, biometric DID integrations, and The Vault developer schemas, access our security audit logs at info-denarii-orchestrator.netlify.app.*`
  }
];

export default function KnowledgeBase() {
  const [selectedId, setSelectedId] = useState('vision');
  const [copiedId, setCopiedId] = useState(null);
  const [activeTab, setActiveTab] = useState('reader'); // reader | markdown

  const activeArticle = ARTICLES.find(a => a.id === selectedId) || ARTICLES[0];

  useEffect(() => {
    if (!activeArticle) return;
    document.title = `${activeArticle.title} | BM Denarii Platform`;
    
    // Dynamically update meta description
    let descMeta = document.querySelector('meta[name="description"]');
    if (!descMeta) {
      descMeta = document.createElement('meta');
      descMeta.setAttribute('name', 'description');
      document.head.appendChild(descMeta);
    }
    descMeta.setAttribute('content', activeArticle.summary);

    // Dynamically update open graph title
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitle);
    }
    ogTitle.setAttribute('content', activeArticle.title);

    // Dynamically update open graph description
    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (!ogDesc) {
      ogDesc = document.createElement('meta');
      ogDesc.setAttribute('property', 'og:description');
      document.head.appendChild(ogDesc);
    }
    ogDesc.setAttribute('content', activeArticle.summary);
  }, [selectedId]);

  const handleCopy = (id, text) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const colors = {
    cyan: 'border-cyan-500/30 text-cyan-400 bg-cyan-950/10 shadow-[0_0_15px_rgba(6,182,212,0.15)]',
    blue: 'border-blue-500/30 text-blue-400 bg-blue-950/10 shadow-[0_0_15px_rgba(59,130,246,0.15)]',
    green: 'border-emerald-500/30 text-emerald-400 bg-emerald-950/10 shadow-[0_0_15px_rgba(16,185,129,0.15)]',
    pink: 'border-pink-500/30 text-pink-400 bg-pink-950/10 shadow-[0_0_15px_rgba(236,72,153,0.15)]'
  };

  return (
    <section id="knowledge-base" className="py-24 bg-[#0a0a1c] relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 space-y-12">
        
        {/* Header */}
        <div className="text-center">
          <span className="px-3 py-1 rounded-full text-xs font-semibold border bg-indigo-500/10 text-indigo-300 border-indigo-500/20 uppercase tracking-widest inline-block">
            Ecosystem Intelligence
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-4 mb-4 tracking-tight">
            Ecosystem <span className="text-indigo-400">Articles & Blueprints</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Educating developers and courting VCs on the transition from Web3 speculative trading to stateful machine execution layers.
          </p>
        </div>

        {/* Dynamic Reader Block */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* Article Selector (Left Sidebar) */}
          <div className="space-y-4 lg:col-span-1">
            <span className="text-xs font-bold text-gray-500 uppercase tracking-widest block mb-2 px-1">Selected Blueprints</span>
            <div className="space-y-3">
              {ARTICLES.map(art => {
                const isActive = art.id === selectedId;
                return (
                  <button
                    key={art.id}
                    onClick={() => setSelectedId(art.id)}
                    className={`w-full text-left p-5 rounded-2xl border backdrop-blur-xl transition-all duration-300 shadow-md relative overflow-hidden group ${
                      isActive 
                        ? 'bg-white/10 border-indigo-500/40 shadow-indigo-950/20' 
                        : 'bg-white/5 border-white/5 hover:border-white/10 hover:bg-white/10'
                    }`}
                  >
                    {isActive && (
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-500 to-purple-500" />
                    )}
                    <div className="space-y-2">
                      <div className="flex justify-between items-center text-[10px] font-bold text-gray-500 uppercase font-mono tracking-wider">
                        <span>{art.category}</span>
                        <span>{art.readTime}</span>
                      </div>
                      <h4 className={`text-base font-extrabold leading-snug transition-colors group-hover:text-white ${isActive ? 'text-indigo-300' : 'text-slate-200'}`}>
                        {art.title}
                      </h4>
                      <p className="text-xs text-gray-400 line-clamp-2 leading-relaxed">{art.summary}</p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Article Viewer (Right side) */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* View selectors */}
            <div className="bg-white/5 backdrop-blur-md border border-white/5 rounded-2xl p-4 flex justify-between items-center shadow-lg">
              <div className="flex gap-2">
                {[
                  ['reader', 'Reader Mode'],
                  ['markdown', 'Copy Markdown Source']
                ].map(([tab, label]) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all border ${
                      activeTab === tab 
                        ? 'bg-indigo-500/10 text-indigo-300 border-indigo-500/30' 
                        : 'bg-transparent text-gray-400 border-transparent hover:text-white'
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>

              <button
                onClick={() => handleCopy(activeArticle.id, activeArticle.rawMarkdown)}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold border transition-all ${colors[activeArticle.themeColor]}`}
              >
                {copiedId === activeArticle.id ? (
                  <>
                    <svg className="w-3.5 h-3.5 text-green-400 fill-none stroke-current" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>
                    Copied!
                  </>
                ) : (
                  <>
                    <svg className="w-3.5 h-3.5 fill-none stroke-current" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H5.25m11.9-3.664A2.251 2.251 0 0 0 15 2.25h-1.5a2.251 2.251 0 0 0-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M19.5 7.875V18a1.125 1.125 0 0 1-1.125 1.125h-9.75A1.125 1.125 0 0 1 7.5 18V7.875c0-.621.504-1.125 1.125-1.125h9.75c.621 0 1.125.504 1.125 1.125Z" /></svg>
                    Copy Source
                  </>
                )}
              </button>
            </div>

            {/* Content Pane */}
            {activeTab === 'markdown' ? (
              <div className="bg-[#0f0f1a] border border-white/10 rounded-3xl p-6 md:p-8 max-h-[600px] overflow-y-auto font-mono text-[11px] leading-relaxed text-gray-400 select-all whitespace-pre-wrap">
                {activeArticle.rawMarkdown}
              </div>
            ) : (
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-10 max-h-[600px] overflow-y-auto pr-4 select-text shadow-xl space-y-6">
                
                {/* Content rendering based on active id */}
                {selectedId === 'vision' && (
                  <div className="space-y-6 text-sm text-gray-300 leading-relaxed font-medium">
                    <h3 className="text-2xl md:text-3xl font-extrabold text-white leading-tight tracking-tight">
                      Beyond Speculation: Why the Next Web3 Wave is Invisible Execution
                    </h3>
                    <p className="italic text-indigo-300 border-l-2 border-indigo-500 pl-4 font-normal">
                      For over a decade, the core narrative of decentralized ledger technology has been dominated by speculative market activity and platform-centric user interfaces. However, this phase is rapidly yielding to an operational paradigm: the transition from digital assets to digital behaviors.
                    </p>
                    <p>
                      Most market participants still operate under the assumption that Web3 is primarily about tokens, whereas the real innovation is happening at the coordination layer. The internet is evolving from a communication layer into an execution layer, where capital moves differently as systems remove human latency.
                    </p>
                    <p>
                      To support a machine-readable and machine-executable economy, the underlying settlement infrastructure must resolve the blockchain trilemma without compromising on speed, cost, or finality. Architected as a cross-chain control plane, the <strong>Denarii DFi</strong> protocol unifies three distinct ledger architectures—the XRP Ledger (XRPL), Algorand, and Hedera Hashgraph (HBAR)—referred to as the <strong>"Trinity of DLT"</strong>.
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-gray-400 font-normal">
                      <li><strong>XRP Ledger (XRPL)</strong>: high-speed value transfer, native DEX liquidity, and non-custodial Xaman wallet support.</li>
                      <li><strong>Algorand</strong>: pure Proof of Stake mathematical transaction finality, zero fork risk, and standardized asset transfer (ASA ID: 897649551).</li>
                      <li><strong>Hedera Hashgraph</strong>: high-throughput Directed Acyclic Graph (DAG) consensus logging, sub-second latency, and HashPack wallets.</li>
                    </ul>
                  </div>
                )}

                {selectedId === 'tech' && (
                  <div className="space-y-6 text-sm text-gray-300 leading-relaxed font-medium">
                    <h3 className="text-2xl md:text-3xl font-extrabold text-white leading-tight tracking-tight">
                      Solving the "Memento Man" Problem in AI Agent Orchestration
                    </h3>
                    <p className="italic text-indigo-300 border-l-2 border-indigo-500 pl-4 font-normal">
                      One of the most persistent hurdles in multi-agent systems is the statelessness bottleneck. Because standard LLM APIs are stateless, an agent loses its operational history and situational context between API calls, waking up with capabilities but zero memory of its previous actions.
                    </p>
                    <p>
                      Paperclip addresses this by serving as a stateful coordination layer that sits above individual agent runtimes (such as Claude Code, OpenClaw, Codex, or OpenRouter), organizing teams of specialized AI agents (CEO Agent running Claude Opus, Engineer Agent running Claude Code, and QA Agent running Playwright) into structured organizations.
                    </p>
                    <h4 className="text-lg font-bold text-white pt-2">Two Structural Solutions to Context Decay</h4>
                    <p>
                      1. <strong>The Heartbeat Check-in System</strong>: A recurring loop that forces the agent to read its persona, review organizational goals, track active assignments, and establish a clear definition of success before delegating tasks.
                    </p>
                    <p>
                      2. <strong>The PARA Memory System</strong>: A file-based memory system structured around Projects, Areas, Resources, and Archives. Prevents active context window bloating while preserving deployment metrics across reboots.
                    </p>
                  </div>
                )}

                {selectedId === 'economics' && (
                  <div className="space-y-6 text-sm text-gray-300 leading-relaxed font-medium">
                    <h3 className="text-2xl md:text-3xl font-extrabold text-white leading-tight tracking-tight">
                      The Measurability Gap: The Hidden Math of the $100k/Yr Zero-Human Company
                    </h3>
                    <p className="italic text-indigo-300 border-l-2 border-indigo-500 pl-4 font-normal">
                      To replace traditional corporate structures, the Denarii DFi Orchestrator replaces legacy SaaS tools, manual administrative agencies, and operational platforms, cutting up to $100,000 in operational overhead while maintaining continuous execution.
                    </p>
                    <p>
                      This economic shift is represented by the <strong>Measurability Gap</strong>: comparing the exponentially decaying cost to automate cognitive tasks (C_a) against the biologically bottlenecked cost of human verification (C_v).
                    </p>
                    <div className="bg-[#0f0f1a] border border-white/10 text-emerald-400 text-center font-mono py-2 rounded text-xs">
                      Measurability Gap: M(t) = C_v(t) - C_a(t)
                    </div>
                    <p>
                      The orchestrator automates corporate divisions across <strong>Five Operational Pillars</strong>: Safe X Campaigning ($8,120/mo savings), Continuous Code Audits ($10k-$50k/audit savings), Treasury Monitoring ($5,250/mo savings), Strategic Councils ($50k/yr savings), and Ticket/Sprint Orchestration ($100k/yr savings).
                    </p>
                  </div>
                )}

                {selectedId === 'security' && (
                  <div className="space-y-6 text-sm text-gray-300 leading-relaxed font-medium">
                    <h3 className="text-2xl md:text-3xl font-extrabold text-white leading-tight tracking-tight">
                      The Vault: Securing Autonomous Machine-to-Machine Economies
                    </h3>
                    <p className="italic text-indigo-300 border-l-2 border-indigo-500 pl-4 font-normal">
                      As value flows to systems that eliminate human latency, the user interface represents a form of economic friction. The concept design titled "The Vault" represents the realization of a secure, automated cryptographic core where assets are stored, secured, and settled entirely by machine logic.
                    </p>
                    <p>
                      To protect these multi-chain assets, The Vault integrates:
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-gray-400 font-normal">
                      <li><strong>Quantum Security Systems</strong>: Hardware-level enclave shields to prevent key extraction.</li>
                      <li><strong>Biometric DID Scanners</strong>: Cryptographic biometric scan validations before major state changes.</li>
                      <li><strong>Telegram Oracle Integration</strong>: A secure Command Relay Oracle translating off-chain human intent and circuit breakers into on-chain instructions.</li>
                      <li><strong>AI Gatekeeper Sigils</strong>: Encrypted validator nodes verifying transaction validity under isolated secure environments.</li>
                    </ul>
                  </div>
                )}

                <div className="pt-6 border-t border-white/10 text-center text-xs text-gray-500">
                  Published in the BM Denarii Developer Hub | Powered by Denarii DFi
                </div>
              </div>
            )}
            
          </div>
        </div>

      </div>
    </section>
  );
}
