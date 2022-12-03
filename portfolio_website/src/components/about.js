import React from "react";
import { Container } from "react-bootstrap";

function About() {
  return (
    <section>
      <Container fluid className="about-section" id="about">
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
        </Container>
      </Container>
    </section>
  );
}

export default About;
