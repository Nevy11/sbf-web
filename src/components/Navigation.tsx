import React from 'react';
import { NavLink } from 'react-router-dom';
// Added Calendar icon to your existing imports
import { HeartPulse, TrendingUp, Flower, LogOut, LayoutDashboard, Calendar } from 'lucide-react';
import { supabase } from '../lib/supabase';
import styles from './Navigation.module.css';

export const Navigation: React.FC = () => {
  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  return (
    <nav className={styles.navContainer}>
      <div className={styles.logoArea}>
        <Flower className="text-accent" color="var(--color-accent)" size={28} />
        <span>SBF</span>
      </div>
      
      <div className={styles.navLinks}>
        <NavLink 
          to="/dashboard" 
          className={({ isActive }) => isActive ? `${styles.navItem} ${styles.activeNavItem}` : styles.navItem}
          end
        >
          <LayoutDashboard size={20} />
          <span>Dashboard</span>
        </NavLink>
        
        <NavLink 
          to="/dashboard/heal" 
          className={({ isActive }) => isActive ? `${styles.navItem} ${styles.activeNavItem}` : styles.navItem}
        >
          <HeartPulse size={20} />
          <span>Heal</span>
        </NavLink>
        
        <NavLink 
          to="/dashboard/grow" 
          className={({ isActive }) => isActive ? `${styles.navItem} ${styles.activeNavItem}` : styles.navItem}
        >
          <TrendingUp size={20} />
          <span>Grow</span>
        </NavLink>
        
        <NavLink 
          to="/dashboard/blossom" 
          className={({ isActive }) => isActive ? `${styles.navItem} ${styles.activeNavItem}` : styles.navItem}
        >
          <Flower size={20} />
          <span>Blossom</span>
        </NavLink>

        {/* NEW: Events Page Link */}
        <NavLink 
          to="/events" 
          className={({ isActive }) => isActive ? `${styles.navItem} ${styles.activeNavItem}` : styles.navItem}
        >
          <Calendar size={20} />
          <span>Events</span>
        </NavLink>
      </div>
      
      <button onClick={handleLogout} className={styles.logoutBtn}>
        <LogOut size={20} />
        <span>Sign Out</span>
      </button>
    </nav>
  );
};