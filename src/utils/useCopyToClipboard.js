import { useState, useCallback, useEffect } from 'react';
import copy from 'copy-to-clipboard';

const useCopyToClipboard = (resetInterval = null) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = useCallback((text) => {
    if (typeof text === 'string' || typeof text == 'number') {
      copy(text.toString());
      setIsCopied(true);
    } else {
      setIsCopied(false);
      console.error(
        `cannot copy typeof ${typeof text} to clipboard, must be a string or number`
      );
    }
  }, []);

  useEffect(() => {
    let timeout;
    if (isCopied && resetInterval) {
      timeout = setTimeout(() => setIsCopied(false), resetInterval);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [isCopied, resetInterval]);

  return [isCopied, handleCopy];
};

export default useCopyToClipboard;
