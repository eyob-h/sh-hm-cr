'use client';

import { useEffect, useState } from 'react';
import { MAP_EMBED_URL } from '@/constant/site';

const GoogleMap: React.FC = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); 
  }, []);

  return (
    isClient && (
      <iframe 
        src={MAP_EMBED_URL}                         
            style={{ border: 0 , height: '100%', width: '100%'}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
        />     
    )
  );
};

export default GoogleMap;