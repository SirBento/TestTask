import { BsListCheck,BsShieldLockFill } from "react-icons/bs";
import { FaWhatsapp, FaFacebookF, FaYoutube, FaLinkedinIn, FaYahoo, FaJenkins} from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { BsTwitterX } from "react-icons/bs";
import { IoMdBuild, IoIosHelpCircle } from "react-icons/io";
import { FaCirclePlay } from "react-icons/fa6";
import { MdOutlineSupportAgent,MdSpaceDashboard } from "react-icons/md";
import { PiChartLineUpBold } from "react-icons/pi";
import React from "react";
import seamlessIntegration from '../assets/chess.jpg';
import realTimePayment from '../assets/chess.jpg';
import enhancedPayment from '../assets/chess.jpg';
import customizablePayment from '../assets/chess.jpg';
import useCase from '../assets/chess.jpg';

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

const testimonyData = [
  {
    icon: FaYahoo,
    title: 'Hugly Studio',
    description: 'Hugly Group partners with Hugly Pay to provide its internal applications customers with a fully branded end-to-end payment solution',
  },
  {
    icon: FaJenkins,
    title: 'WeCut',
    description: 'WeCut shortens payment times for disbursements, reduces costs, and increases consumer satisfaction with Hugly Send',
  },
  {
    icon: FcGoogle,
    title: 'Google Zimbabwe',
    description: 'Google increases card-on-file (CoF) approval rates 2.5% by updating Hugly Pay accounts in real-time via the Automatic Billing Updater (ABU) API',
  },
];


const BenefitsData = [
  {
    icon: MdOutlineSupportAgent,
    title: '7-day expert support',
    description: 'Get the help you need from our expert support team on the phone, via live chat, on whatsapp',
  },
  {
    icon: BsShieldLockFill,
    title: 'Fast, secure payments',
    description: 'Quisque fermentum blandit nunc ut dictum. Present vestibulum blandit risus quis sollicitudin.',
  },
  {
    icon: MdSpaceDashboard,
    title: 'Actionable insights to grow',
    description: 'Get relevant highlights and detailed dashboards about vour business dashboards about your business.',
  },
  {
    icon: PiChartLineUpBold,
    title: 'Seamless management',
    description: 'Manage your products, staff, business details, cash flow and more.',
  },
];


const UsecaseDropdownData = [
  {
    title: "Seamless Integration",
    content: "The API allows developers to integrate Hugly Merchant Payments seamlessly into their applications. This integration enables businesses to initiate payment requests, generate payment instructions, and handle payment notifications and confirmations.",
    image: seamlessIntegration,
    isExpanded: false,
  },
  {
    title: "Real-Time Payment Notifications",
    content:
      "The API provides real-time payment notifications, allowing merchants to receive immediate updates on successful payments. This feature enables prompt order processing, instant service activation, or immediate delivery of digital goods, enhancing the overall customer experience.",
    image: realTimePayment,
    isExpanded: false,
  },
  {
    title: "Enhanced Payment Acceptance",
    content:
      "With the Hugly Merchant Payments API, businesses can expand their payment acceptance options beyond traditional methods. By integrating the API into their applications, merchants can accept payments directly from customers' EcoCash accounts, providing a convenient and secure payment experience.",
    image: enhancedPayment,
    isExpanded: false,
  },
  {
    title: "Customizable Payment Flow",
    content: "The Hugly Merchant Payments API offers flexibility in designing payment flows based on specific business requirements. Merchants can customize the payment process to align with their branding and user experience, ensuring a consistent and seamless checkout process for their customers.",
    image: customizablePayment,
    isExpanded: false,
  },
];




const useCaseData = {
  'Large Enterprise': [
    {
      image: useCase,
      title: 'Use case i',
      content: 'Quisque fermentum blandit nunc ut dictum. Praesent vestibulum blandit risus quis sollicitudin.'
    },
    // Add more use cases for 'Large Enterprise'
  ],
  'Small to Medium Business': [
    {
      image: useCase,
      title: 'Use case ii',
      content: 'Quisque fermentum blandit nunc ut dictum. Praesent vestibulum blandit risus quis sollicitudin.'
    },
    // Add more use cases for 'Small to Medium Business'
  ],
  'Merchant': [
    {
      image: useCase,
      title: 'Use case iii',
      content: 'Quisque fermentum blandit nunc ut dictum. Praesent vestibulum blandit risus quis sollicitudin.'
    },
    // Add more use cases for 'Merchant'
  ],
  'Individual': [
    {
      image: useCase,
      title: 'Use case iv',
      content: 'Quisque fermentum blandit nunc ut dictum. Praesent vestibulum blandit risus quis sollicitudin.'
    },
    // Add more use cases for 'Individual'
  ]
};
export { GettingStartedData, socialMediaData, testimonyData, BenefitsData, UsecaseDropdownData ,useCaseData};