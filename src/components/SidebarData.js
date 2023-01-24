import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';


export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <RiIcons.RiHome8Line />,
    iconClosed: <RiIcons.RiHome8Line />,
    iconOpened: <RiIcons.RiHome8Line />,
  },
  {
    title: 'Python_Foundations_01',
    path: '/step1/Step_1_1a_Python_Foundations_01',
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    // subNav: [
    //   {
    //     title: '1a',
    //     path: '/step1/1a.ipynb',
    //     icon: <IoIcons.IoIosPaper />,
    //     // iconClosed: <RiIcons.RiArrowDownSFill />,
    //     // iconOpened: <RiIcons.RiArrowUpSFill />,
    //     // subNav: [
    //     //   {
    //     //     title: 'Step_1_1d_Modules_in_Python.ipynb',
    //     //     path: '/step1/Step_1_1d_Modules_in_Python.ipynb',
    //     //     icon: <IoIcons.IoIosPaper />
    //     //   }
    //     // ]
    //   },
    //   {
    //     title: '1b',
    //     path: '/step1/1b.ipynb',
    //     icon: <IoIcons.IoIosPaper />
    //   },
    //   {
    //     title: '1c',
    //     path: '/step1/1c.ipynb',
    //     icon: <IoIcons.IoIosPaper />
    //   },
    //   {
    //     title: 'Step_1_1d_Modules_in_Python',
    //     path: '/step1/Step_1_1d_Modules_in_Python.ipynb',
    //     icon: <IoIcons.IoIosPaper />
    //   },
    // ]
  },
  {
    title: 'Python_Foundations_02',
    path: '/step1/Step_1_1b_Python_Foundations_02',
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
  {
    title: 'Python_Foundations_03',
    path: '/step1/Step_1_1c_Python_Foundations_03',
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  }
]