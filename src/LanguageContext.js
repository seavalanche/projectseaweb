import React, { createContext, useState } from "react";

// Create the context
export const LanguageContext = createContext();

// Provide the context to the app
export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState("en"); // Default language

    return (
        <LanguageContext.Provider value={{ language, setLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};
