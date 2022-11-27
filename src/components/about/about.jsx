import React from "react";

import "./about.scss";

import img from "../../images/images/20.png";

const About = () => (
  <div className="row about-container">
    <div className="col-3">
      <div className="image-container">
        <img src={img} alt="about-image" />
      </div>
    </div>
    <div className="col-9">
      <h2 className="text-center">About Mebeluz Company</h2>
      <div className="row bg-color">
        <div className="col-4"></div>
        <div className="col-8">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque quia
            laborum eius asperiores ipsum modi. Quibusdam optio aspernatur harum
            eum quis dolor omnis commodi unde incidunt enim ipsa, natus delectus
            quaerat at, distinctio facere. Excepturi officiis repellendus
            voluptatem unde nostrum eum, illum iusto, repudiandae labore
            molestiae molestias id, beatae similique perferendis tenetur
            laudantium neque perspiciatis eius. Necessitatibus maiores commodi,
            voluptatem sed fugiat autem ratione porro voluptas. <br />
            <br /> Eveniet quisquam ratione illo maxime magni voluptates modi
            doloremque, delectus illum libero? Dolorum veniam eum ipsam tempore
            adipisci expedita aliquam enim odio dicta rerum vel deleniti
            perspiciatis modi, doloremque repellendus dolorem harum quis magnam
            inventore similique! Nihil labore molestiae voluptatum, expedita ex
            veritatis blanditiis ipsa accusantium unde.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default About;
