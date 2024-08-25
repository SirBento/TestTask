import { BsListCheck } from "react-icons/bs";
import { FaWhatsapp, FaFacebookF, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { IoMdBuild, IoIosHelpCircle } from "react-icons/io";
import { FaCirclePlay } from "react-icons/fa6";

const GettingStartedData = [
  {
    title: 'Find your ideal solution',
    icon: BsListCheck,
    links: [
      { label: 'Business quick start guide', url: '#' },
      { label: 'Pricing guide', url: '#' },
      { label: 'Availability guide', url: '#' },
    ],
  },
  {
    title: 'Videos and learning materials',
    icon: FaCirclePlay,
    links: [
      { label: 'Tutorials', url: '#' },
      { label: 'Webinars', url: '#' },
    ],
  },
  {
    title: 'Build and launch resources',
    icon: IoMdBuild,
    links: [
      { label: 'Developer quick start guide', url: '#' },
      { label: 'API References', url: '#' },
      { label: 'Project launch guide', url: '#' },
    ],
  },
  {
    title: 'Help and support tools',
    icon: IoIosHelpCircle,
    links: [
      { label: 'Developer quick start guide', url: '#' },
      { label: 'API References', url: '#' },
      { label: 'Project launch guide', url: '#' },
    ],
  },
];

const socialMediaData = [
  {
    icon: FaWhatsapp,
    title: 'WhatsApp',
    description: 'Connect with the Hugly Developers community on WhatsApp',
  },
  {
    icon: FaFacebookF,
    title: 'Facebook',
    description: 'Follow @HuglyDev on Facebook',
  },
  {
    icon: FaYoutube,
    title: 'YouTube',
    description: 'Subscribe to Hugly Developers on YouTube',
  },
  {
    icon: BsTwitterX,
    title: 'X',
    description: 'Follow @HuglyDev on X',
  },
  {
    icon: FaLinkedinIn,
    title: 'LinkedIn',
    description: 'Connect with the Hugly Developers community on LinkedIn',
  },
];

export { GettingStartedData, socialMediaData };