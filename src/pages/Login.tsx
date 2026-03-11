import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { signIn } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    // e.preventDefault();
    /*setError('');
    setLoading(true);

    const { error } = await signIn(email, password);
    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }
    setLoading(false);*/
    navigate('/dashboard', { replace: true });
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-amber-700 rounded flex items-center justify-center transform -rotate-12">
            <div className="w-9 h-9 border-3 border-white/90 rounded transform rotate-12"></div>
          </div>
          <span className="text-3xl font-semibold tracking-wide text-white">SOVEREIGN</span>
        </div>

        <div className="text-center mb-8">
          <p className="text-gray-400 text-sm">Sign in to your account</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm text-gray-400 mb-2">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@company.com"
              required
              className="w-full px-4 py-3 bg-[#111111] border border-gray-800 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-amber-700 transition-colors"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm text-gray-400 mb-2">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
              className="w-full px-4 py-3 bg-[#111111] border border-gray-800 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-amber-700 transition-colors"
            />
          </div>

          {error && (
            <div className="p-3 bg-red-900/20 border border-red-800 rounded-lg text-red-400 text-sm">
              {error}
            </div>
          )}

          <div className="flex items-center justify-between text-sm">
            <button type="button" className="text-gray-400 hover:text-gray-200 transition-colors">
              Forgot username?
            </button>
            <button type="button" className="text-gray-400 hover:text-gray-200 transition-colors">
              Forgot password?
            </button>
          </div>

          <div className="text-center text-sm">
            <span className="text-gray-400">Don't have an account? </span>
            <button type="button" className="text-gray-200 hover:text-white transition-colors">
              Register
            </button>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-medium rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Signing in...' : 'Log In'}
          </button>
        </form>

        <div className="mt-8 space-y-3">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-800"></div>
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="px-2 bg-[#0a0a0a] text-gray-500">OR</span>
            </div>
          </div>

          <button
            type="button"
            className="w-full py-3 bg-[#111111] border border-gray-800 hover:bg-gray-800/50 text-gray-200 rounded-lg transition-colors flex items-center justify-center gap-3"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="currentColor"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="currentColor"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="currentColor"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            <span>Continue with Google</span>
          </button>

          <button
            type="button"
            className="w-full py-3 bg-[#111111] border border-gray-800 hover:bg-gray-800/50 text-gray-200 rounded-lg transition-colors flex items-center justify-center gap-3"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M11.4 24H7.6C7.1 24 6.6 23.6 6.6 23.1V13.2H3.3C2.8 13.2 2.4 12.7 2.4 12.3V8.9C2.4 8.4 2.8 8 3.3 8H6.6V6.4C6.6 3.7 8.3 1 11.4 1H15.7C16.2 1 16.7 1.4 16.7 1.9V4.9C16.7 5.4 16.2 5.8 15.7 5.8H13.5C12.6 5.8 12.3 6.1 12.3 6.8V8H15.8C16.3 8 16.7 8.4 16.7 8.9L16.6 12.3C16.6 12.8 16.2 13.2 15.7 13.2H12.3V23.1C12.4 23.6 11.9 24 11.4 24Z" />
            </svg>
            <span>Continue with Microsoft</span>
          </button>
        </div>

        <div className="mt-8 text-center text-xs text-gray-500">
          <p className="mb-2">Multi-factor authentication enabled</p>
          <p>
            By signing in, you agree to our{' '}
            <button type="button" className="text-gray-400 hover:text-gray-200 underline">
              Terms of Service
            </button>{' '}
            and{' '}
            <button type="button" className="text-gray-400 hover:text-gray-200 underline">
              Privacy Policy
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
