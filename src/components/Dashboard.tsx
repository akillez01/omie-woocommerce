import React from 'react';
import { useOmie } from '../context/OmieContext';
import { RefreshCw, Check, AlertTriangle } from 'lucide-react';
import { SyncCard } from './SyncCard';
import { StatsCard } from './StatsCard';

export const Dashboard: React.FC = () => {
  const { syncStatus, startSync } = useOmie();
  
  // Mock data
  const stats = {
    products: { total: 156, synced: 142, pending: 14 },
    orders: { total: 89, synced: 85, pending: 4 },
    stock: { updates: 35, lastDay: 12 }
  };

  const formatDate = (dateString: string | null) => {
    if (!dateString) return 'Never';
    return new Date(dateString).toLocaleString();
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
        <div className="flex space-x-2">
          <button 
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 flex items-center"
            disabled={syncStatus.isSyncing}
            onClick={() => startSync('products')}
          >
            <RefreshCw className="w-4 h-4 mr-2" />
            Sync All
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <StatsCard 
          title="Products" 
          total={stats.products.total} 
          synced={stats.products.synced} 
          pending={stats.products.pending}
          icon={<Package className="w-8 h-8 text-blue-500" />}
        />
        <StatsCard 
          title="Orders" 
          total={stats.orders.total} 
          synced={stats.orders.synced} 
          pending={stats.orders.pending}
          icon={<ShoppingCart className="w-8 h-8 text-green-500" />}
        />
        <StatsCard 
          title="Stock Updates" 
          total={stats.stock.updates} 
          label="Last 24 hours"
          value={stats.stock.lastDay}
          icon={<BarChart className="w-8 h-8 text-purple-500" />}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <SyncCard
          title="Products Sync"
          lastSync={formatDate(syncStatus.lastProductSync)}
          syncType="products"
        />
        <SyncCard
          title="Orders Sync"
          lastSync={formatDate(syncStatus.lastOrderSync)}
          syncType="orders"
        />
        <SyncCard
          title="Stock Sync"
          lastSync={formatDate(syncStatus.lastStockSync)}
          syncType="stock"
        />
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
        <div className="space-y-3">
          {[
            { type: 'success', message: 'Successfully synced 14 products', time: '10 minutes ago' },
            { type: 'warning', message: 'Order #1234 failed to sync', time: '1 hour ago' },
            { type: 'success', message: 'Stock updated for 35 products', time: '3 hours ago' },
          ].map((activity, index) => (
            <div key={index} className="flex items-start p-3 border-b last:border-0">
              <div className={`rounded-full p-2 mr-3 ${activity.type === 'success' ? 'bg-green-100' : 'bg-yellow-100'}`}>
                {activity.type === 'success' ? (
                  <Check className="w-4 h-4 text-green-600" />
                ) : (
                  <AlertTriangle className="w-4 h-4 text-yellow-600" />
                )}
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium">{activity.message}</p>
                <p className="text-xs text-gray-500">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Fix missing imports
import { Package, ShoppingCart, BarChart } from 'lucide-react';