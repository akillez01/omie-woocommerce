import React, { ReactNode } from 'react';
import { AlertBar } from './AlertBar';

interface LayoutProps {
  children: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen">
      <div className="bg-blue-600 text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">Omie WooCommerce Integration</h1>
        </div>
      </div>
      <AlertBar />
      {children}
    </div>
  );
};