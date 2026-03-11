import { AlertCircle, CheckCircle, Clock, Upload, ArrowRight, MessageCircle } from 'lucide-react';

const activities = [
  {
    user: 'Sarah Chen',
    team: 'SOVEREIGN TAX',
    action: 'uploaded Federal draft return',
    time: '34 ago',
    icon: <Upload size={16} />,
  },
  {
    user: 'Sarah Chen',
    team: 'SOVEREIGN TAX',
    action: 'requested additional bank statements',
    time: '1d ago',
    icon: <MessageCircle size={16} />,
  },
  {
    user: 'You',
    team: 'CLIENT',
    action: 'uploaded Equipment Receipts.pdf',
    jurisdiction: 'California',
    time: '5d ago',
    icon: <Upload size={16} />,
  },
  {
    user: 'Michael Torres',
    team: 'SOVEREIGN TAX',
    action: 'moved California to Prep stage',
    time: '6d ago',
    icon: <ArrowRight size={16} />,
  },
  {
    user: 'Michael Torres',
    team: 'SOVEREIGN TAX',
    action: 'filed Texas state return',
    time: '1w ago',
    icon: <CheckCircle size={16} />,
  },
];

export function StatusTracker() {
  const stages = [
    { label: 'Intake', sublabel: 'Complete', status: 'complete', number: 1 },
    { label: 'In', sublabel: 'Preparation', status: 'complete', number: 2 },
    { label: 'Ready for', sublabel: 'Review', note: 'Owned by Sovereign Tax', status: 'complete', number: 3 },
    { label: 'Approved', sublabel: 'to File', status: 'pending', number: 4 },
    { label: 'Filed', sublabel: '', status: 'pending', number: 5 },
  ];

  return (
    <div className="max-w-7xl mx-auto p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-semibold text-white mb-2">Status Tracker</h1>
          <p className="text-gray-400">Track preparation progress across all filing jurisdictions</p>
        </div>

        <div className="bg-amber-900/20 border border-amber-800/50 rounded-lg p-4 flex items-start gap-3 mb-8">
          <AlertCircle className="text-amber-600 mt-0.5 flex-shrink-0" size={20} />
          <div className="flex-1">
            <p className="text-amber-200 font-medium">3 Pending Requests from Your Tax Team</p>
            <p className="text-amber-300/70 text-sm">Your tax preparer needs additional information to continue</p>
          </div>
          <button className="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-lg text-sm font-medium transition-colors flex items-center gap-2">
            View Requests
            <ArrowRight size={16} />
          </button>
        </div>

        <div className="bg-[#111111] border border-gray-800 rounded-lg p-8 mb-8">
          <h2 className="text-lg font-semibold text-white mb-2">Tax Return Progress</h2>
          <p className="text-gray-400 text-sm mb-8">Track your return from intake to filing</p>

          <div className="relative">
            <div className="absolute top-6 left-0 right-0 h-0.5 bg-gray-800">
              <div className="absolute top-0 left-0 h-full bg-amber-600" style={{ width: '60%' }}></div>
            </div>

            <div className="relative flex justify-between">
              {stages.map((stage, index) => (
                <div key={index} className="flex flex-col items-center" style={{ width: '20%' }}>
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center mb-3 border-2 transition-all ${
                      stage.status === 'complete'
                        ? 'bg-amber-600 border-amber-600'
                        : stage.status === 'current'
                        ? 'bg-amber-600/20 border-amber-600'
                        : 'bg-gray-800 border-gray-700'
                    }`}
                  >
                    {stage.status === 'complete' ? (
                      <CheckCircle className="text-white" size={24} />
                    ) : (
                      <span
                        className={`text-sm font-semibold ${
                          stage.status === 'pending' ? 'text-gray-500' : 'text-white'
                        }`}
                      >
                        {stage.number}
                      </span>
                    )}
                  </div>
                  <div className="text-center">
                    <p
                      className={`text-sm font-medium ${
                        stage.status === 'pending' ? 'text-gray-500' : 'text-white'
                      }`}
                    >
                      {stage.label}
                    </p>
                    <p
                      className={`text-sm ${
                        stage.status === 'pending' ? 'text-gray-600' : 'text-gray-400'
                      }`}
                    >
                      {stage.sublabel}
                    </p>
                    {stage.note && (
                      <p className="text-xs text-gray-500 mt-1">{stage.note}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-[#111111] border border-gray-800 rounded-lg overflow-hidden">
          <div className="border-b border-gray-800">
            <div className="flex">
              <button className="px-6 py-3 text-sm text-gray-400 hover:text-gray-200 border-b-2 border-transparent transition-colors">
                Filings
              </button>
              <button className="px-6 py-3 text-sm text-gray-400 hover:text-gray-200 border-b-2 border-transparent transition-colors">
                Deadlines
              </button>
              <button className="px-6 py-3 text-sm text-white border-b-2 border-amber-600 bg-amber-700/10 transition-colors">
                Activity
              </button>
              <button className="px-6 py-3 text-sm text-gray-400 hover:text-gray-200 border-b-2 border-transparent transition-colors relative">
                Requests
                <span className="absolute top-2 right-2 bg-amber-600 text-white text-xs px-1.5 py-0.5 rounded-full">
                  3
                </span>
              </button>
            </div>
          </div>

          <div className="p-6 space-y-4">
            {activities.map((activity, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 bg-gray-800/30 hover:bg-gray-800/50 rounded-lg transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-amber-700/20 text-amber-600 flex items-center justify-center flex-shrink-0">
                  {activity.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-gray-200">
                    <span className="font-medium">{activity.user}</span>
                    <span className="text-gray-500 text-xs mx-1.5">•</span>
                    <span className="text-xs text-gray-500">{activity.team}</span>
                    <span className="text-gray-400"> {activity.action}</span>
                  </p>
                  {activity.jurisdiction && (
                    <p className="text-xs text-gray-500 mt-1">{activity.jurisdiction}</p>
                  )}
                  <p className="text-xs text-gray-600 mt-1">{activity.time}</p>
                </div>
                <button className="opacity-0 group-hover:opacity-100 p-2 hover:bg-gray-700/50 rounded transition-all">
                  <MessageCircle size={16} className="text-gray-400" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
  );
}
