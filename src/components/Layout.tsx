import { ReactNode } from 'react';
import {
  FileText,
  ClipboardList,
  Activity,
  FileBarChart,
  Lightbulb,
  Folder,
  Settings,
  LogOut,
  Bell,
  Menu
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

interface LayoutProps {
  children: ReactNode;
  currentPage?: string;
}

interface NavItem {
  icon: ReactNode;
  label: string;
  active?: boolean;
  badge?: number;
  onClick?: () => void;
}

function Layout({ children, currentPage }: LayoutProps) {
  const { signOut } = useAuth();
  const navigate = useNavigate();

  const navItems: NavItem[] = [
    { icon: <FileText size={18} />, label: 'Guided Intake', active: currentPage === 'guided-intake', onClick: () => navigate('/guided-intake') },
    { icon: <ClipboardList size={18} />, label: 'Tax Intake', active: currentPage === 'intake', onClick: () => navigate('/intake') },
    { icon: <Activity size={18} />, label: 'Status Tracker', active: currentPage === 'status', badge: 3, onClick: () => navigate('/status') },
    { icon: <Folder size={18} />, label: 'Document Center', active: currentPage === 'documents', onClick: () => navigate('/documents') },
    { icon: <FileBarChart size={18} />, label: 'Tax Summary', active: currentPage === 'summary', onClick: () => navigate('/summary') },
    { icon: <Lightbulb size={18} />, label: 'Tax Insights', active: currentPage === 'insights', onClick: () => navigate('/insights') },
  ];

  return (
    <div className="flex h-screen bg-[#0a0a0a] text-gray-200">
      <aside className="w-64 bg-[#111111] border-r border-gray-800 flex flex-col">
        <div className="p-4 border-b border-gray-800 flex items-center gap-2">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-amber-600 to-amber-700 rounded flex items-center justify-center transform -rotate-12">
              <div className="w-6 h-6 border-2 border-white/90 rounded transform rotate-12"></div>
            </div>
            <span className="text-xl font-semibold tracking-wide">SOVEREIGN</span>
          </div>
        </div>

        <div className="px-3 py-2">
          <button className="w-full px-3 py-2 text-sm text-gray-400 hover:text-gray-200 hover:bg-gray-800/50 rounded flex items-center gap-2 transition-colors">
            <Menu size={18} />
            <span>Menu</span>
          </button>
        </div>

        <nav className="flex-1 px-3 py-2 space-y-1">
          {navItems.map((item, index) => (
            <button
              key={index}
              onClick={item.onClick}
              className={`w-full px-3 py-2.5 text-sm rounded flex items-center gap-3 transition-colors relative ${
                item.active
                  ? 'bg-amber-700/20 text-amber-500 font-medium'
                  : 'text-gray-400 hover:text-gray-200 hover:bg-gray-800/50'
              }`}
            >
              {item.icon}
              <span>{item.label}</span>
              {item.badge && (
                <span className="ml-auto bg-amber-600 text-white text-xs px-2 py-0.5 rounded-full">
                  {item.badge}
                </span>
              )}
            </button>
          ))}
        </nav>

        <div className="p-3 border-t border-gray-800 space-y-1">
          <button onClick={() => navigate('/settings')} className="w-full px-3 py-2.5 text-sm text-gray-400 hover:text-gray-200 hover:bg-gray-800/50 rounded flex items-center gap-3 transition-colors">
            <Settings size={18} />
            <span>Settings</span>
          </button>
          <button
            onClick={() => signOut()}
            className="w-full px-3 py-2.5 text-sm text-gray-400 hover:text-gray-200 hover:bg-gray-800/50 rounded flex items-center gap-3 transition-colors"
          >
            <LogOut size={18} />
            <span>Sign Out</span>
          </button>
        </div>
      </aside>

      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="h-14 bg-[#111111] border-b border-gray-800 flex items-center justify-end px-6 gap-4">
          <button className="p-2 hover:bg-gray-800/50 rounded-lg transition-colors relative">
            <Bell size={20} />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-amber-600 rounded-full"></span>
          </button>
        </header>

        <main className="flex-1 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
}

export { Layout };
export default Layout;
