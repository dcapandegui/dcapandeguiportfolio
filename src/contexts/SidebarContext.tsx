import { createContext, useContext, useState, useEffect, ReactNode, CSSProperties } from 'react';

interface SidebarContextProps {
  isSidebarOpen: boolean;
  openSidebar: (content: ReactNode) => void;
  closeSidebar: () => void;
  sidebarContent: ReactNode | null;
}

const SidebarContext = createContext<SidebarContextProps | undefined>(undefined);

interface SidebarProviderProps {
  children: ReactNode;
}

export const SidebarProvider = ({ children }: SidebarProviderProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [sidebarContent, setSidebarContent] = useState<ReactNode | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const openSidebar = (content: ReactNode) => {
    setSidebarContent(content);
    setIsSidebarOpen(true);
    setIsAnimating(true);
  };

  const closeSidebar = () => {
    setIsAnimating(false);
    setTimeout(() => {
      setIsSidebarOpen(false);
      setSidebarContent(null);
    }, 300); // Duración de la animación de salida
  };

  useEffect(() => {
    if (isSidebarOpen) {
      setTimeout(() => setIsAnimating(true), 10);
    }
  }, [isSidebarOpen]);

  const sidebarStyles: { overlay: CSSProperties; sidebar: CSSProperties; closeButton: CSSProperties } = {
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: isSidebarOpen ? 'block' : 'none',
      transition: 'opacity 0.3s ease',
      zIndex: 9999999,
    },
    sidebar: {
      position: 'fixed',
      top: 0,
      right: isAnimating ? '0' : '-300px',
      width: '300px',
      height: '100%',
      backgroundColor: 'white',
      boxShadow: '-2px 0 10px rgba(0, 0, 0, 0.2)',
      padding: '20px',
      transition: 'right 0.3s ease',
      color: 'black',
    },
    closeButton: {
      position: 'absolute',
      top: '10px',
      right: '10px',
      background: 'none',
      border: 'none',
      fontSize: '24px',
      cursor: 'pointer',
    },
  };

  return (
    <SidebarContext.Provider value={{ isSidebarOpen, openSidebar, closeSidebar, sidebarContent }}>
      {children}
      {isSidebarOpen && (
        <div style={sidebarStyles.overlay} onClick={closeSidebar}>
          <div style={sidebarStyles.sidebar} onClick={(e) => e.stopPropagation()}>
            <button style={sidebarStyles.closeButton} onClick={closeSidebar}>
              &times;
            </button>
            {sidebarContent}
          </div>
        </div>
      )}
    </SidebarContext.Provider>
  );
};

export const useSidebar = (): SidebarContextProps => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error('useSidebar must be used within a SidebarProvider');
  }
  return context;
};