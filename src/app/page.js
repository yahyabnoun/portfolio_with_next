'use client'
import './styles/page.css'
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Nav from './components/Nav'
import photo3 from './images/photo3.png'
import photo1 from './images/1.jpg'
import Image from 'next/image'
import Link from 'next/link';



export default function Home() {
  const [darkMode, setdarkMode] = useState(true);

  return (

    <>


      <main className='container_all'  data-bs-theme={darkMode ? 'dark' : 'light'} style={{ backgroundColor: darkMode ? '#212428' : '', color: darkMode ? 'white' : '#212121' }} >
        <button className='buttondarkmode' onClick={() => { setdarkMode(!darkMode) }}> <i class="bi bi-sun-fill"></i></button>
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
        <section className='s_projects'>
          <div className='s_project_header'>
            <p>
                VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK
            </p>
            <h2>
                My Portfolio
            </h2>
          </div>

            <article>
              <div className='div_project'>
                  <div>
                     <Image
                  src={photo1} className='project_image'
                  style={{ width: '100%', height: 'auto' }}
                  alt="Picture of the author"
                />
                  </div>

              </div>
            </article>
        </section>
      </main>

    </>

  )
}
