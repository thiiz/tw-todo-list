import { useTheme } from "next-themes";
import { useEffect } from "react";

type ThemeProps = 'light' | 'dark' | 'system';

const useToggleTheme = () => {
  const { setTheme, theme } = useTheme()

  const toggleTheme = () => {
    const t: ThemeProps = theme === 'light' ? 'dark' : 'light';
    setTheme(t);
  };
  useEffect(() => {
    if (theme === 'light') {
      setTheme('light')
    } else {
      setTheme('dark')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [theme]);
  return { toggleTheme }
}

export { useToggleTheme }