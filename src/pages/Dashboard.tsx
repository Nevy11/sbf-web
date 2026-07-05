import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navigation } from '../components/Navigation';
import { FloatingAI } from '../components/FloatingAI';
import styles from './Dashboard.module.css';

export const Dashboard: React.FC = () => {
  return (
    <div className={styles.dashboardLayout}>
      <Navigation />
      <main className={styles.mainContent}>
        <Outlet />
      </main>
      <FloatingAI />
    </div>
  );
};
