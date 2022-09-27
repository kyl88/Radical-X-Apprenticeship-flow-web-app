import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as MdIcons from 'react-icons/md';
// import * as IoIcons from 'react-icons/io';
import * as BiIcons from 'react-icons/bi';

export const SidebarData = [
    {
    title : 'Dashboard' ,
    route : '/dashboard' ,
    icon : <MdIcons.MdOutlineDashboard /> ,
    className : 'nav-text',
  },
  {
    title : 'Apprenticeship' ,
    route : '/apprenticeship' ,
    icon : <FaIcons.FaMedal /> ,
    className : 'nav-text',
  },
  {
    title : 'Internship' ,
    route : '/internship' ,
    icon : < FaIcons.FaBookOpen /> ,
    className : 'nav-text',
  },
  {
    title : ' Jobs ' ,
    route : '/jobs' ,
    icon : < BiIcons.BiBriefcase /> ,
    className : 'nav-text',
  },
  {
    title : 'Settings' ,
    route : '/settings' ,
    icon : < MdIcons.MdOutlineSettings /> ,
    className : 'nav-text',
  }
]