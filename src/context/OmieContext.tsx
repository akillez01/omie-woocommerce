import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

interface OmieCredentials {
  appKey: string;
  appSecret: string;
}

interface SyncStatus {
  lastProductSync: string | null;
  lastOrderSync: string | null;
  lastStockSync: string | null;
  isSyncing: boolean;
  syncType: string | null;
}

interface OmieContextType {
  credentials: OmieCredentials;
  syncStatus: SyncStatus;
  updateCredentials: (credentials: OmieCredentials) => void;
  startSync: (syncType: 'products' | 'orders' | 'stock') => Promise<void>;
  testConnection: () => Promise<boolean>;
}

const OmieContext = createContext<OmieContextType | undefined>(undefined);

export const useOmie = () => {
  const context = useContext(OmieContext);
  if (!context) {
    throw new Error('useOmie must be used within an OmieProvider');
  }
  return context;
};

interface OmieProviderProps {
  children: ReactNode;
}

export const OmieProvider: React.FC<OmieProviderProps> = ({ children }) => {
  const [credentials, setCredentials] = useState<OmieCredentials>({
    appKey: localStorage.getItem('omie_app_key') || '',
    appSecret: localStorage.getItem('omie_app_secret') || '',
  });

  const [syncStatus, setSyncStatus] = useState<SyncStatus>({
    lastProductSync: localStorage.getItem('last_product_sync'),
    lastOrderSync: localStorage.getItem('last_order_sync'),
    lastStockSync: localStorage.getItem('last_stock_sync'),
    isSyncing: false,
    syncType: null,
  });

  const updateCredentials = (newCredentials: OmieCredentials) => {
    setCredentials(newCredentials);
    localStorage.setItem('omie_app_key', newCredentials.appKey);
    localStorage.setItem('omie_app_secret', newCredentials.appSecret);
  };

  const startSync = async (syncType: 'products' | 'orders' | 'stock') => {
    setSyncStatus(prev => ({ ...prev, isSyncing: true, syncType }));
    
    try {
      // Mock API call for now
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const now = new Date().toISOString();
      
      if (syncType === 'products') {
        localStorage.setItem('last_product_sync', now);
        setSyncStatus(prev => ({ ...prev, lastProductSync: now }));
      } else if (syncType === 'orders') {
        localStorage.setItem('last_order_sync', now);
        setSyncStatus(prev => ({ ...prev, lastOrderSync: now }));
      } else if (syncType === 'stock') {
        localStorage.setItem('last_stock_sync', now);
        setSyncStatus(prev => ({ ...prev, lastStockSync: now }));
      }
    } catch (error) {
      console.error(`Error syncing ${syncType}:`, error);
      throw error;
    } finally {
      setSyncStatus(prev => ({ ...prev, isSyncing: false, syncType: null }));
    }
  };

  const testConnection = async (): Promise<boolean> => {
    // Mock API call for now
    await new Promise(resolve => setTimeout(resolve, 1000));
    return true;
  };

  return (
    <OmieContext.Provider value={{ 
      credentials, 
      syncStatus, 
      updateCredentials, 
      startSync, 
      testConnection 
    }}>
      {children}
    </OmieContext.Provider>
  );
};