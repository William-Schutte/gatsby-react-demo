import React from 'react'
import {GiEarthAmerica} from 'react-icons/gi'
import {MdAirplanemodeActive} from 'react-icons/md'
import {BsPeopleFill} from 'react-icons/bs'
import {BsFillCalendarFill} from 'react-icons/bs'

const statsData = [
  {
    icon: (<GiEarthAmerica css={`color: #045bf1;`}/>),
    title: "Hand Picked",
    desc: "The most unique, authentic destinations"
  },
  {
    icon: (<MdAirplanemodeActive css={`color: #f3882e;`}/>),
    title: "All Inclusive",
    desc: "Just click book and we'll do the rest"
  },
  {
    icon: (<BsPeopleFill css={`color: #f34f2e;`}/>),
    title: "Make Connections",
    desc: "Explore with other like-minded Advent(ur)ists"
  },
  {
    icon: (<BsFillCalendarFill css={`color: #3af576;`}/>),
    title: "Stay Longer",
    desc: "Soak in a new culture at your own pace"
  }
];

export default statsData;