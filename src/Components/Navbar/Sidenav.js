import { useState } from 'react';
import Home from '../../img/home.png';
import Students from '../../img/students.png'
import Applications from '../../img/applications.png'
import Searchcourse from '../../img/searchcourse.png'
import Wallet from '../../img/wallet.png'
import Commision from '../../img/commission.png'
import Allied from '../../img/allied-services.png'
import Learning from '../../img/info-learning.png'
import Quicklinks from '../../img/quicklinks.png'
import Feedback from '../../img/feedback.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faCogs,
  faTable,
  faList,
  faUser,
  faHome
} from "@fortawesome/free-solid-svg-icons";

function Sidenav() {
    const [isOpen, setIsOpen] = useState(true);

    const handleTrigger = () => setIsOpen(!isOpen);

  return (
    <>
      <div className={`sidebar ${isOpen ? "sidebar--open" : ""}`}>
          <div className="trigger" onClick={handleTrigger}>
            <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
          </div>

          <div className="sidebar-position active">
            <img src={Home} alt='Dashboard'/>
            <span>Dashboard</span>
          </div>
          <div className="sidebar-position">
          <img src={Students} alt='Students'/>
            <span>Students</span>
          </div>
          <div className="sidebar-position">
          <img src={Applications} alt='Applications'/>
            <span>Applications</span>
          </div>
          <div className="sidebar-position">
          <img src={Searchcourse} alt='Search Courses'/>
            <span>Search Courses</span>
          </div>
          <div className="sidebar-position">
            <img src={Wallet} alt='Wallet'/>
            <span>Wallet</span>
          </div>
          <div className="sidebar-position">
          <img src={Commision} alt='StuCommision Paymentsdents'/>
            <span>Commision Payments</span>
          </div>
          <div className="sidebar-position">
          <img src={Allied} alt='Allied Services'/>
            <span>Allied Services</span>
          </div>
          <div className="sidebar-position">
          <img src={Learning} alt='Learning Resources'/>
            <span>Learning Resources</span>
          </div>
          <div className="sidebar-position">
          <img src={Quicklinks} alt='Quick Links'/>
            <span>Quick Links</span>
          </div>
          <div className="sidebar-position feedback">
          <img src={Feedback} alt='Submit feedback'/>
            <span>Submit feedback</span>
          </div>
        </div>
    </>
  );
}

export default Sidenav;