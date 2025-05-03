import React from 'react';
import { FileText } from 'lucide-react';

export const Logs: React.FC = () => {
  // Mock logs data - in a real app, this would come from your backend
  const logs = [
    { id: 1, type: 'info', message: 'Product sync started', timestamp: new Date().toISOString() },
    { id: 2, type: 'success', message: 'Successfully synced 50 products', timestamp: new Date().toISOString() },
    { id: 3, type: 'error', message: 'Failed to sync order #123', timestamp: new Date().toISOString() },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">System Logs</h1>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="p-4 border-b">
          <div className="flex items-center">
            <FileText className="w-5 h-5 text-gray-500 mr-2" />
            <h2 className="text-lg font-semibold">Recent Activity</h2>
          </div>
        </div>
        <div className="divide-y">
          {logs.map((log) => (
            <div key={log.id} className="p-4">
              <div className="flex items-start">
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">{log.message}</p>
                  <p className="text-xs text-gray-500">
                    {new Date(log.timestamp).toLocaleString()}
                  </p>
                </div>
                <span
                  className={`px-2 py-1 text-xs rounded-full ${
                    log.type === 'success'
                      ? 'bg-green-100 text-green-800'
                      : log.type === 'error'
                      ? 'bg-red-100 text-red-800'
                      : 'bg-blue-100 text-blue-800'
                  }`}
                >
                  {log.type}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};