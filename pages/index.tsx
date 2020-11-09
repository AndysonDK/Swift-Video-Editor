import { useEffect } from 'react';
import { GetServerSideProps } from 'next';
//import { useEffect } from 'react';
//import * as module from '../bin/main.wasm';

//const wasmModule = dynamic(() => import('../cbin/main.wasm'), {ssr: false});

//console.log(wasmModule);
//console.log(wasmModule.e(2, 3));
//const lol: number = wasmModule.add(2, 2);
//console.log(lol);

const Index = () => {
  useEffect(async () => {
    const module = await import('../bin/main.wasm');

    console.log(module);
  }, []);


  return <div>loool</div>;
};


//export const getServerSideProps: GetServerSideProps = async () => {
//  
//  return {
//    props: {lol: 2}
//  };
//}


export default Index;
