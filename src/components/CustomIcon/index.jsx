import { IconContext } from 'react-icons';


import { IoMdCall, IoMdMail, IoMdSend } from 'react-icons/io';
import {
  FaFacebookF,
  FaXTwitter,
  FaInstagram
} from 'react-icons/fa6';
import { FaLinkedinIn, FaRegCheckCircle } from 'react-icons/fa';
import { AiOutlineCar, AiOutlineContacts } from 'react-icons/ai';
import { MdArrowRight } from 'react-icons/md';
import { BiLike } from "react-icons/bi";

export default function CustomIcon({ icon, color, size }) {
  const iconMapping = {
    call: IoMdCall,
    mail: IoMdMail,
    send: IoMdSend,
    facebook: FaFacebookF,
    twitter: FaXTwitter,
    linkedin: FaLinkedinIn,
    instagram: FaInstagram,
    car: AiOutlineCar,
    check: FaRegCheckCircle,
    calendar: AiOutlineContacts,
    like: BiLike,
    arrowRight: MdArrowRight
  };

  const IconComponent = iconMapping[icon];

  return (
    <IconContext.Provider value={{ color, size }}>
      <IconComponent />
    </IconContext.Provider>
  );
}
