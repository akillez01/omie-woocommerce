import React from 'react';
import { RefreshCw } from 'lucide-react';
import { useOmie } from '../context/OmieContext';

interface SyncCardProps {
  title: string;
  lastSync: string;
  syncType: 'products' | 'orders' | 'stock';
}

export const SyncCard: React.FC<SyncCardProps> = ({ title, lastSync, syncType }) => {
  const { syncStatus, startSync } = useOmie();

  const isSyncing = syncStatus.isSyncing && syncStatus.currentType === syncType;

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
          <p className="text-sm text-gray-500">Last sync: {lastSync}</p>
        </div>
        <button
          onClick={() => startSync(syncType)}
          disabled={isSyncing}
          className={`p-2 rounded-full transition-all duration-200 ${
            isSyncing
              ? 'bg-blue-100 cursor-not-allowed'
              : 'bg-blue-50 hover:bg-blue-100'
          }`}
        >
          <RefreshCw
            className={`w-5 h-5 text-blue-600 ${
              isSyncing ? 'animate-spin' : ''
            }`}
          />
        </button>
      </div>
      {isSyncing && (
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div className="bg-blue-600 h-2 rounded-full animate-pulse" style={{ width: '60%' }}></div>
        </div>
      )}
    </div>
  );
};