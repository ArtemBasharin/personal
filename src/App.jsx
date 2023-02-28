/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
// import DateToday from "./dateToday";
import "./styles/App.css";
import avatar from "./images/avaHard.png";
import Weather from "./Weather";
import "../node_modules/font-awesome/css/font-awesome.min.css";

function App() {
  return (
    <div className='main-container'>
      {/* <header className='block'>
        <ul className='header-menu horizontal-list'>
          <li>
            <a className='header-menu-tab' href='#1'>
              <span className='icon entypo-cog scnd-font-color'></span>Settings
            </a>
          </li>
          <li>
            <a className='header-menu-tab' href='#2'>
              <span className='icon fontawesome-user scnd-font-color'></span>
              Account
            </a>
          </li>
          <li>
            <a className='header-menu-tab' href='#3'>
              <span className='icon fontawesome-envelope scnd-font-color'></span>
              Messages
            </a>
            <a className='header-menu-number' href='#4'>
              5
            </a>
          </li>
          <li>
            <a className='header-menu-tab' href='#5'>
              <span className='icon fontawesome-star-empty scnd-font-color'></span>
              Favorites
            </a>
          </li>
        </ul>
        <div className='profile-menu'>
          <p>
            Me{" "}
            <a href='#26'>
              <span className='entypo-down-open scnd-font-color'></span>
            </a>
          </p>
          <div className='profile-picture small-profile-picture'>
            <img
              width='40px'
              alt='pic'
              src='#'
            />
          </div>
        </div>
      </header> */}

      <div className='profile block'>
        {/* <a className='add-button' href='#28'>
          <span className='icon entypo-plus scnd-font-color'></span>
        </a> */}
        <div className='profile-picture big-profile-picture clear'>
          <img width='150px' alt='img' src={avatar} />
        </div>
        <h1 className='user-name'>Artem Basharin</h1>
        <div className='profile-description'>
          <p className='scnd-font-color'>Web developer</p>
        </div>
        <div className='profile-description'>
          <p className='scnd-font-color quote'>
            By seeking and blundering we learn.
          </p>
          <p className='scnd-font-color quote quote_author'>J. W. Goethe</p>
        </div>
        {/* <ul className='profile-options horizontal-list'>
          <li>
            <a className='comments' href='#40'>
              <p>
                <span className='icon fontawesome-comment-alt scnd-font-color'></span>
                23
              </p>
            </a>
          </li>
          <li>
            <a className='views' href='#41'>
              <p>
                <span className='icon fontawesome-eye-open scnd-font-color'></span>
                841
              </p>
            </a>
          </li>
          <li>
            <a className='likes' href='#42'>
              <p>
                <span className='icon fontawesome-heart-empty scnd-font-color'></span>
                49
              </p>
            </a>
          </li>
        </ul> */}
      </div>

      <div className='social horizontal-list block'>
        <li className='facebook'>
          <p className='icon'>
            <span className='zocial-facebook'></span>
          </p>
        </li>
        <li className='twitter'>
          <p className='icon'>
            <span className='zocial-twitter'></span>
          </p>
        </li>
        <li className='googleplus'>
          <p className='icon'>
            <span className='zocial-googleplus'></span>
          </p>
        </li>
        <li className='mailbox'>
          <p className='icon'>
            <span className='fontawesome-envelope'></span>
          </p>
        </li>
      </div>

      <div className='block'>
        <h2 className='titular'>EDUCATION</h2>
        <p className='inner_text'>Siberian Transport University</p>
        <p className='inner_text quote'>Management of logistics</p>
      </div>

      <div className='block'>
        <h2 className='titular'>MY STACK & TOOLS</h2>
        <div className='badge_container'>
          <img
            className='badge'
            src='https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white'
            alt='badge'
          />
          <img
            className='badge'
            src='https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white'
            alt='badge'
          />
          <img
            className='badge'
            src='https://img.shields.io/badge/SCSS-1572B6?style=for-the-badge&logo=css3&logoColor=white'
            alt='badge'
          />
          <img
            className='badge'
            src='https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black'
            alt='badge'
          />
          <img
            className='badge'
            src='https://img.shields.io/badge/c++-%2300599C.svg?style=for-the-badge&logo=c%2B%2B&logoColor=white'
            alt='badge'
          />
          <img
            className='badge'
            src='https://img.shields.io/badge/markdown-%23000000.svg?style=for-the-badge&logo=markdown&logoColor=white'
            alt='badge'
          />
          <img
            className='badge'
            src='https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white'
            alt='badge'
          />
          <img
            className='badge'
            src='https://img.shields.io/badge/yarn-%232C8EBB.svg?style=for-the-badge&logo=yarn&logoColor=white'
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
            src='https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white'
            alt='badge'
          />
          <img
            className='badge'
            src='https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white'
            alt='badge'
          />
          <img
            className='badge'
            src='https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white'
            alt='badge'
          />
          <img
            className='badge'
            src='https://img.shields.io/badge/Ubuntu-E95420?style=for-the-badge&logo=ubuntu&logoColor=white'
            alt='badge'
          />
          <img
            className='badge'
            src='https://img.shields.io/badge/nginx-%23009639.svg?style=for-the-badge&logo=nginx&logoColor=white'
            alt='badge'
          />
          <img
            className='badge'
            src='https://img.shields.io/badge/-Arduino-00979D?style=for-the-badge&logo=Arduino&logoColor=white'
            alt='badge'
          />
          <img
            className='badge'
            src='https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white'
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
        <div>
          <img
            className='image-inside'
            src='https://www.codewars.com/users/ArtemBasharin/badges/large'
            alt='https://www.codewars.com/users/ArtemBasharin'
          />
          <img
            className='image-inside'
            src='https://leetcode-stats-six.vercel.app/api?username=ArtemBasharin&theme=dark'
            alt='https://github.com/ArtemBasharin/leetcode-stats'
          />
          {/* <img
            src='https://github-readme-stackoverflow.vercel.app/?userID=17754802&theme=dark'
            alt='https://stackoverflow.com/users/17754802/artembasharin'
          /> */}
        </div>
      </div>

      {/* <div className='menu-box block'>
        <h2 className='titular'>MENU BOX</h2>
        <ul className='menu-box-menu'>
          <li>
            <a className='menu-box-tab' href='#6'>
              <span className='icon fontawesome-envelope scnd-font-color'></span>
              Messages<div className='menu-box-number'>24</div>
            </a>
          </li>
          <li>
            <a className='menu-box-tab' href='#8'>
              <span className='icon entypo-paper-plane scnd-font-color'></span>
              Invites<div className='menu-box-number'>3</div>
            </a>
          </li>
          <li>
            <a className='menu-box-tab' href='#10'>
              <span className='icon entypo-calendar scnd-font-color'></span>
              Events<div className='menu-box-number'>5</div>
            </a>
          </li>
          <li>
            <a className='menu-box-tab' href='#12'>
              <span className='icon entypo-cog scnd-font-color'></span>Account
              Settings
            </a>
          </li>
          <li>
            <a className='menu-box-tab' href='#13'>
              <sapn className='icon entypo-chart-line scnd-font-color'></sapn>
              Statistics
            </a>
          </li>
        </ul>
      </div> */}

      {/* <div className='line-chart-block block clear'>
        <div className='line-chart'>
          <div className='grafico'>
            <ul className='eje-y'>
              <li data-ejeY='30'></li>
              <li data-ejeY='20'></li>
              <li data-ejeY='10'></li>
              <li data-ejeY='0'></li>
            </ul>
            <ul className='eje-x'>
              <li>Apr</li>
              <li>May</li>
              <li>Jun</li>
            </ul>
            <span data-valor='25'>
              <span data-valor='8'>
                <span data-valor='13'>
                  <span data-valor='5'>
                    <span data-valor='23'>
                      <span data-valor='12'>
                        <span data-valor='15'></span>
                      </span>
                    </span>
                  </span>
                </span>
              </span>
            </span>
          </div>
        </div>
        <ul className='time-lenght horizontal-list'>
          <li>
            <a className='time-lenght-btn' href='#14'>
              Week
            </a>
          </li>
          <li>
            <a className='time-lenght-btn' href='#15'>
              Month
            </a>
          </li>
          <li>
            <a className='time-lenght-btn' href='#16'>
              Year
            </a>
          </li>
        </ul>
        <ul className='month-data clear'>
          <li>
            <p>
              APR<span className='scnd-font-color'> 2013</span>
            </p>
            <p>
              <span className='entypo-plus increment'> </span>21<sup>%</sup>
            </p>
          </li>
          <li>
            <p>
              MAY<span className='scnd-font-color'> 2013</span>
            </p>
            <p>
              <span className='entypo-plus increment'> </span>48<sup>%</sup>
            </p>
          </li>
          <li>
            <p>
              JUN<span className='scnd-font-color'> 2013</span>
            </p>
            <p>
              <span className='entypo-plus increment'> </span>35<sup>%</sup>
            </p>
          </li>
        </ul>
      </div> */}

      {/* <div className='media block'>
        <div id='media-display'>
          <a className='media-btn play' href='#23'>
            <span className='fontawesome-play'></span>
          </a>
        </div>
        <div className='media-control-bar'>
          <a className='media-btn play' href='#23'>
            <span className='fontawesome-play scnd-font-color'></span>
          </a>
          <p className='time-passed'>
            4:15 <span className='time-duration scnd-font-color'>/ 9:23</span>
          </p>
          <a className='media-btn volume' href='#24'>
            <span className='fontawesome-volume-up scnd-font-color'></span>
          </a>
          <a className='media-btn resize' href='#25'>
            <span className='fontawesome-resize-full scnd-font-color'></span>
          </a>
        </div>
      </div> */}

      <Weather />

      {/* <div className='tweets block'>
        <h2 className='titular'>
          <span className='icon zocial-twitter'></span>LATEST TWEETS
        </h2>
        <div className='tweet first'>
          <p>
            Ice-cream trucks only play music when out of ice-cream. Well played
            dad. On{" "}
            <a className='tweet-link' href='#17'>
              @Quora
            </a>
          </p>
          <p>
            <a className='time-ago scnd-font-color' href='#18'>
              3 minutes ago
            </a>
          </p>
        </div>
        <div className='tweet'>
          <p>
            We are in the process of pushing out all of the new CC apps! We will
            tweet again once they are live{" "}
            <a className='tweet-link' href='#19'>
              #CreativeCloud
            </a>
          </p>
          <p>
            <a className='scnd-font-color' href='#20'>
              6 hours ago
            </a>
          </p>
        </div>
      </div> */}

      {/* <div className='block'>
        <h2 className='titular'>Available for hiring</h2>
        <div className='input-container'>
          <input
            type='text'
            placeholder='yourname@gmail.com'
            className='email text-input'
          />
          <div className='input-icon envelope-icon-newsletter'>
            <span className='fontawesome-envelope scnd-font-color'></span>
          </div>
        </div>
        <a className='subscribe button' href='#21'>
          SUBSCRIBE
        </a>
      </div> */}

      {/* <div className='account block'>
        <h2 className='titular'>SIGN IN TO YOUR ACCOUNT</h2>
        <div className='input-container'>
          <input
            type='text'
            placeholder='yourname@gmail.com'
            className='email text-input'
          />
          <div className='input-icon envelope-icon-acount'>
            <span className='fontawesome-envelope scnd-font-color'></span>
          </div>
        </div>
        <div className='input-container'>
          <input
            type='text'
            placeholder='Password'
            className='password text-input'
          />
          <div className='input-icon password-icon'>
            <span className='fontawesome-lock scnd-font-color'></span>
          </div>
        </div>
        <a className='sign-in button' href='#22'>
          SIGN IN
        </a>
        <p className='scnd-font-color'>Forgot Password?</p>
        <a className='fb-sign-in' href='58'>
          <p>
            <span className='fb-border'>
              <span className='icon zocial-facebook'></span>
            </span>
            Sign in with Facebook
          </p>
        </a>
      </div> */}

      {/* <div className='loading block'>
        <div className='progress-bar downloading'></div>
        <p>
          <span className='icon fontawesome-cloud-download scnd-font-color'></span>
          Downloading...
        </p>
        <p className='percentage'>
          81<sup>%</sup>
        </p>
        <div className='progress-bar uploading'></div>
        <p>
          <span className='icon fontawesome-cloud-upload scnd-font-color'></span>
          Uploading...
        </p>
        <p className='percentage'>
          43<sup>%</sup>
        </p>
      </div> */}

      {/* <div className='calendar-day block'>
        <div className='arrow-btn-container'>
          <a className='arrow-btn left' href='#200'>
            <span className='icon fontawesome-angle-left'></span>
          </a>
          <h2 className='titular'>WEDNESDAY</h2>
          <a className='arrow-btn right' href='#201'>
            <span className='icon fontawesome-angle-right'></span>
          </a>
        </div>
        <p className='the-day'>26</p>
        <a className='add-event button' href='#27'>
          ADD EVENT
        </a>
      </div> */}

      {/* <div className='calendar-month block'>
        <div className='arrow-btn-container'>
          <a className='arrow-btn left' href='#202'>
            <span className='icon fontawesome-angle-left'></span>
          </a>
          <h2 className='titular'>APRIL 2013</h2>
          <a className='arrow-btn right' href='#203'>
            <span className='icon fontawesome-angle-right'></span>
          </a>
        </div>
        <table className='calendar'>
          <thead className='days-week'>
            <tr>
              <th>S</th>
              <th>M</th>
              <th>T</th>
              <th>W</th>
              <th>R</th>
              <th>F</th>
              <th>S</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <a className='scnd-font-color' href='#100'>
                  1
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <a className='scnd-font-color' href='#101'>
                  2
                </a>
              </td>
              <td>
                <a className='scnd-font-color' href='#102'>
                  3
                </a>
              </td>
              <td>
                <a className='scnd-font-color' href='#103'>
                  4
                </a>
              </td>
              <td>
                <a className='scnd-font-color' href='#104'>
                  5
                </a>
              </td>
              <td>
                <a className='scnd-font-color' href='#105'>
                  6
                </a>
              </td>
              <td>
                <a className='scnd-font-color' href='#106'>
                  7
                </a>
              </td>
              <td>
                <a className='scnd-font-color' href='#107'>
                  8
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <a className='scnd-font-color' href='#108'>
                  9
                </a>
              </td>
              <td>
                <a className='scnd-font-color' href='#109'>
                  10
                </a>
              </td>
              <td>
                <a className='scnd-font-color' href='#110'>
                  11
                </a>
              </td>
              <td>
                <a className='scnd-font-color' href='#111'>
                  12
                </a>
              </td>
              <td>
                <a className='scnd-font-color' href='#112'>
                  13
                </a>
              </td>
              <td>
                <a className='scnd-font-color' href='#113'>
                  14
                </a>
              </td>
              <td>
                <a className='scnd-font-color' href='#114'>
                  15
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <a className='scnd-font-color' href='#115'>
                  16
                </a>
              </td>
              <td>
                <a className='scnd-font-color' href='#116'>
                  17
                </a>
              </td>
              <td>
                <a className='scnd-font-color' href='#117'>
                  18
                </a>
              </td>
              <td>
                <a className='scnd-font-color' href='#118'>
                  19
                </a>
              </td>
              <td>
                <a className='scnd-font-color' href='#119'>
                  20
                </a>
              </td>
              <td>
                <a className='scnd-font-color' href='#120'>
                  21
                </a>
              </td>
              <td>
                <a className='scnd-font-color' href='#121'>
                  22
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <a className='scnd-font-color' href='#122'>
                  23
                </a>
              </td>
              <td>
                <a className='scnd-font-color' href='#123'>
                  24
                </a>
              </td>
              <td>
                <a className='scnd-font-color' href='#124'>
                  25
                </a>
              </td>
              <td>
                <a className='today' href='#125'>
                  26
                </a>
              </td>
              <td>
                <a href='#126'>27</a>
              </td>
              <td>
                <a href='#127'>28</a>
              </td>
              <td>
                <a href='#128'>29</a>
              </td>
            </tr>
            <tr>
              <td>
                <a href='#129'>30</a>
              </td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div> */}
    </div>
  );
}

export default App;
