import React from 'react'
import * as IoIcons from 'react-icons/io'
import * as ImIcons from 'react-icons/im'
import * as FcIcons from "react-icons/fc"
import * as BiIcons from "react-icons/bi"
import * as RiIcons from "react-icons/ri"
import * as FiIcons from "react-icons/fi"
import * as FaIcons from "react-icons/fa"
import * as CgIcons from "react-icons/cg"
import * as SiIcons from "react-icons/si"
import * as AiIcons from "react-icons/ai"
import * as VscIcons from "react-icons/vsc"
import * as BsIcons from "react-icons/bs"
import * as MdIcons from "react-icons/md"
import Home from '../NavBar Form/Home'
import Attandance from '../NavBar Form/Attandance'
import Ourteam from '../NavBar Form/Ourteam'
import Service from '../NavBar Form/Service'
import Album from '../NavBar Form/Album'
import Gallery from '../NavBar Form/Gallery'
import Inquire from '../NavBar Form/Inquire'
import Payment from '../NavBar Form/Payment'
import ChildRegister from '../NavBar Form/ChildRegister'
import About from '../NavBar Form/About'
import Contact from '../NavBar Form/Contact'
import SuggestionRecord from '../NavBar Form/SuggestionRecord'
import Lunch from '../NavBar Form/Lunch'
import FormUp from '../NavBar Form/FormUp'
import Notice from '../NavBar Form/Notice'
import SignupRecord from '../NavBar Form/SignupRecord'
import Pnotice from '../NavBar Form/Pnotice'
import InquireRecord from '../NavBar Form/InquireRecord'
import Psuggestion from '../NavBar Form/Psuggestion'
import Profile from '../NavBar Form/Profile'
import Plogout from '../NavBar Form/Plogout'
import Logout from '../NavBar Form/Logout'
import LunchRecord from '../NavBar Form/LunchRecord'
import AProfile from '../NavBar Form/AProfile'
import EditProfile from '../NavBar Form/EditProfile'

const Sidebardata = [

  {
    title: 'Home',
    path: '/home',
    exact: true,
    main: () => <Home></Home>,
    icon: <FcIcons.FcHome />,
    cName: 'nav-text'
  },
  {
    title: 'Profile',
    path: '/Admin-profile',
    main: () => <AProfile />,
    icon: <CgIcons.CgProfile />,
    cName: 'nav-text'
  },
  {
    title: 'Service',
    path: '/service',
    icon: <FcIcons.FcServices />,
    main: () => <Service></Service>,
    cName: 'nav-text',
  },
  {
    title: 'Album',
    path: '/album',
    main: () => <Album></Album>,
    icon: <IoIcons.IoMdAlbums className='iconalbum' />,
    cName: 'nav-text'
  },
  {
    title: 'Gallery',
    path: '/gallery',
    main: () => <Gallery></Gallery>,
    icon: <FcIcons.FcGallery />,
    cName: 'nav-text'
  },
  {
    title: 'Inquirers Response',
    path: '/formup',
    main: () => <FormUp></FormUp>,
    icon: <FiIcons.FiRepeat />,
    cName: 'nav-text'
  }, {
    title: 'Payment',
    path: '/payment',
    main: () => <Payment></Payment>,
    icon: <RiIcons.RiSecurePaymentLine />,
    cName: 'nav-text'
  }, {
    title: 'Child Registration',
    path: '/childreg',
    main: () => <ChildRegister></ChildRegister>,
    icon: <RiIcons.RiRegisteredFill />,
    cName: 'nav-text'
  }, {
    title: 'About',
    path: '/about',
    main: () => <About></About>,
    icon: <FcIcons.FcAbout />,
    cName: 'nav-text'
  },
  {
    title: 'Contact',
    path: '/contact',
    main: () => <Contact></Contact>,
    icon: <FcIcons.FcContacts />,
    cName: 'nav-text'
  },
  {
    title: 'Notice',
    path: '/notice',
    main: () => <Notice></Notice>,
    icon: <CgIcons.CgNotes />,
    cName: 'nav-text'
  },
  {
    title: 'Lunch',
    path: '/lunch',
    main: () => <Lunch></Lunch>,
    icon: <SiIcons.SiIfood />,
    cName: 'nav-text'
  },
  {
    title: 'Suggestion Record',
    path: '/suggetion-record',
    main: () => <SuggestionRecord></SuggestionRecord>,
    icon: <AiIcons.AiOutlineBook />,
    cName: 'nav-text'
  },
  {
    title: 'SignupRecord',
    path: '/signuprecord',
    main: () => <SignupRecord></SignupRecord>,
    icon: <AiIcons.AiOutlineBook />,
    cName: 'nav-text'
  },
  {
    title: 'Inquirer-Record',
    path: '/inquirer_record',
    main: () => <InquireRecord></InquireRecord>,
    icon: <AiIcons.AiOutlineBook />,
    cName: 'nav-text'
  },
  {
    title: 'Our Team',
    path: '/ourteam',
    main: () => <Ourteam></Ourteam>,
    icon: <MdIcons.MdPayment />,
    cName: 'nav-text'
  },
  {
    title: 'Logout',
    path: '/logout',
    main: () => <Logout></Logout>,
    icon: <AiIcons.AiOutlineLogout />,
    cName: 'nav-text'
  }
];
export default Sidebardata

export const Psidebardata = [
  {
    title: 'Profile',
    path: '/profile',
    main: () => <Profile></Profile>,
    icon: <ImIcons.ImProfile />,
    cName: 'nav-text'
  },
  {
    title: 'EditProfile',
    path: '/eprofile',
    main: () => <EditProfile />,
    icon: <FaIcons.FaEdit />,
    cName: 'nav-text'
  },
  {
    title: 'Notice',
    path: '/parent_notice',
    main: () => <Pnotice></Pnotice>,
    icon: <RiIcons.RiFileEditFill />,
    cName: 'nav-text'
  },
  {
    title: 'Suggestion',
    path: '/suggest',
    main: () => <Psuggestion></Psuggestion>,
    icon: <VscIcons.VscReport />,
    cName: 'nav-text'
  },
  {
    title: 'Inquire To Us',
    path: '/inquire',
    main: () => <Inquire></Inquire>,
    icon: <BsIcons.BsFillQuestionSquareFill />,
    cName: 'nav-text'
  },
  {
    title: 'Lunch-Record',
    path: '/lunchrecord',
    main: () => <LunchRecord></LunchRecord>,
    icon: <BiIcons.BiFoodMenu />,
    cName: 'nav-text'
  },
  {
    title: 'Plogout',
    path: '/plogout',
    main: () => <Plogout></Plogout>,
    icon: <RiIcons.RiLogoutCircleRLine />,
    cName: 'nav-text'
  },
  {
    title:'Attandance',
    path:'/attandance',
    main:()=><Attandance></Attandance>,
    icon:<MdIcons.MdAcUnit></MdIcons.MdAcUnit>,
    cName:'nav-text'
  }
];
