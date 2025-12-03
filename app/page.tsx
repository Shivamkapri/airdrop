'use client';

import { useState, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef } from 'react';
import {
  Shield,
  Zap,
  Lock,
  Terminal,
  Layers,
  TrendingUp,
  Fingerprint,
  Eye,
  Globe,
  Server,
  Database,
  Cpu,
  ChevronRight,
  CheckCircle2,
} from 'lucide-react';

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [terminalText, setTerminalText] = useState('');
  const heroRef = useRef(null);
  const featuresRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });
  const featuresInView = useInView(featuresRef, { once: true });

  useEffect(() => {
    setMounted(true);
  }, []);

  // Typewriter effect for hero
  useEffect(() => {
    if (mounted) {
      const text = 'SYSTEM SECURE. AIRDROPS VERIFIED.';
      let index = 0;
      const interval = setInterval(() => {
        if (index <= text.length) {
          setTerminalText(text.slice(0, index));
          index++;
        } else {
          clearInterval(interval);
        }
      }, 80);
      return () => clearInterval(interval);
    }
  }, [mounted]);

  const liveFeedData = [
    'User 0x7a8f...3d2c just earned 500 points',
    'User 0x9b4e...1f8a claimed 1,200 tokens',
    'User 0x2c6d...7e9b completed verification',
    'User 0x5f1a...4c3e just earned 750 points',
    'User 0x8d2b...6a1f claimed 2,000 tokens',
    'User 0x3e7c...9d4a completed security scan',
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Animated Grid Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0a0a0a_1px,transparent_1px),linear-gradient(to_bottom,#0a0a0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]" />
        <motion.div
          className="absolute inset-0 bg-[linear-gradient(to_right,#0ea5e933_1px,transparent_1px),linear-gradient(to_bottom,#0ea5e933_1px,transparent_1px)] bg-[size:4rem_4rem]"
          animate={{
            backgroundPosition: ['0px 0px', '64px 64px'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </div>

      {/* Navbar */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/30 border-b border-cyan-500/20"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Terminal className="w-8 h-8 text-cyan-400" />
            <span className="text-2xl font-bold font-mono tracking-wider">
              <span className="text-cyan-400">&lt;</span>
              AirDropHub
              <span className="text-cyan-400">/&gt;</span>
            </span>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative px-6 py-3 font-mono font-semibold text-black bg-cyan-400 rounded-lg overflow-hidden group"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400"
              animate={{
                x: ['-100%', '100%'],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
            <span className="relative z-10 flex items-center gap-2">
              <Lock className="w-4 h-4" />
              Connect Wallet
            </span>
            <motion.div
              className="absolute inset-0 opacity-0 group-hover:opacity-100"
              style={{
                boxShadow: '0 0 20px rgba(6, 182, 212, 0.8), 0 0 40px rgba(6, 182, 212, 0.4)',
              }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6"
          >
            <div className="inline-block px-4 py-2 border border-cyan-500/50 rounded-full bg-cyan-500/10 mb-8">
              <span className="text-cyan-400 font-mono text-sm flex items-center gap-2">
                <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                SECURITY PROTOCOL ACTIVE
              </span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0 }}
            animate={heroInView ? { opacity: 1 } : {}}
            className="text-6xl md:text-8xl font-black mb-6 tracking-tight"
            style={{
              fontFamily: 'monospace',
              textShadow: '0 0 30px rgba(6, 182, 212, 0.5)',
            }}
          >
            <span className="text-cyan-400">{terminalText}</span>
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              className="text-cyan-400"
            >
              |
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto"
          >
            The only platform with{' '}
            <span className="text-cyan-400 font-semibold">military-grade anti-bot protection</span>.
            <br />
            Real users. Real rewards. Zero fraud.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative px-8 py-4 font-mono font-bold text-lg bg-cyan-500 text-black rounded-lg overflow-hidden group"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Launch Campaign
                <ChevronRight className="w-5 h-5" />
              </span>
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100"
                style={{
                  boxShadow: '0 0 30px rgba(6, 182, 212, 0.9), 0 0 60px rgba(6, 182, 212, 0.6)',
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 font-mono font-bold text-lg border-2 border-cyan-500 text-cyan-400 rounded-lg hover:bg-cyan-500/10 transition-colors"
            >
              View Security Docs
            </motion.button>
          </motion.div>

          {/* Floating Stats */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-3 gap-8 mt-20 max-w-3xl mx-auto"
          >
            {[
              { value: '99.9%', label: 'Bot Detection' },
              { value: '2.4M+', label: 'Protected Users' },
              { value: '<0.1s', label: 'Verification Time' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-xl backdrop-blur-sm"
              >
                <div className="text-3xl font-bold text-cyan-400 font-mono">{stat.value}</div>
                <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Hacker Terminal Section */}
      <section className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold font-mono mb-4">
              <span className="text-cyan-400">[ANTI-FRAUD SYSTEM]</span>
            </h2>
            <p className="text-xl text-gray-400">6-Layer Protection Matrix</p>
          </motion.div>

          {/* Terminal Window */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="bg-black border-2 border-cyan-500/50 rounded-xl overflow-hidden shadow-[0_0_50px_rgba(6,182,212,0.3)]">
              {/* Terminal Header */}
              <div className="bg-gradient-to-r from-cyan-950 to-blue-950 px-4 py-3 flex items-center justify-between border-b border-cyan-500/50">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <span className="text-cyan-400 font-mono text-sm">security_protocol.sh</span>
                <div className="w-20" />
              </div>

              {/* Terminal Content */}
              <div className="p-6 font-mono text-sm space-y-2">
                <TerminalLine text="$ ./run_security_scan.sh --mode=realtime" delay={0} />
                <TerminalLine text="[INFO] Initializing 6-Layer Protection Matrix..." delay={0.3} />
                <TerminalLine text="" delay={0.5} />
                
                <TerminalLine 
                  text="[✓] Layer 1: IP Fingerprint Analysis.......... COMPLETE" 
                  delay={0.7}
                  color="text-green-400"
                />
                <TerminalLine 
                  text="[✓] Layer 2: Wallet Behavior Tracking......... COMPLETE" 
                  delay={0.9}
                  color="text-green-400"
                />
                <TerminalLine 
                  text="[✓] Layer 3: Device Fingerprinting............ COMPLETE" 
                  delay={1.1}
                  color="text-green-400"
                />
                <TerminalLine 
                  text="[✓] Layer 4: Transaction Pattern Analysis..... COMPLETE" 
                  delay={1.3}
                  color="text-green-400"
                />
                <TerminalLine 
                  text="[✓] Layer 5: ML Bot Detection.................. COMPLETE" 
                  delay={1.5}
                  color="text-green-400"
                />
                <TerminalLine 
                  text="[✓] Layer 6: Real-time Threat Monitoring...... COMPLETE" 
                  delay={1.7}
                  color="text-green-400"
                />
                
                <TerminalLine text="" delay={1.9} />
                <TerminalLine 
                  text="[SCAN] Detected suspicious activity from 0xf4ke...b0t1" 
                  delay={2.1}
                  color="text-yellow-400"
                />
                <TerminalLine 
                  text="[ACTION] Analyzing threat vector..." 
                  delay={2.3}
                  color="text-yellow-400"
                />
                <TerminalLine 
                  text="[BLOCKED] Access Denied - Bot signature confirmed" 
                  delay={2.5}
                  color="text-red-400"
                />
                <TerminalLine text="" delay={2.7} />
                <TerminalLine 
                  text="[SUCCESS] System secure. All legitimate users verified." 
                  delay={2.9}
                  color="text-cyan-400"
                />
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 3.1, duration: 0.5 }}
                  className="flex items-center gap-2 text-cyan-400"
                >
                  <span>$</span>
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                  >
                    _
                  </motion.span>
                </motion.div>
              </div>
            </div>

            {/* Glowing effect */}
            <div className="absolute inset-0 -z-10 blur-3xl opacity-30">
              <div className="absolute inset-0 bg-cyan-500" />
            </div>
          </motion.div>

          {/* Protection Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid md:grid-cols-3 gap-6 mt-16"
          >
            {[
              {
                icon: Fingerprint,
                title: 'Wallet Fingerprint',
                desc: 'Unique identity tracking per wallet',
              },
              {
                icon: Eye,
                title: 'IP Analysis',
                desc: 'Geographic and network pattern detection',
              },
              {
                icon: Cpu,
                title: 'ML Detection',
                desc: 'AI-powered bot behavior recognition',
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, borderColor: 'rgba(6, 182, 212, 0.8)' }}
                className="p-6 bg-black/50 border border-cyan-500/30 rounded-xl backdrop-blur-sm hover:shadow-[0_0_30px_rgba(6,182,212,0.3)] transition-all"
              >
                <feature.icon className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-bold font-mono text-cyan-400 mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section ref={featuresRef} className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={featuresInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold font-mono mb-4">
              <span className="text-cyan-400">[CORE SYSTEMS]</span>
            </h2>
            <p className="text-xl text-gray-400">Enterprise-Grade Infrastructure</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Shield,
                title: 'Zero-Trust Security',
                description: 'Every transaction verified through multiple validation layers',
                features: ['End-to-end encryption', 'Immutable audit logs', 'Real-time monitoring'],
              },
              {
                icon: Zap,
                title: 'Instant Distribution',
                description: 'Lightning-fast token distribution with sub-second confirmation',
                features: ['Batch processing', 'Gas optimization', 'Auto-retry logic'],
              },
              {
                icon: Database,
                title: 'Smart Analytics',
                description: 'Deep insights into campaign performance and user behavior',
                features: ['Real-time dashboards', 'Conversion tracking', 'ROI optimization'],
              },
              {
                icon: Layers,
                title: 'Multi-Chain Support',
                description: 'Deploy campaigns across multiple blockchain networks',
                features: ['Ethereum, BSC, Polygon', 'Cross-chain bridges', 'Unified interface'],
              },
              {
                icon: Server,
                title: 'High Availability',
                description: '99.99% uptime with redundant infrastructure',
                features: ['Load balancing', 'Auto-scaling', 'Disaster recovery'],
              },
              {
                icon: TrendingUp,
                title: 'Growth Tools',
                description: 'Built-in marketing and community growth features',
                features: ['Referral systems', 'Social integration', 'Reward tiers'],
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.03 }}
                className="group relative p-8 bg-gradient-to-br from-black to-cyan-950/20 border border-cyan-500/30 rounded-xl hover:border-cyan-400 transition-all duration-300"
              >
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 rounded-xl"
                  style={{
                    boxShadow: 'inset 0 0 30px rgba(6, 182, 212, 0.2)',
                  }}
                  transition={{ duration: 0.3 }}
                />
                
                <feature.icon className="w-14 h-14 text-cyan-400 mb-4 relative z-10" />
                <h3 className="text-2xl font-bold font-mono mb-3 text-white relative z-10">
                  {feature.title}
                </h3>
                <p className="text-gray-400 mb-4 relative z-10">{feature.description}</p>
                
                <ul className="space-y-2 relative z-10">
                  {feature.features.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-500">
                      <CheckCircle2 className="w-4 h-4 text-cyan-500" />
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Hover glow effect */}
                <motion.div
                  className="absolute inset-0 -z-10 blur-2xl opacity-0 group-hover:opacity-20 rounded-xl"
                  style={{ background: 'radial-gradient(circle, #06b6d4 0%, transparent 70%)' }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Feed Ticker */}
      <section className="relative py-16 overflow-hidden border-y border-cyan-500/30 bg-cyan-950/10">
        <div className="flex items-center gap-4 mb-4 px-6">
          <div className="flex items-center gap-2">
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-3 h-3 bg-cyan-400 rounded-full"
            />
            <span className="text-cyan-400 font-mono font-bold">LIVE ACTIVITY FEED</span>
          </div>
        </div>

        <div className="relative">
          <motion.div
            animate={{ x: ['0%', '-50%'] }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="flex gap-8 whitespace-nowrap"
          >
            {[...liveFeedData, ...liveFeedData, ...liveFeedData].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 px-6 py-3 bg-black/50 border border-cyan-500/30 rounded-lg backdrop-blur-sm"
              >
                <CheckCircle2 className="w-5 h-5 text-green-400" />
                <span className="text-gray-300 font-mono text-sm">{item}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative p-12 bg-gradient-to-br from-cyan-950/50 to-blue-950/50 border-2 border-cyan-500/50 rounded-2xl backdrop-blur-sm"
          >
            <motion.div
              className="absolute inset-0 rounded-2xl"
              style={{
                boxShadow: '0 0 100px rgba(6, 182, 212, 0.3)',
              }}
            />
            
            <h2 className="text-4xl md:text-5xl font-bold font-mono mb-6">
              <span className="text-cyan-400">Ready to Launch?</span>
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Join thousands of projects running secure, bot-free airdrop campaigns
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative px-12 py-5 font-mono font-bold text-xl bg-cyan-500 text-black rounded-xl overflow-hidden group"
            >
              <span className="relative z-10 flex items-center justify-center gap-3">
                <Terminal className="w-6 h-6" />
                Initialize Campaign
                <ChevronRight className="w-6 h-6" />
              </span>
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100"
                style={{
                  boxShadow: '0 0 40px rgba(6, 182, 212, 1), 0 0 80px rgba(6, 182, 212, 0.6)',
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-cyan-500/30 py-12 px-6 bg-black/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <Terminal className="w-6 h-6 text-cyan-400" />
              <span className="text-xl font-bold font-mono">
                <span className="text-cyan-400">&lt;</span>
                AirDropHub
                <span className="text-cyan-400">/&gt;</span>
              </span>
            </div>

            <div className="flex gap-8 text-sm text-gray-400 font-mono">
              <a href="#" className="hover:text-cyan-400 transition-colors">Documentation</a>
              <a href="#" className="hover:text-cyan-400 transition-colors">API</a>
              <a href="#" className="hover:text-cyan-400 transition-colors">Security</a>
              <a href="#" className="hover:text-cyan-400 transition-colors">Support</a>
            </div>

            <div className="text-sm text-gray-500 font-mono">
              © 2025 AirDropHub. All systems operational.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Terminal Line Component with Typewriter Effect
function TerminalLine({ 
  text, 
  delay = 0, 
  color = 'text-gray-300' 
}: { 
  text: string; 
  delay?: number; 
  color?: string;
}) {
  const [displayText, setDisplayText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const startDelay = setTimeout(() => {
      let index = 0;
      const interval = setInterval(() => {
        if (index <= text.length) {
          setDisplayText(text.slice(0, index));
          index++;
        } else {
          setIsComplete(true);
          clearInterval(interval);
        }
      }, 20);

      return () => clearInterval(interval);
    }, delay * 1000);

    return () => clearTimeout(startDelay);
  }, [text, delay]);

  return (
    <div className={`${color}`}>
      {displayText}
      {!isComplete && text && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.5, repeat: Infinity }}
        >
          _
        </motion.span>
      )}
    </div>
  );
}
