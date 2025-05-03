import React from 'react';
import { useOmie } from '../context/OmieContext';
import { RefreshCw } from 'lucide-react';

export const OrderSync: React.FC = () => {
  const { syncStatus, startSync } = useOmie();

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Order Synchronization</h1>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 flex items-center"
          disabled={syncStatus.isSyncing}
          onClick={() => startSync('orders')}
        >
          <RefreshCw className="w-4 h-4 mr-2" />
          Sync Orders
        </button>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Sync Status</h2>
        <div className="space-y-4">
          <div>
            <p className="text-sm text-gray-600">Last Sync:</p>
            <p className="font-medium">
              {syncStatus.lastOrderSync
                ? new Date(syncStatus.lastOrderSync).toLocaleString()
                : 'Never'}
            </p>
          </div>
          {syncStatus.isSyncing && syncStatus.syncType === 'orders' && (
            <div className="flex items-center text-blue-600">
              <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
              Syncing orders...
            </div>
          )}
        </div>
      </div>
    </div>
  );
};