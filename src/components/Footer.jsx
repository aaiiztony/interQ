import { Typography } from "@mui/material";
import {logo} from '../assets'

const Footer = () => {
  const forwardURL = (url) =>{
    window.open(url, '_blank')
  }
  return (
    <footer className="w-full bg-white p-8">
      <div className="flex flex-col flex-wrap items-center md:flex-row  md:justify-between gap-y-6 gap-x-12 text-center">
        <img src={logo} alt="logo-img" className="w-20 max-md:hidden" />
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <li>
            <Typography
            onClick = {()=> forwardURL('https://aaiiztony.netlify.app')}
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              About
            </Typography>
          </li>
          <li>
            <Typography
              onClick={()=>forwardURL('https://github.com/aaiiztony/interQ')}
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Github
            </Typography>
          </li>
        </ul>
      </div>
      <hr className="my-8 border-blue-gray-50" />
      <Typography color="blue-gray" className="text-center font-normal">
        &copy; 2023 Material Tailwind
      </Typography>
    </footer>
  );
}

export default Footer