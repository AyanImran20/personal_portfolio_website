import React from 'react';

export default function Section({ id, className = '', children }) {
  return (
    <section
      id={id}
      data-fullpage
      className={`bg-surface min-h-[calc(100dvh-4rem)] px-2 py-4 lg:px-10 lg:py-12 ${className}`}
    >
      {children}
    </section>
  );
}
