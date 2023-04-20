import HText from "@/shared/HText"
import { BenefitType, SelectedPage } from "@/shared/types"
import { motion } from "framer-motion"
import { benefitsData } from "@/shared/Benefits"
import Benefit from "./Benefit"
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";
import ActionButton from "@/shared/ActionButton"

type Props = {
  setSelectedPage: (value: SelectedPage) => void
}

console.log(benefitsData);


const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section
      id="benefit"
      className="mx-auto min-h-full w-5/6 py-20"
    >
      <motion.div
        className="md:my-5 md:w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}

      >
        {/* Header */}
        <HText>MORE THAN JUST A GYM</HText>

        {/* Paragraph */}
        <div>
          <p className="my-5 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ad hic provident nostrum id ipsam qui eos debitis atque odio iusto similique possimus consectetur
            nam molestiae perspiciatis, deleniti quisquam reprehenderit.
          </p>
        </div>

        {/* BENEFITS */}
        <div className="md:flex items-center justify-between gap-8">
          {benefitsData.map((data: BenefitType) => {

            return (
              <Benefit
                key={data.title}
                icon={data.icon}
                title={data.title}
                description={data.description}
                setSelectedPage={setSelectedPage}
              />
            )


          })}

        </div>

        {/* GRAPICS */}
        <div className="mt-16 items-center justify-between md:mt-28 md:flex gap-20">
          {/* Grapic Image */}
          <img
            className="mx-auto"
            src={BenefitsPageGraphic} alt="" />

          {/* Description */}
          <div>
            {/* Title */}
            <motion.div
              className="relative"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                <HText>MILLIONS OF HAPPY MEMBERS GETTING <span className="text-primary-500">FIT</span></HText>
              </div>
            </motion.div>
            {/* Description */}
            <div>
              <p className="my-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit temporibus earum commodi dignissimos maxime. Voluptatem ratione fugit, excepturi sunt animi et vero aspernatur, nesciunt libero nam perferendis distinctio tempora ullam?</p>
              <p className="mb-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam, omnis! Commodi ullam quae fugit numquam optio, reiciendis ut soluta. Aut ut velit tempora ea explicabo id veniam dolorum expedita deserunt.</p>
            </div>
            {/* Button */}
            <div className="relative">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z[-10] before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Join Now
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Benefits