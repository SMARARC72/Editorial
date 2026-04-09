import { useNavigate } from 'react-router-dom';
import { Compass, ArrowLeft, Home, Search } from 'lucide-react';

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0f0f0f] flex items-center justify-center pt-20">
      <div className="max-w-md mx-auto px-6 text-center">
        <div className="w-24 h-24 bg-[#b8984e]/10 rounded-full flex items-center justify-center mx-auto mb-8">
          <Compass className="w-12 h-12 text-[#b8984e]" />
        </div>

        <p className="text-6xl font-serif text-[#b8984e] mb-2">404</p>
        
        <h1 className="font-serif text-3xl text-[#f5f1e8] mb-4">Page Not Found</h1>
        
        <p className="text-[#f5f1e8]/60 mb-8">
          Looks like you've wandered off the trail. The page you're looking for doesn't exist or has been moved.
        </p>

        <div className="space-y-3">
          <button
            onClick={() => navigate(-1)}
            className="w-full flex items-center justify-center gap-2 bg-[#b8984e] text-[#0f0f0f] py-3 font-medium hover:bg-[#c9a961] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Go Back
          </button>
          
          <button
            onClick={() => navigate('/')}
            className="w-full flex items-center justify-center gap-2 border border-[#b8984e]/30 text-[#f5f1e8] py-3 hover:border-[#b8984e] transition-colors"
          >
            <Home className="w-4 h-4" />
            Return Home
          </button>
          
          <button
            onClick={() => navigate('/shop')}
            className="w-full flex items-center justify-center gap-2 border border-[#b8984e]/30 text-[#f5f1e8] py-3 hover:border-[#b8984e] transition-colors"
          >
            <Search className="w-4 h-4" />
            Browse Shop
          </button>
        </div>

        <p className="mt-12 text-sm text-[#f5f1e8]/40">
          Need help? Contact us at{' '}
          <a href="mailto:hello@parkerjoe.com" className="text-[#b8984e] hover:underline">
            hello@parkerjoe.com
          </a>
        </p>
      </div>
    </div>
  );
}
