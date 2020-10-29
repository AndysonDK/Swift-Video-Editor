import dynamic from 'next/dynamic'
import Link from 'next/link'

//const RustComponent = dynamic(() => import('../cbin/main.wasm'), { ssr: false });

const Page = ({ router: { query } }) => {

  useEffect(() => {
    const wasm = import('../cbin/main.wasm');

    wasm.then(() => {
      console.log("bob");
    });

  }, []);

  return <p>loool</p>;
};

export default Page;
