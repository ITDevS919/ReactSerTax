import { Upload, FileText, Download, Trash2, Share2, Filter, Search } from 'lucide-react';

const documents = [
  {
    name: 'Q4 2025 Bank Statements.pdf',
    type: 'Bank Statement',
    size: '2.4 MB',
    uploaded: '2 days ago',
    uploadedBy: 'You',
  },
  {
    name: 'Sales Report 2025.xlsx',
    type: 'Financial Report',
    size: '1.8 MB',
    uploaded: '3 days ago',
    uploadedBy: 'You',
  },
  {
    name: 'Equipment Receipts.pdf',
    type: 'Receipts',
    size: '3.2 MB',
    uploaded: '1 week ago',
    uploadedBy: 'You',
  },
  {
    name: 'Payroll Summary 2025.xlsx',
    type: 'Payroll',
    size: '892 KB',
    uploaded: '1 week ago',
    uploadedBy: 'You',
  },
  {
    name: 'Rent & Lease Agreements.pdf',
    type: 'Contracts',
    size: '1.5 MB',
    uploaded: '2 weeks ago',
    uploadedBy: 'Sarah Chen',
  },
  {
    name: 'Depreciation Schedule.xlsx',
    type: 'Depreciation',
    size: '456 KB',
    uploaded: '3 weeks ago',
    uploadedBy: 'Michael Torres',
  },
];

export function DocumentCenter() {
  return (
    <div className="max-w-7xl mx-auto p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-semibold text-white mb-2">Document Center</h1>
          <p className="text-gray-400">Upload and manage all tax-related documents</p>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="bg-[#111111] border border-gray-800 rounded-lg p-6">
            <p className="text-gray-400 text-sm mb-2">Total Documents</p>
            <p className="text-3xl font-semibold text-white">6</p>
          </div>
          <div className="bg-[#111111] border border-gray-800 rounded-lg p-6">
            <p className="text-gray-400 text-sm mb-2">Total Size</p>
            <p className="text-3xl font-semibold text-white">12.8 MB</p>
          </div>
          <div className="bg-[#111111] border border-gray-800 rounded-lg p-6">
            <p className="text-gray-400 text-sm mb-2">Last Updated</p>
            <p className="text-3xl font-semibold text-white">2 days</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-amber-900/20 to-amber-800/10 border border-amber-800/50 rounded-lg p-6 mb-8 flex items-center gap-4">
          <div className="w-16 h-16 bg-amber-700/20 rounded-lg flex items-center justify-center flex-shrink-0">
            <Upload className="text-amber-600" size={24} />
          </div>
          <div className="flex-1">
            <h3 className="text-white font-semibold mb-1">Upload Documents</h3>
            <p className="text-amber-300/70 text-sm">Drag and drop your files here or click to browse</p>
          </div>
          <button className="px-6 py-2.5 bg-amber-600 hover:bg-amber-700 text-white rounded-lg font-medium transition-colors flex items-center gap-2">
            <Upload size={18} />
            <span>Choose Files</span>
          </button>
        </div>

        <div className="bg-[#111111] border border-gray-800 rounded-lg overflow-hidden">
          <div className="p-6 border-b border-gray-800">
            <div className="flex items-center gap-4 mb-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-3 text-gray-600" size={18} />
                <input
                  type="text"
                  placeholder="Search documents..."
                  className="w-full pl-10 pr-4 py-2.5 bg-gray-800/30 border border-gray-700 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-amber-700 transition-colors"
                />
              </div>
              <button className="px-4 py-2.5 bg-gray-800/50 hover:bg-gray-800 border border-gray-700 text-gray-200 rounded-lg flex items-center gap-2 transition-colors">
                <Filter size={18} />
                <span>Filter</span>
              </button>
            </div>
          </div>

          <div className="divide-y divide-gray-800">
            {documents.map((doc, index) => (
              <div
                key={index}
                className="p-4 hover:bg-gray-800/30 transition-colors flex items-center gap-4 group"
              >
                <div className="w-12 h-12 bg-gray-800/50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FileText className="text-gray-500" size={24} />
                </div>

                <div className="flex-1 min-w-0">
                  <h4 className="text-white font-medium truncate">{doc.name}</h4>
                  <div className="flex items-center gap-3 mt-1">
                    <span className="text-xs bg-gray-800/50 text-gray-400 px-2 py-1 rounded">
                      {doc.type}
                    </span>
                    <span className="text-xs text-gray-500">{doc.size}</span>
                    <span className="text-xs text-gray-600">{doc.uploaded}</span>
                    <span className="text-xs text-gray-600">by {doc.uploadedBy}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="p-2 hover:bg-gray-800 rounded-lg transition-colors">
                    <Download className="text-gray-400 hover:text-gray-200" size={18} />
                  </button>
                  <button className="p-2 hover:bg-gray-800 rounded-lg transition-colors">
                    <Share2 className="text-gray-400 hover:text-gray-200" size={18} />
                  </button>
                  <button className="p-2 hover:bg-gray-800 rounded-lg transition-colors">
                    <Trash2 className="text-gray-400 hover:text-red-400" size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
  );
}
