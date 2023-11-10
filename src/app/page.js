'use client'
import './styles/page.css'
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Nav from './components/Nav'
import photo3 from './images/photo3.png'
import photo1 from './images/1.jpg'
import Image from 'next/image'
import Link from 'next/link';

const data =
  {
    projects:[
      {
        title:"c",
        img:""
      }
    ]
}


export default function Home() {
  const [darkMode, setdarkMode] = useState(true);
  let dataOfProjects = [
    {title : "NFT Dashboard Application Develoment" , description : 'NFT Dashboard Application Develoment' , photo : 'photo',
    tags : ['Html','css']
  }
  ]



  return (

    <>


      <main className='container_all'  data-bs-theme={darkMode ? 'dark' : 'light'} style={{ backgroundColor: darkMode ? '#212428' : '', color: darkMode ? 'white' : '#212121' }} >
        <button className='buttondarkmode' onClick={() => { setdarkMode(!darkMode) }}> <i className="bi bi-sun-fill"></i></button>
        <Nav darkmode={darkMode} />
        <section className='introduce'  >


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

          <div className='introduce-div skills   mx-auto '>
            <div className='introduce-div-finfMe  '>
              <p > Find With me &nbsp;&nbsp;:</p>
                <div className=' d-flex justify-content-around '>
                    <Link className='Box_Link ' href="/posts/first-post">
                    <svg  viewBox="0 -3.5 256 256" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet">

              <g >

              <path d="M127.505 0C57.095 0 0 57.085 0 127.505c0 56.336 36.534 104.13 87.196 120.99 6.372 1.18 8.712-2.766 8.712-6.134 0-3.04-.119-13.085-.173-23.739-35.473 7.713-42.958-15.044-42.958-15.044-5.8-14.738-14.157-18.656-14.157-18.656-11.568-7.914.872-7.752.872-7.752 12.804.9 19.546 13.14 19.546 13.14 11.372 19.493 29.828 13.857 37.104 10.6 1.144-8.242 4.449-13.866 8.095-17.05-28.32-3.225-58.092-14.158-58.092-63.014 0-13.92 4.981-25.295 13.138-34.224-1.324-3.212-5.688-16.18 1.235-33.743 0 0 10.707-3.427 35.073 13.07 10.17-2.826 21.078-4.242 31.914-4.29 10.836.048 21.752 1.464 31.942 4.29 24.337-16.497 35.029-13.07 35.029-13.07 6.94 17.563 2.574 30.531 1.25 33.743 8.175 8.929 13.122 20.303 13.122 34.224 0 48.972-29.828 59.756-58.22 62.912 4.573 3.957 8.648 11.717 8.648 23.612 0 17.06-.148 30.791-.148 34.991 0 3.393 2.295 7.369 8.759 6.117 50.634-16.879 87.122-64.656 87.122-120.973C255.009 57.085 197.922 0 127.505 0"/>

              <path d="M47.755 181.634c-.28.633-1.278.823-2.185.389-.925-.416-1.445-1.28-1.145-1.916.275-.652 1.273-.834 2.196-.396.927.415 1.455 1.287 1.134 1.923M54.027 187.23c-.608.564-1.797.302-2.604-.589-.834-.889-.99-2.077-.373-2.65.627-.563 1.78-.3 2.616.59.834.899.996 2.08.36 2.65M58.33 194.39c-.782.543-2.06.034-2.849-1.1-.781-1.133-.781-2.493.017-3.038.792-.545 2.05-.055 2.85 1.07.78 1.153.78 2.513-.019 3.069M65.606 202.683c-.699.77-2.187.564-3.277-.488-1.114-1.028-1.425-2.487-.724-3.258.707-.772 2.204-.555 3.302.488 1.107 1.026 1.445 2.496.7 3.258M75.01 205.483c-.307.998-1.741 1.452-3.185 1.028-1.442-.437-2.386-1.607-2.095-2.616.3-1.005 1.74-1.478 3.195-1.024 1.44.435 2.386 1.596 2.086 2.612M85.714 206.67c.036 1.052-1.189 1.924-2.705 1.943-1.525.033-2.758-.818-2.774-1.852 0-1.062 1.197-1.926 2.721-1.951 1.516-.03 2.758.815 2.758 1.86M96.228 206.267c.182 1.026-.872 2.08-2.377 2.36-1.48.27-2.85-.363-3.039-1.38-.184-1.052.89-2.105 2.367-2.378 1.508-.262 2.857.355 3.049 1.398"/>

              </g>

              </svg>
                      
                      
                      
                       </Link>
                    <Link className='Box_Link' href="/posts/first-post">
                    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 5 1036 990"><path d="M0 120c0-33.334 11.667-60.834 35-82.5C58.333 15.833 88.667 5 126 5c36.667 0 66.333 10.666 89 32 23.333 22 35 50.666 35 86 0 32-11.333 58.666-34 80-23.333 22-54 33-92 33h-1c-36.667 0-66.333-11-89-33S0 153.333 0 120zm13 875V327h222v668H13zm345 0h222V622c0-23.334 2.667-41.334 8-54 9.333-22.667 23.5-41.834 42.5-57.5 19-15.667 42.833-23.5 71.5-23.5 74.667 0 112 50.333 112 151v357h222V612c0-98.667-23.333-173.5-70-224.5S857.667 311 781 311c-86 0-153 37-201 111v2h-1l1-2v-95H358c1.333 21.333 2 87.666 2 199 0 111.333-.667 267.666-2 469z"/></svg>                      
                      
                      
                  </Link>
                    <Link className='Box_Link' href="/posts/first-post">
                    <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 49.4 512 399.4200000000001"><g fill="none" fill-rule="evenodd"><g fill-rule="nonzero"><path d="M34.91 448.818h81.454V251L0 163.727V413.91c0 19.287 15.622 34.91 34.91 34.91z" fill="#4285f4"/><path d="M395.636 448.818h81.455c19.287 0 34.909-15.622 34.909-34.909V163.727L395.636 251z" fill="#34a853"/><path d="M395.636 99.727V251L512 163.727v-46.545c0-43.142-49.25-67.782-83.782-41.891z" fill="#fbbc04"/></g><path d="M116.364 251V99.727L256 204.455 395.636 99.727V251L256 355.727z" fill="#ea4335"/><path d="M0 117.182v46.545L116.364 251V99.727L83.782 75.291C49.25 49.4 0 74.04 0 117.18z" fill="#c5221f" fill-rule="nonzero"/></g></svg>

                       </Link>
                </div>
            </div>
            <div className='introduce-div-finfMe  '>
              <p > best skill on &nbsp;&nbsp;:</p>
                <div className=' d-flex justify-content-around '>
                    <Link className='Box_Link ' href="/posts/first-post">
                    <svg viewBox="0 0 256 326" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet"><g fill="#2BA977"><path d="M114.784 0h53.278v244.191c-27.29 5.162-47.38 7.193-69.117 7.193C33.873 251.316 0 222.245 0 166.412c0-53.795 35.93-88.708 91.608-88.708 8.64 0 15.222.68 23.176 2.717V0zm1.867 124.427c-6.24-2.038-11.382-2.717-17.965-2.717-26.947 0-42.512 16.437-42.512 45.243 0 28.046 14.88 43.532 42.17 43.532 5.896 0 10.696-.332 18.307-1.351v-84.707z"/><path d="M255.187 84.26v122.263c0 42.105-3.154 62.353-12.411 79.81-8.64 16.783-20.022 27.366-43.541 39.055l-49.438-23.297c23.519-10.93 34.901-20.588 42.17-35.327 7.61-15.072 10.01-32.529 10.01-78.445V84.261h53.21zM196.608 0h53.278v54.135h-53.278V0z"/></g></svg>
                      
                       </Link>
                    <Link className='Box_Link' href="/posts/first-post">
                      <svg fill="#ff2d20"  viewBox="0 -.11376601 49.74245785 51.31690859"  xmlns="http://www.w3.org/2000/svg"><path d="m49.626 11.564a.809.809 0 0 1 .028.209v10.972a.8.8 0 0 1 -.402.694l-9.209 5.302v10.509c0 .286-.152.55-.4.694l-19.223 11.066c-.044.025-.092.041-.14.058-.018.006-.035.017-.054.022a.805.805 0 0 1 -.41 0c-.022-.006-.042-.018-.063-.026-.044-.016-.09-.03-.132-.054l-19.219-11.066a.801.801 0 0 1 -.402-.694v-32.916c0-.072.01-.142.028-.21.006-.023.02-.044.028-.067.015-.042.029-.085.051-.124.015-.026.037-.047.055-.071.023-.032.044-.065.071-.093.023-.023.053-.04.079-.06.029-.024.055-.05.088-.069h.001l9.61-5.533a.802.802 0 0 1 .8 0l9.61 5.533h.002c.032.02.059.045.088.068.026.02.055.038.078.06.028.029.048.062.072.094.017.024.04.045.054.071.023.04.036.082.052.124.008.023.022.044.028.068a.809.809 0 0 1 .028.209v20.559l8.008-4.611v-10.51c0-.07.01-.141.028-.208.007-.024.02-.045.028-.068.016-.042.03-.085.052-.124.015-.026.037-.047.054-.071.024-.032.044-.065.072-.093.023-.023.052-.04.078-.06.03-.024.056-.05.088-.069h.001l9.611-5.533a.801.801 0 0 1 .8 0l9.61 5.533c.034.02.06.045.09.068.025.02.054.038.077.06.028.029.048.062.072.094.018.024.04.045.054.071.023.039.036.082.052.124.009.023.022.044.028.068zm-1.574 10.718v-9.124l-3.363 1.936-4.646 2.675v9.124l8.01-4.611zm-9.61 16.505v-9.13l-4.57 2.61-13.05 7.448v9.216zm-36.84-31.068v31.068l17.618 10.143v-9.214l-9.204-5.209-.003-.002-.004-.002c-.031-.018-.057-.044-.086-.066-.025-.02-.054-.036-.076-.058l-.002-.003c-.026-.025-.044-.056-.066-.084-.02-.027-.044-.05-.06-.078l-.001-.003c-.018-.03-.029-.066-.042-.1-.013-.03-.03-.058-.038-.09v-.001c-.01-.038-.012-.078-.016-.117-.004-.03-.012-.06-.012-.09v-21.483l-4.645-2.676-3.363-1.934zm8.81-5.994-8.007 4.609 8.005 4.609 8.006-4.61-8.006-4.608zm4.164 28.764 4.645-2.674v-20.096l-3.363 1.936-4.646 2.675v20.096zm24.667-23.325-8.006 4.609 8.006 4.609 8.005-4.61zm-.801 10.605-4.646-2.675-3.363-1.936v9.124l4.645 2.674 3.364 1.937zm-18.422 20.561 11.743-6.704 5.87-3.35-8-4.606-9.211 5.303-8.395 4.833z" /></svg>
                      
                       </Link>
                    <Link className='Box_Link' href="/posts/first-post">
                      <svg viewBox="175.7 78 490.6 436.9"  xmlns="http://www.w3.org/2000/svg"><g fill="#61dafb"><path d="m666.3 296.5c0-32.5-40.7-63.3-103.1-82.4 14.4-63.6 8-114.2-20.2-130.4-6.5-3.8-14.1-5.6-22.4-5.6v22.3c4.6 0 8.3.9 11.4 2.6 13.6 7.8 19.5 37.5 14.9 75.7-1.1 9.4-2.9 19.3-5.1 29.4-19.6-4.8-41-8.5-63.5-10.9-13.5-18.5-27.5-35.3-41.6-50 32.6-30.3 63.2-46.9 84-46.9v-22.3c-27.5 0-63.5 19.6-99.9 53.6-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7 0 51.4 16.5 84 46.6-14 14.7-28 31.4-41.3 49.9-22.6 2.4-44 6.1-63.6 11-2.3-10-4-19.7-5.2-29-4.7-38.2 1.1-67.9 14.6-75.8 3-1.8 6.9-2.6 11.5-2.6v-22.3c-8.4 0-16 1.8-22.6 5.6-28.1 16.2-34.4 66.7-19.9 130.1-62.2 19.2-102.7 49.9-102.7 82.3 0 32.5 40.7 63.3 103.1 82.4-14.4 63.6-8 114.2 20.2 130.4 6.5 3.8 14.1 5.6 22.5 5.6 27.5 0 63.5-19.6 99.9-53.6 36.4 33.8 72.4 53.2 99.9 53.2 8.4 0 16-1.8 22.6-5.6 28.1-16.2 34.4-66.7 19.9-130.1 62-19.1 102.5-49.9 102.5-82.3zm-130.2-66.7c-3.7 12.9-8.3 26.2-13.5 39.5-4.1-8-8.4-16-13.1-24-4.6-8-9.5-15.8-14.4-23.4 14.2 2.1 27.9 4.7 41 7.9zm-45.8 106.5c-7.8 13.5-15.8 26.3-24.1 38.2-14.9 1.3-30 2-45.2 2-15.1 0-30.2-.7-45-1.9-8.3-11.9-16.4-24.6-24.2-38-7.6-13.1-14.5-26.4-20.8-39.8 6.2-13.4 13.2-26.8 20.7-39.9 7.8-13.5 15.8-26.3 24.1-38.2 14.9-1.3 30-2 45.2-2 15.1 0 30.2.7 45 1.9 8.3 11.9 16.4 24.6 24.2 38 7.6 13.1 14.5 26.4 20.8 39.8-6.3 13.4-13.2 26.8-20.7 39.9zm32.3-13c5.4 13.4 10 26.8 13.8 39.8-13.1 3.2-26.9 5.9-41.2 8 4.9-7.7 9.8-15.6 14.4-23.7 4.6-8 8.9-16.1 13-24.1zm-101.4 106.7c-9.3-9.6-18.6-20.3-27.8-32 9 .4 18.2.7 27.5.7 9.4 0 18.7-.2 27.8-.7-9 11.7-18.3 22.4-27.5 32zm-74.4-58.9c-14.2-2.1-27.9-4.7-41-7.9 3.7-12.9 8.3-26.2 13.5-39.5 4.1 8 8.4 16 13.1 24s9.5 15.8 14.4 23.4zm73.9-208.1c9.3 9.6 18.6 20.3 27.8 32-9-.4-18.2-.7-27.5-.7-9.4 0-18.7.2-27.8.7 9-11.7 18.3-22.4 27.5-32zm-74 58.9c-4.9 7.7-9.8 15.6-14.4 23.7-4.6 8-8.9 16-13 24-5.4-13.4-10-26.8-13.8-39.8 13.1-3.1 26.9-5.8 41.2-7.9zm-90.5 125.2c-35.4-15.1-58.3-34.9-58.3-50.6s22.9-35.6 58.3-50.6c8.6-3.7 18-7 27.7-10.1 5.7 19.6 13.2 40 22.5 60.9-9.2 20.8-16.6 41.1-22.2 60.6-9.9-3.1-19.3-6.5-28-10.2zm53.8 142.9c-13.6-7.8-19.5-37.5-14.9-75.7 1.1-9.4 2.9-19.3 5.1-29.4 19.6 4.8 41 8.5 63.5 10.9 13.5 18.5 27.5 35.3 41.6 50-32.6 30.3-63.2 46.9-84 46.9-4.5-.1-8.3-1-11.3-2.7zm237.2-76.2c4.7 38.2-1.1 67.9-14.6 75.8-3 1.8-6.9 2.6-11.5 2.6-20.7 0-51.4-16.5-84-46.6 14-14.7 28-31.4 41.3-49.9 22.6-2.4 44-6.1 63.6-11 2.3 10.1 4.1 19.8 5.2 29.1zm38.5-66.7c-8.6 3.7-18 7-27.7 10.1-5.7-19.6-13.2-40-22.5-60.9 9.2-20.8 16.6-41.1 22.2-60.6 9.9 3.1 19.3 6.5 28.1 10.2 35.4 15.1 58.3 34.9 58.3 50.6-.1 15.7-23 35.6-58.4 50.6z"/><circle cx="420.9" cy="296.5" r="45.7"/></g></svg>
                      
                      </Link>
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

<<<<<<< HEAD
      <section className='section2'>
        <div className='header'>
          <p className='subtitle'>visit My projects</p>
          <h1>My projects</h1>
        </div>
        {
          dataOfProjects.map((item,ind) => {
            return (
              <div class="card" tabIndex={ind}>
              <Image
                src={photo3}
                style={{ width: '100%', height: 'auto' }}
                alt={item.title}
              />
              <div className="card-body">
              <div className='div_tags'>
                {/* <span>tags : </span> */}
                {
                    item.tags.map((item) => {
                      return (
                              <p  className="card_tag">{item}</p>
                      )
                }
                )
              }
                
              </div>
              <h5 className="card_title">{item.title}</h5>
              
              {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
              </div>
          </div>
            )
          }
          )
        }




      </section>

      <section className='section3'>
      <div className='header'>
          <p className='subtitle'>7+ Years of Experience</p>
          <h1>My Resume</h1>
        </div>

        <div className='Resume'>
          <div className='Education'>
          <h3>Education Quality</h3>
            <div className='all_box'>
                <div className='box'>
                    <h5 className='title-job'>Sr. Software Engineer</h5>
                    <p className='subTitle-job'>Google Out Tech - (2017 - Present)</p>
                    <hr />
                    <p className='description'>
                      Google's hiring process is an important part of our
                      culture. Googlers care deeply about their teams and
                      the people who make them up.
                    </p>
                </div>
                <div className='box'>
                    <h5 className='title-job'>Sr. Software Engineer</h5>
                    <p className='subTitle-job'>Google Out Tech - (2017 - Present)</p>
                    <hr />
                    <p className='description'>
                      Google's hiring process is an important part of our
                      culture. Googlers care deeply about their teams and
                      the people who make them up.
                    </p>
                </div>
            </div>

          </div>
          <div className='Experience'>
          <h3>Education Quality</h3>
            <div className='all_box'>
                <div className='box'>
                    <h5 className='title-job'>Sr. Software Engineer</h5>
                    <p className='subTitle-job'>Google Out Tech - (2017 - Present)</p>
                    <hr />
                    <p className='description'>
                      Google's hiring process is an important part of our
                      culture. Googlers care deeply about their teams and
                      the people who make them up.
                    </p>
                </div>
                <div className='box'>
                    <h5 className='title-job'>Sr. Software Engineer</h5>
                    <p className='subTitle-job'>Google Out Tech - (2017 - Present)</p>
                    <hr />
                    <p className='description'>
                      Google's hiring process is an important part of our
                      culture. Googlers care deeply about their teams and
                      the people who make them up.
                    </p>
                </div>
            </div>






          </div>
        </div>
      </section>




=======
            <article>
              <div className='div_project'>
                  <div>
                     <Image
                  src={photo1} className='project_image'
                  style={{ width: '100%', height: 'auto' }}
                  alt="Picture of the author"
                />
                  </div>
                  <p>
                   NFT Dashboard Application Development
                  </p>

              </div>
            </article>
        </section>
>>>>>>> 6443e5880867df4ce387b8ea73233bf4eae751b7
      </main>

    </>

  )
}
