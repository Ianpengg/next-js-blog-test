import React from "react";
import { useEffect, useState, Fragment } from "react";
import { BsFillSunFill, BsMoonStars, BsGithub } from "react-icons/bs";
import { CheckIcon } from "@heroicons/react/20/solid";
import { useTheme } from "next-themes";
import Switch from "react-switch";

export default function ThemeToggle({}) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    const usertheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    if (usertheme === "dark" || (!usertheme && prefersDark)) {
      setTheme('dark');
      console.log(usertheme);
    }
    else {
      setTheme('light');
    }
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  const handleThemeSwitch = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };
  return (
    <div className="flex flex-row items-center justify-center">
      <button
        className=" flex flex-row  rounded-full hover:text-sky-500  dark:hover:text-sky-400 fill-[rgb(212,212,212)] hover:fill-sky-500"
        onClick={handleThemeSwitch}
      >
        <h1 className="pr-3">Theme</h1>
        <span className="hidden dark:inline">
          <BsMoonStars className="h-6 w-6 " />
        </span>
        <span className="dark:hidden">
          <BsFillSunFill className="h-6 w-6" />
        </span>
      </button>
      <a
        href="https://github.com/Ianpengg"
        target="_blank"
        rel="noreferrer"
        className="cursor-pointer ml-6 block text-slate-400 hover:text-slate-500 dark:hover:text-slate-300"
      >
        <BsGithub className="h-6 w-6" />
      </a>
    </div>
  );
}

export function ThemeToggleMobile({}) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  const handleThemeSwitch = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };
  return (
    <div className="flex flex-none items-center space-x-2 mt-5">
      <h3 className="text-sm uppercase font-bold">
        dark mode
      </h3>
      <Switch
      onChange={handleThemeSwitch} 
      uncheckedIcon={false}
      checked={theme === "dark"}
      handleDiameter={20}
      onColor="#9544DD"
       />
    </div>
  )
}
