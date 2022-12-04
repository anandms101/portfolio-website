import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { technology } from "./constants";
import { Icon } from "@iconify/react";

function About() {
  return (
    <section>
      {/* <Container fluid className="about-section" id="about"> */}
      <Container className="about-content">
        <h2>About me</h2>
        <p>
          Ullamco fugiat eiusmod proident exercitation. Nulla Lorem eiusmod
          laboris anim cupidatat tempor ut culpa adipisicing. Cupidatat tempor
          sint dolor minim velit consequat reprehenderit do. Ea et ut qui
          occaecat sit ex pariatur aliquip consectetur veniam ex dolore. Ex ut
          sunt consequat nisi velit ullamco eiusmod do velit.
        </p>
        <h2>Tools and Technologies</h2>
        <p>
          Amet aliqua nisi aliquip ex quis eu adipisicing in non esse. Elit et
          laborum elit sint duis officia fugiat commodo dolore velit eiusmod
          quis. Magna culpa ut laboris consectetur et ut occaecat consequat
          culpa sit pariatur ea commodo. Dolore consectetur deserunt pariatur
          sint occaecat deserunt.
        </p>

        <motion.div className="flex flex-wrap mt-8 flex flex-wrap justify-between ">
          <Row>
            {technology.map((el, index) => (
              <Col md={3}>
                <motion.div
                  initial="hidden"
                  whileInView={"visible"}
                  variants={{
                    visible: {
                      y: 0,
                      opacity: 1,
                      transition: {
                        type: "spring",
                      },
                    },
                    hidden: { opacity: 1, y: 80 },
                  }}
                  className="py-2 px-4 bg-gray-50 md:m-4 mx-2 mt-6 rounded-lg flex items-center hover:scale-125 cursor-pointer md:w-48 w-40"
                >
                  {/* <img alt="" src={el.link} className="w-12" /> */}
                  <div id="technologyCard">
                    <Icon
                      style={{ fontSize: "300%" }}
                      icon={el.componentName}
                      width={el.width} height={el.height}
                    />
                    <h6 className="text-md ml-4">{el.name}</h6>
                  </div>
                </motion.div>
              </Col>
            ))}
          </Row>
        </motion.div>
      </Container>
      {/* </Container> */}
    </section>
  );
}

export default About;
