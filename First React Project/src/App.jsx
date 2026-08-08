import './App.css';
import logo from "./assets/image.jpg";
function App() {
  return <div className="container">
    <nav>
      <div className="left-side">
        <img src="https://tse3.mm.bing.net/th/id/OIP.e8XajFkLVSZ3Ze_SS_ZQjwHaCD?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" alt="upwork" height={30} />
      </div>
      <div className="right-side">
        <p>Log in</p>
        <button>Sign up</button>
      </div>
    </nav>
    <div className="hero-section">
      <h2>Hire the Best Front-End Developers</h2>
      <h3>Clients rate our Front-End Developers <span><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i></span>      4.8/5</h3>
      <p>Based on 2,132 client reviews</p>
      <button>Hire Freelancers</button>
    </div>
   <div className="talented">
        <div class="card">
      <div class="profile">
        <img src={logo} alt="arham"/>
        <div>
          <h2>Saqib Javaid</h2>
          <p>Karachi, Pakistan</p>
        </div>
      </div>

      <div class="info">
        <span><strong>$18/hr</strong></span>

        <span class="rating">
          <i class="fa-solid fa-star"></i> 5.0
        </span>

        <span class="jobs">
          <i class="fa-solid fa-briefcase"></i> 8 jobs
        </span>
      </div>

      <p class="description">
        I'm currently Upwork's top web/mobile developer.
        I build responsive and modern websites using
        React and Next.js.
      </p>

      <div class="skills">
        <span>Front-End Development</span>
        <span>React</span>
        <span>HTML</span>
        <span>CSS</span>
        <span>Javascript</span>

      </div>

      <button>See profile</button>

    </div>
    <div class="card">

      <div class="profile">
        <img src="https://avatars.githubusercontent.com/u/175876289?v=4" alt="arham" />
        <div>
          <h2>Abdullah Hamdani</h2>
          <p>Karachi, Pakistan</p>
        </div>
      </div>

      <div class="info">
        <span><strong>$12/hr</strong></span>

        <span class="rating">
          <i class="fa-solid fa-star"></i> 5.0
        </span>

        <span class="jobs">
          <i class="fa-solid fa-briefcase"></i> 8 jobs
        </span>
      </div>

      <p class="description">
        I'm currently Upwork's top web/mobile developer.
        I build responsive and modern websites using
        React and Next.js.
      </p>

      <div class="skills">
        <span>Front-End Development</span>
        <span>React</span>
        <span>HTML</span>
        <span>CSS</span>
        <span>Javascript</span>

      </div>

      <button>See profile</button>

    </div>
    <div class="card">

      <div class="profile">
        <img src="https://avatars.githubusercontent.com/u/224722350?v=4" alt="arham" />
        <div>
          <h2>Arham Maqsood</h2>
          <p>Karachi, Pakistan</p>
        </div>
      </div>

      <div class="info">
        <span><strong>$10/hr</strong></span>

        <span class="rating">
          <i class="fa-solid fa-star"></i> 5.0
        </span>

        <span class="jobs">
          <i class="fa-solid fa-briefcase"></i> 8 jobs
        </span>
      </div>

      <p class="description">
        I'm currently Upwork's top web/mobile developer.
        I build responsive and modern websites using
        React and Next.js.
      </p>

      <div class="skills">
        <span>Front-End Development</span>
        <span>React</span>
        <span>HTML</span>
        <span>CSS</span>
        <span>Javascript</span>

      </div>

      <button>See profile</button>

    </div>
    </div>
  </div>
}

export default App
