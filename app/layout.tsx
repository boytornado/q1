// app/layout.tsx
import React from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <header>
        <h1>My Layout</h1>
        {/* แสดง Header หรือ Menu ต่างๆ */}
      </header>

      <main>{children}</main>

      <footer>
        <p>Footer Content</p>
      </footer>
    </div>
  );
};

export default Layout;
