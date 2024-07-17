import { useEffect } from 'react';

const useDisableInspect = () => {
  useEffect(() => {
    const handleContextMenu = (event) => {
      event.preventDefault();
    };

    const handleKeyDown = (event) => {
      // Prevent F12
      if (event.keyCode === 123) {
        event.preventDefault();
      }
      // Prevent Ctrl+Shift+I
      if (event.ctrlKey && event.shiftKey && event.keyCode === 73) {
        event.preventDefault();
      }
      // Prevent Ctrl+Shift+J
      if (event.ctrlKey && event.shiftKey && event.keyCode === 74) {
        event.preventDefault();
      }
      // Prevent Ctrl+U
      if (event.ctrlKey && event.keyCode === 85) {
        event.preventDefault();
      }
      // Prevent Ctrl+Shift+C
      if (event.ctrlKey && event.shiftKey && event.keyCode === 67) {
        event.preventDefault();
      }
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);
};

export default useDisableInspect;
