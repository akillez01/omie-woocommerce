import React, { useState, useEffect } from 'react';
import { Layout } from './components/Layout';
import { Dashboard } from './components/Dashboard';
import { Settings } from './components/Settings';
import { ProductSync } from './components/ProductSync';
import { OrderSync } from './components/OrderSync';
import { Logs } from './components/Logs';
import { Sidebar } from './components/Sidebar';
import { AlertProvider } from './context/AlertContext';
import { OmieProvider } from './context/OmieContext';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'products':
        return <ProductSync />;
      case 'orders':
        return <OrderSync />;
      case 'settings':
        return <Settings />;
      case 'logs':
        return <Logs />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <AlertProvider>
      <OmieProvider>
        <Layout>
          <div className="flex h-screen bg-gray-100">
            <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
            <main className="flex-1 overflow-auto p-6">
              {renderContent()}
            </main>
          </div>
        </Layout>
      </OmieProvider>
    </AlertProvider>
  );
}

export default App;