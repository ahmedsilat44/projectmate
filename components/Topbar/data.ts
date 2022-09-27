import { MdRoofing } from 'react-icons/md';
import { IoCodeSlash } from 'react-icons/io5';
import { AiOutlineRead } from 'react-icons/ai';
import { TbBrandGithub, TbBrandDiscord } from 'react-icons/tb';

export const appRoutes = [
  {
    title: 'home',
    url: '/',
    Icon: MdRoofing,
    anchorTagProps: {},
  },
  {
    title: 'projects',
    url: '/projects',
    Icon: IoCodeSlash,
    anchorTagProps: {},
  },
  {
    title: 'about',
    url: '/about',
    Icon: AiOutlineRead,
    anchorTagProps: {},
  },
  {
    title: 'Discord',
    url: 'https://discord.com/invite/FQtyMWFZQ9',
    Icon: FaDiscord,
    anchorTagProps: {
      target: '_blank',
      rel: 'noreferrer',
    },
  },
  {
    title: '',
    url: 'https://github.com/rohitdasu/projectmate',
    Icon: FaGithub,
    anchorTagProps: {
      target: '_blank',
      rel: 'noreferrer',
    },
  },
];
