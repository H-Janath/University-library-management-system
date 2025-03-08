'use client';
import { toast } from 'react-toastify';

import { ImageKitProvider, IKUpload, IKImage } from 'imagekitio-next';
import config from '@/lib/config';
import { useRef, useState } from 'react';
import Image from 'next/image';

const {
  env: {
    imagekit: { publicKey, urlEndpoint },
    apiEndpoint,
  },
} = config;

const authenticator = async () => {
  try {
    const response = await fetch(`${apiEndpoint}/api/auth/imagekit`);
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Request failed with status ${response.status}: ${errorText}`);
    }
    const data = await response.json();
    return {
      token: data.token,
      expire: data.expire,
      signature: data.signature,
    };
  } catch (error: any) {
    console.error('Authentication request failed:', error);
    throw new Error(`Authentication request failed: ${error.message}`);
  }
};

const ImageUpload = ({onFileChange}:{onFileChange:(filePath: string)=>void}) => {
  
  const ikUploadRef = useRef<HTMLInputElement | null>(null);
  const [file, setFile] = useState<{ filePath: string } | null>(null);

  const onError = (error: any) => {
    toast(error.message)
  };

  const onSuccess = (res: any) => {
    setFile(res);
    onFileChange(res.filePath);
    toast("Image upload success");
  };

  return (
    <ImageKitProvider publicKey={publicKey} urlEndpoint={urlEndpoint} authenticator={authenticator}>
      <IKUpload
        className="hidden"
        ref={ikUploadRef}
        onError={onError}
        onSuccess={onSuccess}
        fileName="test-upload.png"
      />
      <button
        className="upload-btn flex items-center gap-2"
        onClick={(e) => {
          e.preventDefault();
          ikUploadRef.current?.click();
        }}
      >
        <Image src="/icons/upload.svg" alt="upload-icon" width={20} height={20} className="object-contain" />
        <p className="text-base text-light-100">Upload a File</p>
      </button>
      {file && (
        <IKImage alt={file.filePath} path={file.filePath} width={500} height={500} />
      )}
    
    </ImageKitProvider>
  );
};

export default ImageUpload;