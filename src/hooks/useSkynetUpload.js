import { useState } from 'react';
import { SkynetClient } from 'skynet-js';

const client = new SkynetClient('https://siasky.net/');

const useSkynetUpload = () => {
  const [skylink, setSkylink] = useState('');
  const [status, setStatus] = useState('');

  const uploadFile = async (file) => {
    try {
      setStatus('uploading');

      const response = await client.uploadFile(file);

      setStatus('completed');

      const portalUrl = client.getSkylinkUrl(response);

      setSkylink(portalUrl);
    } catch (error) {
      setStatus('error');

      console.log(error);
    }
  };

  return { skylink, status, uploadFile };
};

export default useSkynetUpload;
