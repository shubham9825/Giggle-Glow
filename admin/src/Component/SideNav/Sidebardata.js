import React from 'react'
import * as IoIcons from 'react-icons/io'
import * as FcIcons from "react-icons/fc"
import * as MdIcons from "react-icons/md"
import * as RiIcons from "react-icons/ri"
import * as FiIcons from "react-icons/fi"
import Home from '../NavBar Form/Home'
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
import Plogout from'../NavBar Form/Plogout'
import Logout from '../NavBar Form/Logout'
import LunchRecord from '../NavBar Form/LunchRecord'

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
    icon: <RiIcons.RiSecurePaymentLine />,
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
    icon: <MdIcons.MdPayment />,
    cName: 'nav-text'
  },
  {
    title: 'Lunch',
    path: '/lunch',
    main: () => <Lunch></Lunch>,
    icon: <MdIcons.MdPayment />,
    cName: 'nav-text'
  },
  {
    title: 'Suggestion Record',
    path: '/suggetion-record',
    main: () => <SuggestionRecord></SuggestionRecord>,
    icon: <MdIcons.MdPayment />,
    cName: 'nav-text'
  },
  {
    title: 'SignupRecord',
    path: '/signuprecord',
    main: () => <SignupRecord></SignupRecord>,
    icon: <MdIcons.MdPayment />,
    cName: 'nav-text'
  },
  {
    title: 'Inquirer-Record',
    path: '/inquirer_record',
    main: () => <InquireRecord></InquireRecord>,
    icon: <MdIcons.MdPayment />,
    cName: 'nav-text'
  },
  {
    title: 'Logout',
    path: '/logout',
    main: () => <Logout></Logout>,
    icon: <MdIcons.MdPayment />,
    cName: 'nav-text'
  },
  {
    title: 'Inquirer-Record',
    path: '/inquirer_record',
    main: () => <InquireRecord></InquireRecord>,
    icon: <MdIcons.MdPayment />,
    cName: 'nav-text'
  }
];
export default Sidebardata

export const Psidebardata = [
  {
    title: 'Profile',
    path: '/profile',
    main: () => <Profile></Profile>,
    icon: <MdIcons.MdPayment />,
    cName: 'nav-text'
  },
  {
    title: 'Notice',
    path: '/parent_notice',
    main: () => <Pnotice></Pnotice>,
    icon: <MdIcons.MdPayment />,
    cName: 'nav-text'
  },
  {
    title: 'Suggestion',
    path: '/suggest',
    main: () => <Psuggestion></Psuggestion>,
    icon: <MdIcons.MdPayment />,
    cName: 'nav-text'
  },
  {
    title: 'Inquire To Us',
    path: '/inquire',
    main: () => <Inquire></Inquire>,
    icon: <RiIcons.RiQuestionnaireFill />,
    cName: 'nav-text'
  },
  {
    title: 'Plogout',
    path: '/plogout',
    main: () => <Plogout></Plogout>,
    icon: <MdIcons.MdPayment />,
    cName: 'nav-text'
  },
  {
    title: 'Lunch-Record',
    path: '/lunchrecord',
    main: () => <LunchRecord></LunchRecord>,
    icon: <MdIcons.MdPayment />,
    cName: 'nav-text'
}     
];

 