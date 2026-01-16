import React from 'react';
import './ThemeSwitcher.scss';

const ThemeSwitcher = ({ currentTheme, onThemeChange }) => {
  const themes = ['forest', 'ocean', 'sunset', 'minimal'];

  return (
    <div className="theme-switcher">
      {themes.map((theme) => (
        <button
          key={theme}
          className={`theme-switcher__btn theme-switcher__btn--${theme} ${currentTheme === theme ? 'active' : ''}`}
          onClick={() => onThemeChange(theme)}
          title={`Switch to ${theme} theme`}
        />
      ))}
    </div>
  );
};

export default ThemeSwitcher;
