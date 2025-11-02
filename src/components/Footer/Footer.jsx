import React from 'react'

const Footer = () => {
  return (
    <div className="bg-card z-50 fixed bottom-0 left-0 right-0 flex justify-between items-center px-4 lg:px-6 py-2 lg:py-3 text-sm text-matte">
      <div className="truncate">
        © {new Date().getFullYear()} Ayan Imran. All rights reserved.
      </div>

      <div className="flex gap-5 items-center">
        <a
          href="mailto:ayanimran6903@gmail.com"
          target="_blank"
          rel="noreferrer"
          aria-label="Email"
          className="leading-none flex items-center justify-center transition-transform hover:scale-[1.15] hover:text-highlight"
        >
          <svg
            className="block h-7 w-7 shrink-0"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path d="M4 9.00005L10.2 13.65C11.2667 14.45 12.7333 14.45 13.8 13.65L20 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3 9.17681C3 8.45047 3.39378 7.78123 4.02871 7.42849L11.0287 3.5396C11.6328 3.20402 12.3672 3.20402 12.9713 3.5396L19.9713 7.42849C20.6062 7.78123 21 8.45047 21 9.17681V17C21 18.1046 20.1046 19 19 19H5C3.89543 19 3 18.1046 3 17V9.17681Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </a>

        <a
          href="https://github.com/AyanImran20"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          className="leading-none flex items-center justify-center transition-transform hover:scale-[1.15] hover:text-highlight"
        >
          <svg className="block h-7 w-7 shrink-0" viewBox="0 0 24 24" fill="currentColor">
            {/* You can replace with a simpler 24x24 GitHub mark if you want crisp parity */}
            <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.51 2.87 8.33 6.84 9.68.5.09.68-.22.68-.49 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.37-3.37-1.37-.45-1.17-1.11-1.48-1.11-1.48-.91-.64.07-.63.07-.63 1 .07 1.53 1.05 1.53 1.05 .9 1.57 2.36 1.12 2.94.86.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.15-4.56-5.1 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.27 2.75 1.05A9.27 9.27 0 0 1 12 7.5c.85 0 1.7.12 2.5.35 1.9-1.32 2.74-1.05 2.74-1.05 .55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.96-2.35 4.84-4.59 5.1.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.59.69.49A10.05 10.05 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z"/>
          </svg>
        </a>

        <a
          href="https://www.linkedin.com/in/ayan-imran-23024b280/"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          className="leading-none flex items-center justify-center transition-transform hover:scale-[1.15] hover:text-highlight"
        >
          <svg className="block h-7 w-7 shrink-0" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2ZM8.34 18H6V9.5h2.34V18ZM7.17 8.42a1.36 1.36 0 1 1 0-2.72 1.36 1.36 0 0 1 0 2.72ZM18 18h-2.33v-4.38c0-1.04-.38-1.75-1.32-1.75-.72 0-1.15.49-1.34.96-.07.17-.09.41-.09.66V18H10.6s.03-7.43 0-8.5H12.9v1.2c.31-.48.86-1.16 2.1-1.16 1.53 0 2.68 1 2.68 3.17V18Z"/>
          </svg>
        </a>
      </div>
    </div>
  )
}

export default Footer
