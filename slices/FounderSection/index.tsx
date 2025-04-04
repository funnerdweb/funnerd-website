import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { staticBlurDataUrl } from "@/lib/staticBlurUrl";
import { Icons } from "@/components/Icons";
import { SkillItems } from "@/components/SkillItems";

/**
 * Props for `FounderSection`.
 */
export type FounderSectionProps =
  SliceComponentProps<Content.FounderSectionSlice>;

/**
 * Component for "FounderSection" Slices.
 */
const FounderSection: FC<FounderSectionProps> = ({ slice }) => {
  const getBlurSvg = staticBlurDataUrl();

  const iconsArray = new Map([
    [0, Icons.Instagram],
    [1, Icons.LinkedIn],
    [2, Icons.Facebook],
    [3, Icons.YouTube],
  ]);

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="py-16"
    >
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black max-w-[45rem] mx-auto">
            {slice.primary.section_title}
          </h2>
        </div>
        {/* About */}
        <div className="grid lg:grid-cols-3 gap-4 md:gap-8">
          {/* Image */}
          <div className="col-span-3 lg:col-span-1 overflow-x-hidden">
            <div className="flex flex-col gap-y-8">
              <div className="xl:aspect-square">
                <PrismicNextImage
                  field={slice.primary.image}
                  className="rounded-lg size-full object-cover object-top"
                  width={slice.primary.image.dimensions?.width}
                  height={slice.primary.image.dimensions?.height}
                  placeholder="blur"
                  blurDataURL={getBlurSvg}
                />
              </div>

              {/* Skills */}

              <div className="relative w-full max-w-full h-[fit-content] xl:h-[40vh] overflow-x-hidden border border-black rounded-lg px-4 py-4">
                <div className="absolute rounded-lg bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:20px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_40%,#000_70%,transparent_110%)]"></div>
                <div className="text-3xl font-bold gradient mb-8">Skills</div>

                <SkillItems
                  data={slice.primary.skills}
                  className=""
                  itemsWrapperClassName="animate-move-left [animation-duration:10s]"
                />
                <SkillItems
                  data={slice.primary.skills}
                  className="mt-4"
                  itemsWrapperClassName="animate-move-right [animation-duration:20s]"
                />
                <SkillItems
                  data={slice.primary.skills}
                  className="mt-4"
                  itemsWrapperClassName="animate-move-left [animation-duration:60s]"
                />
                <SkillItems
                  data={slice.primary.skills}
                  className="mt-4"
                  itemsWrapperClassName="animate-move-right [animation-duration:80s]"
                />
              </div>
            </div>
          </div>
          <div className="col-span-3 lg:col-span-2">
            <div className="bg-accent h-full p-4 md:p-8 rounded-lg border-black border-2">
              <div className="flex flex-col space-y-4">
                <div className="text-3xl font-bold gradient">
                  {slice.primary.founder_text}
                </div>
                <h1 className="text-4xl font-extrabold font-humanist">
                  {slice.primary.founder_name}
                </h1>
                <p className="text-[1.125rem] lg:text-lg xl:text-2xl">
                  {slice.primary.description}
                </p>
              </div>

              {/* Social link */}
              <div className="flex space-x-4 pt-4 xl:pt-8">
                {slice.primary.socials.map((social, index) => {
                  const IconComponent = iconsArray.get(index);
                  return (
                    IconComponent && (
                      <div key={index}>
                        <PrismicNextLink field={social.link} type="button">
                          <IconComponent className="size-7" />
                        </PrismicNextLink>
                      </div>
                    )
                  );
                })}
              </div>

              <hr className="my-8" />

              {/* Experience */}
              <div className="">
                <div className="flex flex-col space-y-8">
                  <div className="text-3xl font-bold gradient">
                    {slice.primary.experience_title}
                  </div>

                  {/* Experience one */}
                  <div className="flex flex-col">
                    <h1 className="text-3xl font-extrabold font-humanist">
                      {slice.primary.experience_title_one}
                    </h1>

                    {slice.primary.experience_one.map((item, index) => (
                      <div className="flex space-x-2 space-y-4" key={index}>
                        <span className="text-blue">&bull;</span>
                        <span className="text-lg xl:text-2xl">{item.text}</span>
                      </div>
                    ))}
                  </div>

                  {/* Experience two */}
                  <div className="flex flex-col">
                    <h1 className="text-3xl font-extrabold font-humanist">
                      {slice.primary.experience_title_two}
                    </h1>

                    {slice.primary.experience_two.map((item, index) => (
                      <div className="flex space-x-2 space-y-4" key={index}>
                        <span className="text-blue">&bull;</span>
                        <span className="text-lg xl:text-2xl">{item.text}</span>
                      </div>
                    ))}
                  </div>

                  {/* Experience three */}
                  <div className="flex flex-col">
                    <h1 className="text-3xl font-extrabold font-humanist">
                      {slice.primary.experience_title_three}
                    </h1>

                    {slice.primary.experience_three.map((item, index) => (
                      <div className="flex space-x-2 space-y-4" key={index}>
                        <span className="text-blue">&bull;</span>
                        <span className="text-lg xl:text-2xl">{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
