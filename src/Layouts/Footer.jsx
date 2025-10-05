import logo from "../assets/azizul_hakim.png";

const Footer = () => {
  return (
    <div>
      <footer className=" bg-gray-600 text-white footer sm:footer-horizontal p-10">
        <aside>
          <div className=" mb-2 flex justify-center items-center gap-2 px-3 font-bold text-center text-2xl">
            <img
              className="hidden lg:block h-[40px] w-[40px] rounded-full"
              src={logo}
              alt=""
            />
            <h1 className="hidden lg:block">Azizul Hakim</h1>
          </div>
          <p>
            ACME Industries Ltd.
            <br />
            Providing reliable tech since 1992
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
