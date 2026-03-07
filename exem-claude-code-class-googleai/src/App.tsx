import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Code2, Cpu, Globe, Zap, ChevronRight, CheckCircle2, ArrowRight, Play, Github, Twitter, MessageSquare, Menu, X } from 'lucide-react';

function App() {
  const [activeTab, setActiveTab] = useState('overview');
  const [isScrolled, setIsScrolled] = useState(false);
  const [os, setOs] = useState<'mac' | 'windows'>('mac');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    
    // Detect OS
    if (navigator.userAgent.indexOf('Win') !== -1) setOs('windows');
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      icon: <Terminal className="w-6 h-6 text-emerald-400" />,
      title: "터미널에서 바로 실행",
      desc: "브라우저를 열 필요 없이 터미널에서 즉시 Claude와 대화하세요."
    },
    {
      icon: <Code2 className="w-6 h-6 text-blue-400" />,
      title: "코드베이스 완벽 이해",
      desc: "프로젝트 전체의 컨텍스트를 파악하고 정확한 코드를 제안합니다."
    },
    {
      icon: <Zap className="w-6 h-6 text-amber-400" />,
      title: "자동화된 작업 처리",
      desc: "테스트 작성, 리팩토링, 버그 수정을 명령어 하나로 해결하세요."
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100 font-sans selection:bg-emerald-500/30">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-400 to-cyan-500 flex items-center justify-center">
              <Terminal className="w-5 h-5 text-black" />
            </div>
            <span className="font-bold text-xl tracking-tight">Claude Code</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
            <a href="#features" className="hover:text-white transition-colors">기능</a>
            <a href="#guide" className="hover:text-white transition-colors">시작하기</a>
            <a href="#examples" className="hover:text-white transition-colors">활용 사례</a>
            <button className="bg-white text-black px-5 py-2.5 rounded-full hover:bg-zinc-200 transition-colors font-semibold">
              설치하기
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-zinc-400 hover:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-[#111] border-b border-white/10 px-6 py-4 flex flex-col gap-4"
            >
              <a href="#features" className="text-zinc-400 hover:text-white py-2" onClick={() => setIsMobileMenuOpen(false)}>기능</a>
              <a href="#guide" className="text-zinc-400 hover:text-white py-2" onClick={() => setIsMobileMenuOpen(false)}>시작하기</a>
              <a href="#examples" className="text-zinc-400 hover:text-white py-2" onClick={() => setIsMobileMenuOpen(false)}>활용 사례</a>
              <button className="bg-white text-black px-5 py-3 rounded-xl hover:bg-zinc-200 transition-colors font-semibold w-full mt-2">
                설치하기
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-emerald-400 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Claude Code is now available in public beta
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-tight"
          >
            터미널에서 만나는 <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">
              가장 강력한 AI 코딩 어시스턴트
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-zinc-400 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Claude Code는 당신의 로컬 환경에서 직접 코드를 읽고, 이해하고, 작성합니다. 
            이제 브라우저를 오갈 필요 없이 터미널 안에서 모든 개발을 완성하세요.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button className="w-full sm:w-auto bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-zinc-200 transition-all flex items-center justify-center gap-2 group">
              <Terminal className="w-5 h-5" />
              지금 바로 설치하기
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="w-full sm:w-auto px-8 py-4 rounded-full font-semibold border border-white/20 hover:bg-white/5 transition-all flex items-center justify-center gap-2">
              <Play className="w-5 h-5" />
              데모 영상 보기
            </button>
          </motion.div>
        </div>
      </section>

      {/* Terminal Preview */}
      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden border border-white/10 bg-[#1e1e1e] shadow-2xl"
          >
            {/* Terminal Header */}
            <div className="flex items-center px-4 py-3 bg-[#2d2d2d] border-b border-white/5">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="mx-auto text-xs text-zinc-400 font-mono">claude-code — bash</div>
            </div>
            {/* Terminal Body */}
            <div className="p-6 font-mono text-sm md:text-base leading-relaxed overflow-x-auto">
              <div className="text-emerald-400 mb-2">$ claude</div>
              <div className="text-zinc-300 mb-6">Welcome to Claude Code! How can I help you today?</div>
              
              <div className="text-emerald-400 mb-2">$ <span className="text-white">이 프로젝트에서 인증 관련 로직이 어디에 있는지 찾아주고, JWT 토큰 만료 시간을 2시간으로 늘려줘.</span></div>
              <div className="text-zinc-400 mb-2">🔍 Searching codebase for authentication logic...</div>
              <div className="text-zinc-400 mb-2">📄 Found auth logic in <span className="text-blue-400">src/services/auth.ts</span></div>
              <div className="text-zinc-400 mb-4">⚙️ Updating JWT expiration time...</div>
              
              <div className="bg-[#2d2d2d] p-4 rounded-lg mb-4 border border-white/5">
                <div className="text-red-400 line-through">- const TOKEN_EXPIRY = '1h';</div>
                <div className="text-green-400">+ const TOKEN_EXPIRY = '2h';</div>
              </div>
              
              <div className="text-zinc-300">✅ Updated JWT expiration to 2 hours in src/services/auth.ts. Would you like me to run the tests to verify this change?</div>
              <div className="text-emerald-400 mt-4 animate-pulse">_</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-24 px-6 bg-zinc-900/50 border-y border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">개발의 새로운 패러다임</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">Claude Code는 단순한 챗봇이 아닙니다. 당신의 로컬 환경에서 직접 코드를 실행하고 테스트하는 진정한 페어 프로그래머입니다.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Step-by-Step Guide */}
      <section id="guide" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">5분이면 준비 끝</h2>
            <p className="text-zinc-400">복잡한 설정 없이 명령어 몇 줄이면 바로 시작할 수 있습니다.</p>
          </div>

          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-white/5 p-1 rounded-xl border border-white/10">
              <button 
                onClick={() => setOs('mac')}
                className={`px-6 py-2 rounded-lg text-sm font-medium transition-colors ${os === 'mac' ? 'bg-white text-black' : 'text-zinc-400 hover:text-white'}`}
              >
                macOS
              </button>
              <button 
                onClick={() => setOs('windows')}
                className={`px-6 py-2 rounded-lg text-sm font-medium transition-colors ${os === 'windows' ? 'bg-white text-black' : 'text-zinc-400 hover:text-white'}`}
              >
                Windows
              </button>
            </div>
          </div>

          <div className="space-y-8">
            <AnimatePresence mode="wait">
              {[
                { 
                  title: "Cursor 설치", 
                  desc: "Claude Code를 실행할 에디터입니다. 다운로드 후 설치를 완료하세요.",
                  code: null,
                  tip: "✓ 유료 결제는 걱정하지 마세요. 무료 버전으로 충분합니다.",
                  image: null
                },
                { 
                  title: "터미널 열기", 
                  desc: os === 'mac' ? "Cursor 안에서 터미널을 엽니다. (Cmd+J)" : "Cursor 안에서 터미널을 엽니다. (Ctrl+J)",
                  code: null,
                  tip: "✓ 화면 하단에 검은 배경의 터미널 창이 뜨면 성공입니다.",
                  image: "/images/step2.png"
                },
                { 
                  title: "Git 설치 확인", 
                  desc: "터미널에 아래 명령어를 입력해 Git이 설치되어 있는지 확인하세요.",
                  code: "git --version",
                  tip: "✓ git version 2.x.x 형식의 버전 번호가 뜨면 성공입니다.",
                  image: "/images/step3.png",
                  imageOverlay: [
                    { top: '61.5%', left: '0%', width: '27%', height: '4%' },
                    { top: '66.5%', left: '0%', width: '27%', height: '4%' }
                  ]
                },
                { 
                  title: "Node.js 설치 확인", 
                  desc: "터미널에 아래 명령어를 입력해 Node.js가 설치되어 있는지 확인하세요.",
                  code: "node --version",
                  tip: "✓ v18.x.x 이상의 버전 번호가 뜨면 성공입니다.",
                  image: "/images/step4.png",
                  imageOverlay: [
                    { top: '61.5%', left: '0%', width: '27%', height: '4%' },
                    { top: '66.5%', left: '0%', width: '27%', height: '4%' },
                    { top: '71.5%', left: '0%', width: '27%', height: '4%' }
                  ]
                },
                { 
                  title: "Claude Code 설치", 
                  desc: "터미널에 아래 명령어를 복사하여 붙여넣고 실행하세요.",
                  code: "npm install -g @anthropic-ai/claude-code",
                  tip: "✓ 1~2분 걸릴 수 있습니다. 화면에 텍스트가 쭉 지나가는 건 정상이에요.",
                  image: null
                },
                { 
                  title: "Claude 로그인", 
                  desc: "터미널에 claude를 입력하면 브라우저가 열리며 로그인 화면이 나타납니다.",
                  code: "claude",
                  tip: "✓ Pro 계정으로 로그인 후 터미널로 돌아오면 준비 완료!",
                  image: null
                }
              ].map((step, i) => (
                <motion.div 
                  key={`${os}-${i}`}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-6"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold border border-emerald-500/30 shrink-0">
                      {i + 1}
                    </div>
                    {i !== 5 && <div className="w-px h-full bg-white/10 my-2" />}
                  </div>
                  <div className="pb-8 w-full">
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-zinc-400 mb-4">{step.desc}</p>
                    
                    {step.image && (
                      <div className="mb-4 rounded-xl overflow-hidden border border-white/10 bg-zinc-800/50 relative">
                        <img src={step.image} alt={step.title} className="w-full h-auto opacity-80 hover:opacity-100 transition-opacity" referrerPolicy="no-referrer" />
                        {/* @ts-ignore */}
                        {step.imageOverlay && step.imageOverlay.map((overlay, idx) => (
                          <div 
                            key={idx} 
                            className="absolute bg-[#181818] z-10" 
                            style={{ 
                              top: overlay.top, 
                              left: overlay.left, 
                              width: overlay.width, 
                              height: overlay.height 
                            }} 
                          />
                        ))}
                      </div>
                    )}
                    
                    {step.code && (
                      <div className="bg-[#1e1e1e] rounded-lg p-4 font-mono text-sm border border-white/10 flex justify-between items-center group mb-3">
                        <span className="text-emerald-400">$ <span className="text-white">{step.code}</span></span>
                        <button 
                          className="text-zinc-500 hover:text-white opacity-0 group-hover:opacity-100 transition-all"
                          onClick={() => navigator.clipboard.writeText(step.code as string)}
                        >
                          복사
                        </button>
                      </div>
                    )}
                    
                    <div className="flex items-start gap-2 text-sm text-emerald-400/80 bg-emerald-500/10 p-3 rounded-lg border border-emerald-500/20">
                      <span>{step.tip}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/10 bg-[#050505]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Terminal className="w-5 h-5 text-emerald-400" />
            <span className="font-bold tracking-tight">Claude Code Guide</span>
          </div>
          
          <div className="flex items-center gap-6 text-zinc-500">
            <a href="#" className="hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
            <a href="#" className="hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
            <a href="#" className="hover:text-white transition-colors"><MessageSquare className="w-5 h-5" /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
