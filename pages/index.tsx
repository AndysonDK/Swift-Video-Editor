import dynamic from 'next/dynamic';
import { useEffect } from 'react';

//const wasmModule = dynamic(() => import('../cbin/main.wasm'), {ssr: false});

const Index = () => {
  useEffect(async () => {

    const wasmModule = await import('../cbin/main.wasm')
    console.log(wasmModule);

    //const lol: number = wasmModule.add(2, 2);
    //const wasm = await import('../cbin/main.js');

  }, []);

  return <p>loool</p>;
};

export default Index;
