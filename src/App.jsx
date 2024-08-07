/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./styles/App.css";
import avatar from "./images/avaHard.png";
import habr from "./images/habr.svg";
import fcc from "./images/fcc.svg";
import Weather from "./Weather";
import "../node_modules/font-awesome/css/font-awesome.min.css";

function App() {
  return (
    <div className='main-container'>
      <div className='profile block'>
        <div className='profile-picture big-profile-picture clear'>
          <img alt='img' width='150px' src={avatar} />
        </div>
        <h1 className='user-name'>Artem Basharin</h1>
        <div className='profile-description'>
          <p className='scnd-font-color'>Frontend Developer</p>
        </div>
        <div className='profile-description'>
          <p className='scnd-font-color quote'>
            By seeking and blundering we learn.
          </p>
          <p className='scnd-font-color quote quote_author'>J. W. Goethe</p>
        </div>
      </div>

      <div className='social horizontal-list block'>
        <li className='icon sign'>
          <a href='Artem_Basharin_CV.pdf' download>
            CV
          </a>
        </li>
        <li className='icon'>
          <a
            href='https://www.linkedin.com/in/artbash/'
            className='fa fa-linkedin-square'
          ></a>
        </li>
        <li className='icon'>
          <a
            href='https://github.com/ArtemBasharin'
            className='fa fa-github'
            alt='github'
          ></a>
        </li>
        <li className='icon'>
          <a href='https://t.me/HonestyBash' className='fa fa-telegram'></a>
        </li>
        <li className='icon'>
          <a href='mailto:basharinaa@mail.ru' className='fa fa-envelope-o'></a>
        </li>
        <li className='icon'>
          <a href='https://career.habr.com/artembash'>
            <img src={habr} alt='img' className='icon_habr' />
          </a>
        </li>
      </div>

      <div className='block'>
        <h2 className='titular'>EDUCATION</h2>
        <p className='inner_text'>Yandex.Practicum</p>
        <p className='inner_text quote'>Web developer</p>
        <p className='inner_text'>Siberian Transport University</p>
        <p className='inner_text quote'>Management of logistics</p>
      </div>

      <div className='block'>
        <h2 className='titular'>MY STACK & TOOLS</h2>
        <div className='badge_container'>
          <img
            className='badge'
            src='https://img.shields.io/badge/SCSS-1572B6?style=for-the-badge&logo=css3&logoColor=white'
            alt='badge'
          />{" "}
          <img
            className='badge'
            src='https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white'
            alt='badge'
          />
          <img
            className='badge'
            src='https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white'
            alt='badge'
          />
          <img
            className='badge'
            src='https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=material-ui&logoColor=white'
            alt='badge'
          />
          <img
            className='badge'
            src='https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black'
            alt='badge'
          />
          <img
            className='badge'
            src='https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white'
            alt='badge'
          />
          <img
            className='badge'
            src='https://img.shields.io/badge/D3js-F7DF1E?style=for-the-badge'
            alt='badge'
          />
          <img
            className='badge'
            src='https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white'
            alt='badge'
          />
          <img
            className='badge'
            src='https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB'
            alt='badge'
          />
          <img
            className='badge'
            src='https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB'
            alt='badge'
          />
          <img
            className='badge'
            src='https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white'
            alt='badge'
          />
          <img
            className='badge'
            src='https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white'
            alt='badge'
          />
          <img
            className='badge'
            src='https://img.shields.io/badge/-Arduino-00979D?style=for-the-badge&logo=Arduino&logoColor=white'
            alt='badge'
          />
          <img
            className='badge'
            src='https://img.shields.io/badge/c++-%2300599C.svg?style=for-the-badge&logo=c%2B%2B&logoColor=white'
            alt='badge'
          />
          <img
            className='badge'
            src='https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white'
            alt='badge'
          />
        </div>
      </div>

      <div className='block'>
        <h2 className='titular'>DESIGN TOOLS</h2>
        <div className='badge_container'>
          <img
            className='badge'
            src='https://img.shields.io/badge/Adobe%20Photoshop-31A8FF?style=for-the-badge&logo=Adobe%20Photoshop&logoColor=black'
            alt='badge'
          />
          <img
            className='badge'
            src='https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white'
            alt='badge'
          />
          <img
            className='badge'
            src='https://img.shields.io/badge/SolidWorks-DA1F26?style=for-the-badge&logo=dassaultsystemes&logoColor=white'
            alt='badge'
          />
          <img
            className='badge'
            src='https://img.shields.io/badge/CorelDraw-4EA94B?style=for-the-badge'
            alt='badge'
          />
        </div>
      </div>

      <div className='block'>
        <h2 className='titular'>ACHIEVEMENTS</h2>
        <div className='block_achievments'>
          <p className='inner_text quote_author'>Codewars</p>
          <img
            className='image-inside'
            src='https://www.codewars.com/users/ArtemBasharin/badges/large'
            alt='https://www.codewars.com/users/ArtemBasharin'
          />
          <p className='inner_text quote_author'>Leetcode</p>
          <img
            className='image-inside'
            src='https://leetcard.jacoblin.cool/ArtemBasharin?theme=dark'
            alt='https://github.com/ArtemBasharin/leetcode-stats'
          />
          {/* <img
            src='https://github-readme-stackoverflow.vercel.app/?userID=17754802&theme=dark'
            alt='https://stackoverflow.com/users/17754802/artembasharin'
          /> */}
        </div>
      </div>

      <div className='block'>
        <h2 className='titular'>CERTIFICATION</h2>
        <div className='block_cert'>
          <img alt='img' src={fcc} className='icon_small' />
          <a href='https://freecodecamp.org/certification/artembash/responsive-web-design'>
            2021, Responsive Web-design
          </a>
        </div>

        <div className='block_cert'>
          <img alt='img' src={fcc} className='icon_small' />
          <a href='https://www.freecodecamp.org/certification/artembash/javascript-algorithms-and-data-structures'>
            2021, JS Algorithms and Data Structures
          </a>
        </div>

        <div className='block_cert'>
          <img src={fcc} className='icon_small' alt='img' />
          <a href='https://www.freecodecamp.org/certification/artembash/front-end-development-libraries'>
            2024, Frontend development libraries
          </a>
        </div>

        <div className='block_cert'>
          <img src={fcc} className='icon_small' alt='img' />
          <a href='https://www.freecodecamp.org/certification/artembash/data-visualization'>
            2023, Data Visualisation
          </a>
        </div>
      </div>

      <div className='block'>
        <h2 className='titular titular_weather'>WHERE YOU ARE NOW</h2>
        <Weather />
      </div>
    </div>
  );
}

export default App;
