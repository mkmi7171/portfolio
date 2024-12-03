import { motion } from "framer-motion";
import { sunnyOutline, moonOutline } from "ionicons/icons";
import { IonIcon } from "@ionic/react";
import { useDarkMode } from "./DarkModeContext";
import switchSound from "../assets/transition-base.mp3";

const TOGGLE_CLASSES =
    "text-sm font-medium flex items-center px-2 py-3 transition-colors relative z-10";

const ToggleTheme = () => {
    const { isDarkMode, toggleDarkMode } = useDarkMode();

    const handleToggle = (mode) => {
        // const audio = new Audio(switchSound);
        // audio.play();
        if ((mode === "light" && isDarkMode) || (mode === "dark" && !isDarkMode)) {
            toggleDarkMode();
        }
    };

    return (
        <div className="relative flex w-fit gap-4 items-center rounded-full ml-3">
            <button
                className={`${TOGGLE_CLASSES} ${isDarkMode ? "text-white" : "text-slate-800"}`}
                onClick={() => handleToggle("dark")}
            >
                <IonIcon icon={moonOutline} className="relative z-10 text-lg" />
            </button>
            <button
                className={`${TOGGLE_CLASSES} ${isDarkMode ? "text-white" : "text-slate-800"}`}
                onClick={() => handleToggle("light")}
            >
                <IonIcon icon={sunnyOutline} className="relative z-10 text-lg" />
            </button>
            <div
                className={`absolute inset-0 items-center z-0 flex ${!isDarkMode ? "justify-end" : "justify-start"
                    }`}
            >
                <motion.span
                    layout
                    transition={{ type: "spring", damping: 15, stiffness: 250 }}
                    className={`h-8 w-8 rounded-full border border-[0.5px] ${isDarkMode ? "border-slate-100" : "border-slate-500"}`}
                />
            </div>
        </div>
    );
};

export default ToggleTheme;
