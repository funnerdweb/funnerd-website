import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { Button } from "@/components/Button";

/**
 * Props for `ContactCard`.
 */
export type ContactCardProps = SliceComponentProps<Content.ContactCardSlice>;

/**
 * Component for "ContactCard" Slices.
 */
const ContactCard: FC<ContactCardProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="py-16"
    >
      <div className="container">
        <div className="bg-blue py-16 rounded-lg px-4">
          <div className="grid lg:grid-cols-2 items-center space-y-8 lg:space-y-0">
            <div className="flex justify-center items-center space-x-4">
              {slice.primary.images.map((item, index) => (
                <div key={index}>
                  <PrismicNextImage
                    field={item.image}
                    className="inline-block object-cover object-top size-24 md:size-28 lg:size-36 xl:size-42 2xl:size-48 rounded-full ring-2 ring-white bg-[#FFC7D6]"
                  />
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-col justify-center text-center space-y-8 mx-auto">
              <div className="text-[1.75rem] md:text-[2.375rem] leading-[1.25em] font-black text-white max-w-[22rem]">
                {slice.primary.content}
              </div>
              <Button variant="secondary" link={slice.primary.btn_link}>
                {slice.primary.btn_text}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCard;
