import { Footer } from "flowbite-react";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";
import Logo from "../../public/logo.jpeg";

export default function Foot() {
  return (
    <Footer container className="mt-20 bg-gradient ">
      <div className="w-full">
        <div className="grid  w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <Footer.Brand
              className="mix-blend-multiply"
              href="/"
              src={Logo}
              alt="Bamala Logo"
            />
          </div>
          <div className="grid  grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title className="text-foreground" title="about" />
              <Footer.LinkGroup className="text-foreground" col>
                <Footer.Link href="#">Bamala</Footer.Link>
                <Footer.Link href="#">OJS</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title className="text-foreground" title="Pemograman" />
              <Footer.LinkGroup className="text-foreground" col>
                <Footer.Link href="#">Laravel</Footer.Link>
                <Footer.Link href="#">Node Js</Footer.Link>
                <Footer.Link href="#">React Js</Footer.Link>
                <Footer.Link href="#">Next JS</Footer.Link>
                <Footer.Link href="#">Tailwind CSS</Footer.Link>
                <Footer.Link href="#">Bootstrap</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright
            className="text-foreground"
            href="#"
            by="Bamala"
            year={2025}
          />
          <div className="mt-4 flex  space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon
              className="text-foreground"
              href="#"
              icon={BsFacebook}
            />
            <Footer.Icon
              className="text-foreground"
              href="#"
              icon={BsInstagram}
            />
            <Footer.Icon
              className="text-foreground"
              href="#"
              icon={BsTwitter}
            />
            <Footer.Icon className="text-foreground" href="#" icon={BsGithub} />
            <Footer.Icon
              className="text-foreground"
              href="#"
              icon={BsDribbble}
            />
          </div>
        </div>
      </div>
    </Footer>
  );
}
