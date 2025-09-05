import { motion } from 'framer-motion';
import { ReactNode, useState } from 'react';

interface Tab {
  id: string;
  label: ReactNode;
  content: ReactNode;
  icon?: ReactNode;
}

interface AnimatedTabsProps {
  tabs: Tab[];
  className?: string;
  defaultTab?: string;
  animation?: 'slide' | 'fade' | 'scale' | 'none';
  duration?: number;
  variant?: 'default' | 'pills' | 'underline';
  size?: 'sm' | 'md' | 'lg';
}

const AnimatedTabs = ({ 
  tabs, 
  className = '',
  defaultTab,
  animation = 'slide',
  duration = 300,
  variant = 'default',
  size = 'md'
}: AnimatedTabsProps) => {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id);

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
  };

  const getVariantClass = () => {
    switch (variant) {
      case 'pills':
        return 'bg-accent rounded-lg p-1';
      case 'underline':
        return 'border-b border-border';
      default:
        return 'bg-background';
    }
  };

  const getSizeClass = () => {
    switch (size) {
      case 'sm':
        return 'px-3 py-2 text-sm';
      case 'md':
        return 'px-4 py-3 text-base';
      case 'lg':
        return 'px-6 py-4 text-lg';
      default:
        return 'px-4 py-3 text-base';
    }
  };

  const getTabClass = (tabId: string) => {
    const isActive = activeTab === tabId;
    
    switch (variant) {
      case 'pills':
        return `flex items-center space-x-2 rounded-md transition-smooth ${getSizeClass()} ${
          isActive 
            ? 'bg-primary text-primary-foreground shadow-soft' 
            : 'text-muted-foreground hover:text-foreground hover:bg-accent'
        }`;
      case 'underline':
        return `flex items-center space-x-2 border-b-2 transition-smooth ${getSizeClass()} ${
          isActive 
            ? 'border-primary text-primary' 
            : 'border-transparent text-muted-foreground hover:text-foreground hover:border-accent'
        }`;
      default:
        return `flex items-center space-x-2 transition-smooth ${getSizeClass()} ${
          isActive 
            ? 'bg-primary text-primary-foreground shadow-soft' 
            : 'text-muted-foreground hover:text-foreground hover:bg-accent'
        }`;
    }
  };

  const animations = {
    slide: {
      initial: { opacity: 0, x: 20 },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: -20 },
      transition: { duration: duration / 1000 }
    },
    fade: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      transition: { duration: duration / 1000 }
    },
    scale: {
      initial: { opacity: 0, scale: 0.95 },
      animate: { opacity: 1, scale: 1 },
      exit: { opacity: 0, scale: 0.95 },
      transition: { duration: duration / 1000 }
    },
    none: {}
  };

  const activeTabContent = tabs.find(tab => tab.id === activeTab)?.content;

  return (
    <div className={`w-full ${className}`}>
      {/* Tab Headers */}
      <div className={`flex ${getVariantClass()}`}>
        {tabs.map((tab) => (
          <motion.button
            key={tab.id}
            onClick={() => handleTabChange(tab.id)}
            className={getTabClass(tab.id)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {tab.icon && (
              <div className="text-current">
                {tab.icon}
              </div>
            )}
            <span>{tab.label}</span>
          </motion.button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="mt-4">
        <motion.div
          {...animations[animation]}
          key={activeTab}
        >
          {activeTabContent}
        </motion.div>
      </div>
    </div>
  );
};

export default AnimatedTabs;
