import { useState } from "react";
import { FaFire } from 'react-icons/fa';

import '../styles/switch-mode.scss'

export function SwitchToLightAndDarkMode() {
    const [mode, setMode] = useState('light');

    function darkMode(mode: string) {
        setMode(mode)
        if (mode === 'dark') {
            document.body.classList.add('dark-mode')
        } else {
            document.body.classList.remove('dark-mode')
        }
    }
    return (
        <>
            <div className="test-switch">
                {mode == 'dark' ? (
                    <FaFire
                        title="Dark Mode"
                        className="dark-on"
                        size="40"
                        onClick={() => darkMode('light')}
                    />
                ) : (
                    <FaFire
                        title="Light Mode"
                        className="light-on"
                        size="40"
                        onClick={() => darkMode('dark')}
                    />
                )}
            </div>
            {/* <button onClick={() => darkMode('dark')}>Teste</button>
            <button onClick={() => darkMode('light')}>ligth</button> */}
        </>
    );
}