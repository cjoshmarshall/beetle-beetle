import React from "react";

function Footer() {
  return (
    <footer className="bg-dark text-white grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-20 lg:gap-y-0 px-6 sm:px-10 lg:px-20 py-20">
      <div className="w-[291px] col-span-2">
        <img src="/logos/main.png" alt="logo" className="w-[214.69px] h-10" />
        <p className="text-base font-light mt-6 mb-24">
          The Relationship Intelligence and Deal Flow CRM Designed by
          Ex-Investors
        </p>
        <ul className="flex gap-4">
          <li className="bg-white flex justify-center items-center h-10 w-10 rounded-md cursor-pointer">
            <img src="/icons/facebook.svg" alt="" />
          </li>
          <li className="bg-primary flex justify-center items-center h-10 w-10 rounded-md cursor-pointer">
            <img src="/icons/X.svg" alt="" />
          </li>
          <li className="bg-white flex justify-center items-center h-10 w-10 rounded-md cursor-pointer">
            <img src="/icons/peace.svg" alt="" />
          </li>
          <li className="bg-white flex justify-center items-center h-10 w-10 rounded-md cursor-pointer">
            <img src="/icons/linkedin.svg" alt="" />
          </li>
        </ul>
      </div>
      <div>
        <h4 className="text-base font-medium mb-6">About</h4>
        <ul className="flex flex-col gap-5">
          <li className="text-base font-light cursor-pointer">About Us</li>
          <li className="text-base font-light cursor-pointer">Careers</li>
          <li className="text-base font-light cursor-pointer">
            Privacy Policy
          </li>
          <li className="text-base font-light cursor-pointer">Contact</li>
        </ul>
      </div>
      <div>
        <h4 className="text-base font-medium mb-6">Resources</h4>
        <ul className="flex flex-col gap-5">
          <li className="text-base font-light cursor-pointer">Blog</li>
          <li className="text-base font-light cursor-pointer">
            Content Library
          </li>
          <li className="text-base font-light cursor-pointer">
            Customer Stories
          </li>
        </ul>
      </div>
      <div>
        <h4 className="text-base font-medium mb-6">Industries</h4>
        <ul className="flex flex-col gap-5">
          <li className="text-base font-light cursor-pointer">
            Venture Capital
          </li>
          <li className="text-base font-light cursor-pointer">
            Private Equity
          </li>
          <li className="text-base font-light cursor-pointer">
            Mergers & Acquistions
          </li>
          <li className="text-base font-light cursor-pointer">
            Investment Banking
          </li>
          <li className="text-base font-light cursor-pointer">
            Commercial Realestate
          </li>
          <li className="text-base font-light cursor-pointer">Consulting</li>
        </ul>
      </div>
      <div>
        <h4 className="text-base font-medium mb-6">Product</h4>
        <ul className="flex flex-col gap-5">
          <li className="text-base font-light cursor-pointer">CRM</li>
          <li className="text-base font-light cursor-pointer">Reporting</li>
          <li className="text-base font-light cursor-pointer">Mobile</li>
          <li className="text-base font-light cursor-pointer">Integrations</li>
          <li className="text-base font-light cursor-pointer">Salesforce</li>
          <li className="text-base font-light cursor-pointer">
            Relationship Intelligence
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
