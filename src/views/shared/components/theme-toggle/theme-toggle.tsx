'use client';

import { useThemeContext } from '@/context/theme/theme.context';
import { MoonIcon } from '../../icons/moon.icon';
import { SunIcon } from '../../icons/sun.icon';
import styles from './theme-toggle.module.css';

export function ThemeToggle() {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <button onClick={toggleTheme} className={styles.button}>
      {theme === 'dark' ? (
        <SunIcon className={styles.sunIcon} />
      ) : (
        <MoonIcon className={styles.moonIcon} />
      )}
    </button>
  );
}