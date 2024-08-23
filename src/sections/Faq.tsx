"use client";
import { useTranslation } from "@/app/i18n";
import AccordionItem from "@/components/Cards/Accordion";
import React, { useEffect, useState } from "react";

type FaqProps = {
  lng: string;
};

const Faq = ({ lng }: FaqProps) => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const [t, setT] = useState(() => (key: string) => key);

  useEffect(() => {
    const fetchTranslations = async () => {
      const { t: translation } = await useTranslation(lng);
      setT(() => translation);
    };

    fetchTranslations();
  }, [lng]);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  return (
    <>
      <div className="bg-gradient-to-bl from-background-gradient-color-1 from-[7.51%] to-background-primary to-[64.29%] py-16">
        <div className="mx-auto max-w-screen-xl">
          <p className="mb-8 text-center text-4xl font-extrabold">
            Frequently Asked Questions?
          </p>
          <div className="mx-2 flex flex-col items-center justify-center">
            <AccordionItem
              title={t("Do I have to pay for the detailed design drawings?")}
              content={t(
                "No! you don't have to pay for the detailed design drawings, we provide them along with the proposal at no extra cost. Our aim is to keep you well-informed about the products and services you're opting for, so you can make a confident decision.",
              )}
              panel="panel1"
              expanded={expanded}
              handleChange={handleChange}
            />
            <AccordionItem
              title={t(
                "How long is the typical lifespan of Schüco uPVC windows and doors?",
              )}
              content={t(
                "The typical lifespan of Schüco uPVC windows and doors is quite impressive, lasting for 30 years or even longer with proper care and maintenance. Their high-quality materials and manufacturing processes ensure long-lasting durability and excellent performance, making them a reliable and cost-effective choice for your home.",
              )}
              panel="panel2"
              expanded={expanded}
              handleChange={handleChange}
            />
            <AccordionItem
              title={t(
                "How do Schüco uPVC windows and doors contribute to noise reduction?",
              )}
              content={t(
                "Schüco uPVC windows and doors contribute to noise reduction through their excellent design and use of high-quality materials. Here are some factors that make them effective at reducing noise:",
              )}
              endContent={t(
                "By incorporating these features, Schüco uPVC windows and doors effectively reduce noise levels in your home, providing a quieter and more comfortable living environment.",
              )}
              bulletList={[
                t(
                  "Multi-chambered profiles: Schüco uPVC window and door profiles are designed with multiple chambers that help to absorb and dissipate sound, creating an effective barrier against external noise.",
                ),
                t(
                  "Tight sealing: Schüco uPVC windows and doors are equipped with advanced sealing systems, including EPDM gaskets, that ensure airtight closure. This prevents sound from passing through gaps between the window or door and the frame.",
                ),
                t(
                  "Double glazing: Schüco uPVC windows and doors can be fitted with double-glazed glass, which significantly reduces noise transmission. The space between the glass panes acts as an insulating barrier that absorbs sound energy.",
                ),
                t(
                  "High-performance glass: Using acoustic or laminated glass with Schüco uPVC windows and doors can further enhance their noise reduction capabilities. These types of glass are specifically designed to minimize sound transmission.",
                ),
              ]}
              panel="panel3"
              expanded={expanded}
              handleChange={handleChange}
            />
            <AccordionItem
              title={t(
                "What type of glass is recommended for use with Schüco uPVC windows and doors?",
              )}
              content={t(
                "We always suggest and provide quotes for high-performance glass to be used with Schüco uPVC windows and doors, ensuring you achieve the desired thermal and sound insulation unattainable with standard glass. This approach eliminates the need for additional Low-E glass.",
              )}
              panel="panel4"
              expanded={expanded}
              handleChange={handleChange}
            />
            <AccordionItem
              title={t(
                "Do Schüco uPVC windows and doors require regular maintenance?",
              )}
              content={t(
                "Schüco uPVC windows and doors are known for their low-maintenance requirements. Unlike materials like aluminum, which can suffer from oxidation and corrosion over time, uPVC is highly resistant to weathering and does not corrode or degrade. This makes it an ideal choice for long-lasting, hassle-free windows and doors. However, to keep your Schüco uPVC windows and doors functioning smoothly and looking their best, some basic maintenance is recommended:",
              )}
              endContent={t(
                "By following these simple maintenance steps, you can ensure that your Schüco uPVC windows and doors remain in excellent condition for many years.",
              )}
              bulletList={[
                t(
                  "Cleaning: Periodically clean the window and door frames with a soft cloth and mild soapy water to remove dirt and grime. Avoid using abrasive cleaners or harsh chemicals that can damage the uPVC surface.",
                ),
                t(
                  "Glass care: Clean the glass panes with a soft cloth and a glass cleaner to maintain their clarity and appearance.",
                ),
              ]}
              panel="panel5"
              expanded={expanded}
              handleChange={handleChange}
            />
            <AccordionItem
              title={t(
                "How do I know that the fabricator is using genuine Schüco components in my uPVC windows and doors?",
              )}
              content={t(
                "To ensure that the fabricator is using genuine Schüco components in your uPVC windows and doors, you can follow these steps:",
              )}
              endContent={t(
                "By taking these steps, you can be confident that you're receiving high-quality uPVC windows and doors made with authentic Schüco components.",
              )}
              bulletList={[
                t(
                  "Look for the Schüco partner logo on the fabricator's website or any documentation they provide. This logo indicates their partnership with Schüco and their commitment to using authentic components.",
                ),
                t(
                  "If you're still uncertain, you can directly contact Schüco to verify the fabricator's authenticity. Schüco can confirm whether the fabricator is an authorized partner and uses genuine Schüco components in their products.",
                ),
              ]}
              panel="panel6"
              expanded={expanded}
              handleChange={handleChange}
            />
            <AccordionItem
              title={t(
                "What is the installation process for Schüco uPVC windows and doors, and how long does it take?",
              )}
              content={t(
                "The installation process for Schüco uPVC windows and doors typically involves the following steps, although the exact process may vary depending on the specific project requirements:",
              )}
              endContent={t(
                "The installation time for Schüco uPVC windows and doors can vary depending on the size of the project, the number of windows and doors being installed, and any unforeseen challenges that may arise during the process. Generally, our installation process takes between 2 to 5 weeks, depending on the project size. Your installation team will provide you with a more accurate estimate based on your specific project.",
              )}
              bulletList={[
                t(
                  "Site assessment: Before the installation begins, a technician will visit your property to take accurate measurements and assess the site conditions, ensuring that the windows and doors are correctly sized and customized to fit your home.",
                ),
                t(
                  "Manufacturing: Once the measurements are taken and the design is finalized, the Schüco uPVC windows and doors will be custom-manufactured according to your specifications.",
                ),
                t(
                  "Delivery: The finished windows and doors will be delivered to your property, ready for installation.",
                ),
                t(
                  "Installation: The Schüco uPVC windows and doors will be securely installed in the openings, ensuring proper alignment, leveling, and sealing to provide optimal performance.",
                ),
                t(
                  "Finishing touches: The installation team will complete any necessary trim work, caulking, and sealing to ensure a polished appearance and effective weatherproofing.",
                ),
                t(
                  "Cleanup: After the installation is complete, the team will clean up the work area, removing any debris and leaving your home neat and tidy.",
                ),
              ]}
              panel="panel7"
              expanded={expanded}
              handleChange={handleChange}
            />
            <AccordionItem
              title={t(
                "What is the U-value, and why is it important for my windows and doors?",
              )}
              content={t(
                "The U-value, also known as thermal transmittance, is a measure of how effective a building material is as an insulator. It indicates the rate at which heat is transferred through a material, such as the glass and frames of your windows and doors. U-values are typically expressed in watts per square meter Kelvin (W/m²K), with lower values representing better insulation performance. U-values are important for windows and doors for several reasons:",
              )}
              endContent={t(
                "When selecting windows and doors for your home, it's essential to consider the U-value to ensure that you are getting a product that offers optimal energy efficiency, comfort, and compliance with building regulations.",
              )}
              bulletList={[
                t(
                  "Energy efficiency: Windows and doors with lower U-values provide better insulation, reducing heat transfer between the indoors and outdoors. This means less heat is lost from your home during colder months and less heat enters during warmer months, resulting in lower energy consumption and costs for heating and cooling.",
                ),
                t(
                  "Comfort: Improved insulation offered by windows and doors with lower U-values helps to maintain a more consistent indoor temperature, contributing to a more comfortable living environment.",
                ),
                t(
                  "Condensation control: Better insulated windows and doors reduce the likelihood of condensation forming on the interior surfaces, which can help prevent mold growth and damage to your property.",
                ),
                t(
                  "Building regulations and standards: Many countries have energy efficiency standards and building regulations that require windows and doors to meet specific U-value thresholds. Installing windows and doors with appropriate U-values ensures compliance with these requirements.",
                ),
              ]}
              panel="panel8"
              expanded={expanded}
              handleChange={handleChange}
            />
            <AccordionItem
              title={t(
                "Can Schüco uPVC windows and doors be customized to match my home's design?",
              )}
              content={t(
                "Yes, Schüco uPVC windows and doors can be customized to match your home's design. Schüco offers a wide range of options to ensure that their products blend seamlessly with your home's aesthetic and meet your specific requirements. Some of the customization options include:",
              )}
              endContent={t(
                "By working closely with your Schüco fabricator, you can customize your uPVC windows and doors to achieve the perfect combination of style, functionality, and performance that complements your home's design.",
              )}
              bulletList={[
                t(
                  "Style and design: Schüco uPVC windows and doors are available in various styles, including casement, tilt and turn, sliding, and bi-fold, among others. This variety allows you to choose the best option to complement your home's architecture and design preferences.",
                ),
                t(
                  "Color and finish: Schüco uPVC windows and doors come in an extensive range of colors and finishes. You can select from a spectrum of solid colors, woodgrain finishes, or even metallic effects to create the desired look that harmonizes with your home's exterior and interior design.",
                ),
                t(
                  "Glass options: Keystone offers a selection of high-performance glass options for use with Schüco uPVC windows and doors. More thickness can be provided for further noise reduction if needed. As these are high-performance glass options, Low-E glass is not required. You can also choose from various decorative glass options like frosted, tinted, or patterned glass to enhance privacy or add a unique touch to your home.",
                ),
                t(
                  "Hardware and accessories: Schüco provides a variety of hardware options, including handles, hinges, and locking mechanisms, in different styles and finishes to match your preferences and ensure the security and functionality of your windows and doors.",
                ),
              ]}
              panel="panel9"
              expanded={expanded}
              handleChange={handleChange}
            />
            <AccordionItem
              title={t(
                "Do you offer a warranty on Schüco uPVC windows and doors?",
              )}
              bulletList={[
                t(
                  "Yes, we offer a warranty on Schüco uPVC windows and doors to ensure your peace of mind and confidence in the quality and performance of our products.",
                ),
                t(
                  "For white uPVC window and door profiles, we provide a 10-year warranty, which covers any defects in materials or workmanship that may arise during this period.",
                ),
                t(
                  "For foiled (color) uPVC window and door profiles, we offer a 5-year warranty, which also covers defects in materials or workmanship.",
                ),
                t(
                  "For hardware and accessories, we provide a 1-year warranty, which covers defects in materials or workmanship that may arise during this period.",
                ),
                t(
                  "For glass double glazed units (DGU), we offer a 5-year warranty, covering defects in materials or workmanship that may arise during this period.",
                ),
              ]}
              panel="panel10"
              expanded={expanded}
              handleChange={handleChange}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
