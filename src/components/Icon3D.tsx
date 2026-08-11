import React from 'react';

export const Icon3D = ({ name, size = 16, className }: { name: string, size?: number, className?: string }) => {
  const images: Record<string, string> = {
    Users: '/icons/users.jpg',
    BookOpen: '/icons/book.jpg',
    Heart: '/icons/heart.jpg',
    Handshake: '/icons/handshake.jpg',
    Gift: '/icons/gift.jpg',
    HeartPulse: '/icons/heart_pulse.jpg',
    TrendingUp: '/icons/trending_up.jpg',
  };
  const emojis: Record<string, string> = {
    Calendar: '📅',
    MapPin: '📍',
    CheckCircle: '✅',
    Flower: '🌸',
    LogOut: '🚪',
    LayoutDashboard: '📊',
    Eye: '👁️',
    EyeOff: '🙈',
    Bot: '🤖',
    X: '❌',
    Send: '📤',
    Mic: '🎤',
  };

  if (images[name]) {
    return <img src={images[name]} alt={name} className={className} style={{ width: size, height: size, objectFit: 'contain', mixBlendMode: 'multiply', verticalAlign: 'middle', display: 'inline-block' }} />;
  }
  
  if (emojis[name]) {
    return <span role="img" aria-label={name} className={className} style={{ fontSize: size * 0.9, verticalAlign: 'middle', filter: 'drop-shadow(1px 1px 1px rgba(0,0,0,0.1))', display: 'inline-block', lineHeight: 1 }}>{emojis[name]}</span>;
  }
  
  return null;
};

export const Users = (p: any) => <Icon3D name="Users" {...p} />;
export const BookOpen = (p: any) => <Icon3D name="BookOpen" {...p} />;
export const Heart = (p: any) => <Icon3D name="Heart" {...p} />;
export const Handshake = (p: any) => <Icon3D name="Handshake" {...p} />;
export const Gift = (p: any) => <Icon3D name="Gift" {...p} />;
export const HeartPulse = (p: any) => <Icon3D name="HeartPulse" {...p} />;
export const TrendingUp = (p: any) => <Icon3D name="TrendingUp" {...p} />;
export const Calendar = (p: any) => <Icon3D name="Calendar" {...p} />;
export const MapPin = (p: any) => <Icon3D name="MapPin" {...p} />;
export const CheckCircle = (p: any) => <Icon3D name="CheckCircle" {...p} />;
export const Flower = (p: any) => <Icon3D name="Flower" {...p} />;
export const LogOut = (p: any) => <Icon3D name="LogOut" {...p} />;
export const LayoutDashboard = (p: any) => <Icon3D name="LayoutDashboard" {...p} />;
export const Eye = (p: any) => <Icon3D name="Eye" {...p} />;
export const EyeOff = (p: any) => <Icon3D name="EyeOff" {...p} />;
export const Bot = (p: any) => <Icon3D name="Bot" {...p} />;
export const X = (p: any) => <Icon3D name="X" {...p} />;
export const Send = (p: any) => <Icon3D name="Send" {...p} />;
export const Mic = (p: any) => <Icon3D name="Mic" {...p} />;
