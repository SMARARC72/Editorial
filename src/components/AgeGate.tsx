import { useState, useEffect } from 'react';

export default function AgeGate() {
  const [isOpen, setIsOpen] = useState(false);
  const [birthDate, setBirthDate] = useState({ month: '', day: '', year: '' });
  const [error, setError] = useState('');
  const [parentEmail, setParentEmail] = useState('');
  const [showParentConsent, setShowParentConsent] = useState(false);

  useEffect(() => {
    const hasVerifiedAge = localStorage.getItem('pj_age_verified');
    const ageVerificationDate = localStorage.getItem('pj_age_verified_date');
    
    // Check if verification is still valid (30 days)
    if (hasVerifiedAge && ageVerificationDate) {
      const daysSince = (Date.now() - parseInt(ageVerificationDate)) / (1000 * 60 * 60 * 24);
      if (daysSince > 30) {
        localStorage.removeItem('pj_age_verified');
        localStorage.removeItem('pj_age_verified_date');
        setIsOpen(true);
      }
    } else if (!hasVerifiedAge) {
      setIsOpen(true);
    }
  }, []);

  const calculateAge = (month: number, day: number, year: number) => {
    const today = new Date();
    const birthDate = new Date(year, month - 1, day);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    
    return age;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const month = parseInt(birthDate.month);
    const day = parseInt(birthDate.day);
    const year = parseInt(birthDate.year);

    if (!month || !day || !year) {
      setError('Please enter a valid date of birth');
      return;
    }

    const age = calculateAge(month, day, year);

    if (age >= 18) {
      // Adult - grant access
      localStorage.setItem('pj_age_verified', 'adult');
      localStorage.setItem('pj_age_verified_date', Date.now().toString());
      setIsOpen(false);
    } else if (age >= 13) {
      // Teen - grant access with teen flag
      localStorage.setItem('pj_age_verified', 'teen');
      localStorage.setItem('pj_age_verified_date', Date.now().toString());
      setIsOpen(false);
    } else {
      // Under 13 - require parent consent
      setShowParentConsent(true);
    }
  };

  const handleParentConsent = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!parentEmail || !parentEmail.includes('@')) {
      setError('Please enter a valid parent email address');
      return;
    }

    // In production, this would send an email to the parent
    // For now, we simulate the consent flow
    localStorage.setItem('pj_age_verified', 'child_consent_pending');
    localStorage.setItem('pj_parent_email', parentEmail);
    localStorage.setItem('pj_age_verified_date', Date.now().toString());
    
    // Show confirmation message
    alert('A consent email has been sent to your parent. Please ask them to check their email and approve your access.');
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm">
      <div className="relative max-w-md w-full mx-4 bg-[#1a1a1a] border border-[#b8984e]/30 rounded-lg p-8">
        {!showParentConsent ? (
          <>
            <div className="text-center mb-8">
              <h2 className="font-serif text-2xl text-[#f5f1e8] mb-2">Welcome to ParkerJoe</h2>
              <p className="text-[#f5f1e8]/70 text-sm">
                Please verify your age to continue. This helps us comply with COPPA regulations 
                and ensure a safe shopping experience.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-xs uppercase tracking-widest text-[#b8984e] mb-3">
                  Date of Birth
                </label>
                <div className="grid grid-cols-3 gap-3">
                  <select
                    value={birthDate.month}
                    onChange={(e) => setBirthDate({ ...birthDate, month: e.target.value })}
                    className="bg-[#0f0f0f] border border-[#b8984e]/30 rounded px-3 py-2 text-[#f5f1e8] focus:border-[#b8984e] focus:outline-none"
                    required
                  >
                    <option value="">Month</option>
                    {Array.from({ length: 12 }, (_, i) => (
                      <option key={i + 1} value={i + 1}>
                        {new Date(0, i).toLocaleString('default', { month: 'long' })}
                      </option>
                    ))}
                  </select>
                  
                  <select
                    value={birthDate.day}
                    onChange={(e) => setBirthDate({ ...birthDate, day: e.target.value })}
                    className="bg-[#0f0f0f] border border-[#b8984e]/30 rounded px-3 py-2 text-[#f5f1e8] focus:border-[#b8984e] focus:outline-none"
                    required
                  >
                    <option value="">Day</option>
                    {Array.from({ length: 31 }, (_, i) => (
                      <option key={i + 1} value={i + 1}>{i + 1}</option>
                    ))}
                  </select>
                  
                  <select
                    value={birthDate.year}
                    onChange={(e) => setBirthDate({ ...birthDate, year: e.target.value })}
                    className="bg-[#0f0f0f] border border-[#b8984e]/30 rounded px-3 py-2 text-[#f5f1e8] focus:border-[#b8984e] focus:outline-none"
                    required
                  >
                    <option value="">Year</option>
                    {Array.from({ length: 100 }, (_, i) => {
                      const year = new Date().getFullYear() - i;
                      return <option key={year} value={year}>{year}</option>;
                    })}
                  </select>
                </div>
              </div>

              {error && (
                <p className="text-red-400 text-sm">{error}</p>
              )}

              <button
                type="submit"
                className="w-full bg-[#b8984e] text-[#0f0f0f] py-3 font-medium tracking-wide hover:bg-[#c9a961] transition-colors"
              >
                Continue
              </button>
            </form>

            <p className="mt-6 text-xs text-[#f5f1e8]/50 text-center">
              By continuing, you agree to our{' '}
              <a href="/privacy" className="text-[#b8984e] hover:underline">Privacy Policy</a>
              {' '}and{' '}
              <a href="/terms" className="text-[#b8984e] hover:underline">Terms of Service</a>.
              <br />
              We are COPPA compliant and protect children's privacy.
            </p>
          </>
        ) : (
          <>
            <div className="text-center mb-8">
              <h2 className="font-serif text-2xl text-[#f5f1e8] mb-2">Parental Consent Required</h2>
              <p className="text-[#f5f1e8]/70 text-sm">
                It looks like you're under 13. We need your parent's permission to continue. 
                Please enter their email address so we can send them a consent form.
              </p>
            </div>

            <form onSubmit={handleParentConsent} className="space-y-6">
              <div>
                <label className="block text-xs uppercase tracking-widest text-[#b8984e] mb-2">
                  Parent/Guardian Email
                </label>
                <input
                  type="email"
                  value={parentEmail}
                  onChange={(e) => setParentEmail(e.target.value)}
                  placeholder="parent@example.com"
                  className="w-full bg-[#0f0f0f] border border-[#b8984e]/30 rounded px-4 py-3 text-[#f5f1e8] placeholder-[#f5f1e8]/30 focus:border-[#b8984e] focus:outline-none"
                  required
                />
              </div>

              {error && (
                <p className="text-red-400 text-sm">{error}</p>
              )}

              <button
                type="submit"
                className="w-full bg-[#b8984e] text-[#0f0f0f] py-3 font-medium tracking-wide hover:bg-[#c9a961] transition-colors"
              >
                Send Consent Request
              </button>

              <button
                type="button"
                onClick={() => {
                  setShowParentConsent(false);
                  setError('');
                }}
                className="w-full mt-3 text-[#f5f1e8]/70 text-sm hover:text-[#f5f1e8] transition-colors"
              >
                ← Go Back
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
