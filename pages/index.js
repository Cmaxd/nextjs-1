import Head from 'next/head'
import Image from 'next/image'
import test1 from '../public/test1.png';
import test2 from '../public/test2.png';
import test3 from '../public/test3.jpeg';

const RemoteUrl = 'https://s1.ax1x.com/2022/03/29/qcCko6.jpg';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next App 1</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="title">Optimized</h1>
      <main>
        <div>Layout: fill</div>
        <div style={{ width: '100%', height: '50vh', overflow: 'hidden', position: 'relative' }}>
          <Image
            src={test1}
            alt="test1"
            placeholder='blur'
            layout='fill'
          />
        </div>
        <div>Layout: responsive</div>
        <div style={{ width: '100%' }}>
          <Image
            src={RemoteUrl}
            alt="remote"
            width={2048}
            height={1365}
            placeholder='blur'
            blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAADCAMAAABs6DXKAAAAHlBMVEVZhI4hNzyCqaxIc39IcHdwlpowS040W2dCWluSuryJoKFVAAAAGElEQVQImWNgZ2YAAhYGViZOBkZGRjYOAAGBADCaNvj/AAAAAElFTkSuQmCC'
            layout='responsive'
          />
        </div>
        <div>Layout: intrinsic</div>
        <div>
          <Image
            src={test2}
            alt="test2"
            placeholder='blur'
            layout='intrinsic'
          />
        </div>

        <div>Layout: fixed</div>
        <div>
          <Image
            priority
            src={test3}
            width={1280}
            height={854}
            quality={50}
            layout='fixed'
            placeholder='blur'
            blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAADCAMAAABs6DXKAAABHGlDQ1BJQ0MgUHJvZmlsZQAAKJFjYGDiyUnOLWYSYGDIzSspCnJ3UoiIjFJgv8PAyCDJwMygyWCZmFxc4BgQ4MOAE3y7BlQNBJd1QWbhVocVcKWkFicD6T9AHJdcUFTCwMAYA2Rzl5cUgNgZQLZIUjaYXQNiFwEdCGRPALHTIewlYDUQ9g6wmpAgZyD7DJDtkI7ETkJiQ+0FAeZkIxJdTQQoSa0oAdGeEQwMoDCFiCLCCiHGLAbExgwMTEsQYvmLGBgsvgLFJyDEkmYyMGxvZWCQuIUQU1nAwMDfwsCw7XxyaVEZ1GopID7NeJI5mXUSRzb3NwF70UBpE8WPmhOMJKwnubEGlse+zS6oYu3cOKtmTeb+2suHXxr8/w8A7pNTljPn+X4AAAAYUExURdDDulBCK5uLdYx1W3F1VWxtSmNRNefZzXiOHtEAAAAXSURBVAiZY2BnAAEmNiYmZgZGRhZWRgABMgAjjr37vwAAAABJRU5ErkJggg=='
          />
        </div>
      </main>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          width: 100%;
          margin: 1rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: start;
        }
        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
