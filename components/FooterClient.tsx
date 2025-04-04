"use client";

import { GroupField, KeyTextField } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import { LocateIcon, Mail, PhoneCall } from "lucide-react";
import { JSX } from "react";
import {
  FooterDocumentDataContactItem,
  FooterDocumentDataLinksItem,
  FooterDocumentDataSocialsItem,
  Simplify,
} from "@/prismicio-types";
import { BackToTopBtn } from "./BackToTopBtn";
import { Icons } from "./Icons";
type FooterProps = {
  title: KeyTextField;
  content: KeyTextField;
  links: GroupField<Simplify<FooterDocumentDataLinksItem>>;
  contact: GroupField<Simplify<FooterDocumentDataContactItem>>;
  socials: GroupField<Simplify<FooterDocumentDataSocialsItem>>;
  copyright: KeyTextField;
};

export const FooterClient = (props: FooterProps): JSX.Element => {
  const { title, content, links, contact, copyright, socials } = props;

  const year = new Date().getFullYear();

  const iconsArray = new Map([
    [0, LocateIcon],
    [1, PhoneCall],
    [2, Mail],
  ]);

  const socialArray = new Map([
    [0, Icons.Instagram],
    [1, Icons.LinkedIn],
    [2, Icons.Facebook],
    [3, Icons.YouTube],
  ]);

  return (
    <footer className="bg-black text-white relative">
      <div className="container">
        <div className="py-16">
          <div className="flex items-center gap-3"></div>
          <div className="grid lg:grid-cols-3 place-content-center lg:place-items-center gap-4 xl:gap-16">
            {/* Logo and Description */}
            <div className="flex flex-col gap-y-2">
              <h2 className="text-4xl lg:text-[4rem] font-black text-blue">
                {title}
              </h2>

              <p className="text-xl -tracking-[0.2px]">{content}</p>

              {/* Social link */}
              <div className="flex space-x-4 pt-4 xl:pt-8">
                {socials.map((social, index) => {
                  const IconComponent = socialArray.get(index);
                  return (
                    IconComponent && (
                      <div key={index}>
                        <PrismicNextLink field={social.url} type="button">
                          <IconComponent className="size-7" />
                        </PrismicNextLink>
                      </div>
                    )
                  );
                })}
              </div>
            </div>

            {/* Navigation Links */}
            <div className="">
              <div className="flex flex-col">
                <span className="text-blue font-humanist text-xl mt-16 lg:mt-0 lg:mb-8 font-bold uppercase">
                  links
                </span>
              </div>
              <nav className="flex flex-col gap-8 mt-8 lg:mt-0">
                {links.map((item, index) => (
                  <div key={index} className="relative">
                    <PrismicNextLink
                      field={item.url}
                      className="inline-flex text-xl -tracking-[0.2px] capitalize h-auto px-0 border-transparent after:content-[''] after:transition-all after:duration-500 after:h-px after:w-0 after:absolute after:top-full after:bg-blue hover:after:w-[8%] md:hover:after:w-full focus:outline-none"
                    >
                      {item.text}
                    </PrismicNextLink>
                  </div>
                ))}
              </nav>
            </div>

            {/* Navigation Links */}
            <div className="">
              <div className="flex flex-col lg:items-end">
                <span className="text-blue text-xl mt-16 lg:mt-0 lg:mb-8 font-humanist font-bold uppercase">
                  contact
                </span>
              </div>
              <nav className="flex flex-col lg:items-end gap-8 mt-8 lg:mt-0">
                {contact.map((item, index) => {
                  const IconComponent = iconsArray.get(index);
                  return (
                    IconComponent && (
                      <div key={index}>
                        <PrismicNextLink field={item.url} type="button">
                          <div className="flex items-center gap-x-2 text-xl -tracking-[0.2px]">
                            <IconComponent className="w-4 h-4" />
                            {item.text}
                          </div>
                        </PrismicNextLink>
                      </div>
                    )
                  );
                })}
              </nav>
            </div>
          </div>
        </div>
        <BackToTopBtn />

        <div className="py-16 text-white/50 text-xl -tracking-[0.2px] text-center">
          <p>{`${year}. ${copyright}`}</p>
        </div>
      </div>
    </footer>
  );
};
