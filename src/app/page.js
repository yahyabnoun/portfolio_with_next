'use client'
import './styles/page.css'
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Nav from './components/Nav'
import photo3 from './images/photo3.png'
import Image from 'next/image'
import Link from 'next/link';



export default function Home() {
  const [darkMode, setdarkMode] = useState(true);

  return (

    <>


      <main data-bs-theme={darkMode ? 'dark' : 'light'} style={{ backgroundColor: darkMode ? '#212121' : '', color: darkMode ? 'white' : '#212121' }} className='container_all'>
        <button onClick={() => { setdarkMode(!darkMode) }} style={{ padding: '10px', position: "absolute", right: '0', bottom: '50%', margin: '0px 10px ' }}> <i class="bi bi-sun-fill"></i></button>
        <Nav darkmode={darkMode} />
        <section className='introduce '  >
          <div className=' mx-auto introduce-div'>


            <p className='introduce-Welcome'>Welcome to my world</p>

            <div className='introduce-h1'>
              <h1    >Hi, I'm <span style={{ color: '#3CB9FF' }}>Bnoun yahya</span></h1>
              <h1    >a Full stack Developer.</h1>
            </div>

            <p className='introduce-detail'>
              I use animation as a third dimension by which to simplify experiences and kuiding
              thro each and every interaction. I'm not adding motion just to spruce things up,
              but doing it in ways that.
            </p>


          </div>
          <div className=' mx-auto image'>

            <Image
              src={photo3}
              style={{ width: '100%', height: 'auto' }}
              alt="Picture of the author"
            />
          </div>
          <div className='introduce-div  mx-auto '>
            <div className='introduce-div-finfMe  '>
              <p > Find With me &nbsp;&nbsp;:</p>
                <div className=' d-flex justify-content-around '>
                    <Link className='Box_Link ' href="/posts/first-post">this </Link>
                    <Link className='Box_Link' href="/posts/first-post">this </Link>
                    <Link className='Box_Link' href="/posts/first-post">this </Link>
                </div>
            </div>
            <div className='introduce-div-finfMe  '>
              <p > best skill on &nbsp;&nbsp;:</p>
                <div className=' d-flex justify-content-around '>
                    <Link className='Box_Link ' href="/posts/first-post">this </Link>
                    <Link className='Box_Link' href="/posts/first-post">this </Link>
                    <Link className='Box_Link' href="/posts/first-post">this </Link>
                </div>
            </div>


          </div>

        </section>

      </main>

    </>

  )
}
