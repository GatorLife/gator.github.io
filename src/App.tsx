import image_b9526276f1759d5b64ada77efdb6319a43137d14 from 'figma:asset/b9526276f1759d5b64ada77efdb6319a43137d14.png';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import gatorLogo from 'figma:asset/b9526276f1759d5b64ada77efdb6319a43137d14.png';
import { Card } from './components/ui/card';
import { Badge } from './components/ui/badge';
import { Mail, Globe, Calendar, MapPin, Shield, BarChart3, Bot, Settings, Zap, Eye, Cpu } from 'lucide-react';

export default function App() {
  const exportToPDF = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();
    
    // Use setTimeout to break out of the React event loop
    setTimeout(() => {
      try {
        const element = document.getElementById('app-root');
        
        if (element && window.html2pdf) {
          console.log('📄 Generating PDF...');
          window.html2pdf().from(element).set({
            margin: 0.5,
            filename: 'GATOR_Flyer.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
          }).save();
          
          // Show success message
          setTimeout(() => {
            alert('PDF export initiated! Check your downloads folder for GATOR_Flyer.pdf');
          }, 1000);
        } else {
          console.error('PDF export dependencies not available');
          alert('PDF export is currently unavailable. Please try again later.');
        }
      } catch (error) {
        console.error('Error exporting PDF:', error);
        alert('PDF export failed. Please try again later.');
      }
    }, 100);
  };

  return (
    <div id="app-root" className="min-h-screen bg-black text-white">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-black via-gray-900 to-black py-8 px-6 text-center border-b border-green-500/30">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-[#00FF66] mb-2">
            GATOR: Generative AI Training and Operational Readiness
          </h1>
          <p className="text-xl text-gray-300">
            Prove your cyber teams are mission-ready.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img 
              src={image_b9526276f1759d5b64ada77efdb6319a43137d14} 
              alt="GATOR Logo" 
              className="w-full max-w-xs mx-auto mb-6 filter drop-shadow-lg"
            />
            <div className="text-center">

            </div>
          </div>
          
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white">
              Objective Readiness Metrics, Not Gut Feelings
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              Close the gaps: Unknown readiness. Drifting standards. Speed of threats. GATOR grades real operator actions with AI-powered objectivity.
            </p>
            <div className="flex flex-wrap gap-3">
              <Badge className="bg-[#00FF66]/20 text-[#00FF66] border border-[#00FF66]/30 text-[14px]">
                GAO-Aligned Metrics
              </Badge>
              <Badge className="bg-[#00FF66]/20 text-[#00FF66] border border-[#00FF66]/30 text-[14px]">
                JQR/JCT&CS Compliant
              </Badge>
              <Badge className="bg-[#00FF66]/20 text-[#00FF66] border border-[#00FF66]/30 text-[14px]">
                60-90 Day Pilot Ready
              </Badge>
            </div>
          </div>
        </div>

        {/* Key Value Props - 2x2 Grid */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-12 text-[#00FF66]">
            How GATOR Turns 'I Think' Into 'I Know'
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gray-900/50 border-gray-700 p-6 hover:border-[#00FF66]/50 transition-colors">
              <div className="flex items-start space-x-4">
                <div className="bg-[#00FF66]/20 p-3 rounded-lg">
                  <Settings className="w-6 h-6 text-[#00FF66]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Environment Generation</h3>
                  <p className="text-gray-300">
                    Adaptive ranges aligned to JQR/JCT&CS. Living scenarios that evolve with operators.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="bg-gray-900/50 border-gray-700 p-6 hover:border-[#00FF66]/50 transition-colors">
              <div className="flex items-start space-x-4">
                <div className="bg-[#00FF66]/20 p-3 rounded-lg">
                  <Bot className="w-6 h-6 text-[#00FF66]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">AI Evaluator Chatbot</h3>
                  <p className="text-gray-300">
                    Objective grading of operator actions. Eliminates examiner variance.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="bg-gray-900/50 border-gray-700 p-6 hover:border-[#00FF66]/50 transition-colors">
              <div className="flex items-start space-x-4">
                <div className="bg-[#00FF66]/20 p-3 rounded-lg">
                  <BarChart3 className="w-6 h-6 text-[#00FF66]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Automated Reporting & Insights</h3>
                  <p className="text-gray-300">
                    Commander dashboards with role-based truth data. GAO-compliant readiness metrics.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="bg-gray-900/50 border-gray-700 p-6 hover:border-[#00FF66]/50 transition-colors">
              <div className="flex items-start space-x-4">
                <div className="bg-[#00FF66]/20 p-3 rounded-lg">
                  <Shield className="w-6 h-6 text-[#00FF66]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Secure & Enclave-Ready</h3>
                  <p className="text-gray-300">
                    SIPR/JWICS ready. On-prem LLMs. Zero PII. Feeds JCC2-R.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Why Attend Section */}
        <div className="mb-16">
          <Card className="bg-gray-900/50 bg-gradient-to-r from-[#00FF66]/10 to-[#00FF66]/5 border-[#00FF66]/30 p-8">
            <h2 className="text-2xl font-bold text-[#00FF66] mb-6 text-center">
              What Commanders Get in 90 Seconds
            </h2>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="flex justify-center mb-4">
                  <div className="bg-[#00FF66]/20 p-3 rounded-lg">
                    <Zap className="w-8 h-8 text-[#00FF66]" />
                  </div>
                </div>
                <p className="text-white">
                  Defensible readiness data, not anecdotes
                </p>
              </div>
              <div>
                <div className="flex justify-center mb-4">
                  <div className="bg-[#00FF66]/20 p-3 rounded-lg">
                    <Eye className="w-8 h-8 text-[#00FF66]" />
                  </div>
                </div>
                <p className="text-white">
                  Squadron comparability via objective metrics
                </p>
              </div>
              <div>
                <div className="flex justify-center mb-4">
                  <div className="bg-[#00FF66]/20 p-3 rounded-lg">
                    <Cpu className="w-8 h-8 text-[#00FF66]" />
                  </div>
                </div>
                <p className="text-white">
                  Faster OODA loop with predictive insights
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Event Details */}
        <div className="bg-gradient-to-r from-gray-900 to-black border-2 border-[#00FF66] rounded-lg p-4">
          <div className="grid grid-cols-3 gap-6 items-center">
            <div className="text-center">
              <p className="font-medium text-white">Cole Russell</p>
              <p className="text-sm text-gray-300">USAF Reserve Officer & GATOR Founder</p>
            </div>
            
            <div className="text-center">
              <a href="mailto:Cole@GoGATOR.ai" className="text-[#00FF66] hover:underline">
                Cole@GoGATOR.ai
              </a>
            </div>
            
            <div className="text-center">
              <a href="https://home.gogator.ai" target="_blank" rel="noopener noreferrer" className="text-[#00FF66] hover:underline">
                GoGATOR.ai
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-12 pt-8 border-t border-gray-700">
          <p className="text-gray-400 text-sm">
            © 2024 GATOR. Let's move from range time to readiness proof.{' '}
            <button 
              onClick={exportToPDF}
              className="text-[#00FF66] hover:text-[#00CC52] underline bg-transparent border-none p-0 font-inherit text-sm transition-colors"
              style={{ cursor: 'pointer' }}
            >
              Export to PDF
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}