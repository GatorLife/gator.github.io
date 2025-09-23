import image_b9526276f1759d5b64ada77efdb6319a43137d14 from 'figma:asset/b9526276f1759d5b64ada77efdb6319a43137d14.png';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import gatorLogo from 'figma:asset/b9526276f1759d5b64ada77efdb6319a43137d14.png';
import { Card } from './components/ui/card';
import { Badge } from './components/ui/badge';
import { Mail, Globe, Calendar, MapPin, Shield, BarChart3, Bot, Settings, Zap, Eye, Cpu } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-black via-gray-900 to-black py-8 px-6 text-center border-b border-green-500/30">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-[#00FF66] mb-2">
            GATOR: Generative AI Training & Ops Readiness
          </h1>
          <p className="text-xl text-gray-300">
            Level up cyber mission readiness with AI-powered training
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
              Transform Cyber Training with Generative AI
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              GATOR revolutionizes cyber operations training through adaptive AI environments, 
              bias-free evaluations, and real-time readiness insights designed for mission-critical scenarios.
            </p>
            <div className="flex flex-wrap gap-3">
              <Badge className="bg-[#00FF66]/20 text-[#00FF66] border border-[#00FF66]/30 text-[14px]">
                Secure & Enclave-Ready
              </Badge>
              <Badge className="bg-[#00FF66]/20 text-[#00FF66] border border-[#00FF66]/30 text-[14px]">
                Model-Agnostic
              </Badge>
              <Badge className="bg-[#00FF66]/20 text-[#00FF66] border border-[#00FF66]/30 text-[14px]">
                Real-Time Analytics
              </Badge>
            </div>
          </div>
        </div>

        {/* Key Value Props - 2x2 Grid */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-12 text-[#00FF66]">
            Core Capabilities
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
                    Adaptive, realistic cyber ranges tailored to operator roles and mission requirements.
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
                    Bias-free, doctrinally aligned assessments with instant feedback and performance insights.
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
                    Dashboards and predictive analytics to track readiness in real time.
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
                    On-premises deployment, model-agnostic design for classified environments.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Why Attend Section */}
        <div className="mb-16">
          <Card className="bg-gradient-to-r from-[#00FF66]/10 to-[#00FF66]/5 border-[#00FF66]/30 p-8">
            <h2 className="text-2xl font-bold text-[#00FF66] mb-6 text-center">
              Why Attend This Presentation?
            </h2>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="flex justify-center mb-4">
                  <div className="bg-[#00FF66]/20 p-3 rounded-lg">
                    <Zap className="w-8 h-8 text-[#00FF66]" />
                  </div>
                </div>
                <p className="text-white">
                  Discover how GATOR accelerates operator proficiency
                </p>
              </div>
              <div>
                <div className="flex justify-center mb-4">
                  <div className="bg-[#00FF66]/20 p-3 rounded-lg">
                    <Eye className="w-8 h-8 text-[#00FF66]" />
                  </div>
                </div>
                <p className="text-white">
                  See how commanders get real-time readiness visibility
                </p>
              </div>
              <div>
                <div className="flex justify-center mb-4">
                  <div className="bg-[#00FF66]/20 p-3 rounded-lg">
                    <Cpu className="w-8 h-8 text-[#00FF66]" />
                  </div>
                </div>
                <p className="text-white">
                  Learn how Generative AI is transforming cyber training
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
            
            <div className="flex justify-center">
              <a href="https://gogator.ai" target="_blank" rel="noopener noreferrer">
                <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center hover:bg-gray-100 transition-colors">
                  <div className="text-black text-xs text-center">
                    QR Code<br/>
                    GoGator.ai
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-12 pt-8 border-t border-gray-700">
          <p className="text-gray-400 text-sm">
            © 2024 GATOR. Transforming cyber operations through generative AI.
          </p>
        </div>
      </div>
    </div>
  );
}