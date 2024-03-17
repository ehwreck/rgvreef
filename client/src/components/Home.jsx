import React, { Fragment } from "react";
import GallerySlider from "./GallerySlider";
import RecentPosts from "./RecentPosts";
import ContentSlider from "./ContentSlider";
import { slides } from "../configurables";
import heroesImg from "../assets/images/heroes_of_the_reef.jpeg";
import fishReefImg from "../assets/images/20220819_RGVReef_THU_0004.00_00_41_12.Still005.jpg";
import PatternSVG from "./PatternSVG";
import blueReefFish from "../assets/images/blue_reef_fish.jpg";

const Home = () => {
  return (
    <Fragment>
      <div className="landing video"></div>

      <div className="section column__section">
        <h2 className="l__size thin__weight uppercase no_block__margin">
          What is the RGV Reef?
        </h2>
        <p className="m__size bold__weight w_80">
          RGV Reef is a result of a vision to build a marine ecosystem 13 miles
          northeast of the South Padre Island jetties.
        </p>
        <GallerySlider
          controlsType="block"
          tags={{ all: [{ type: "type", value: "photos" }] }}
          path="/photos"
          count={4}
        />
      </div>

      <div className="section column__section offset__background">
        <h2 className="m_l__size extra_bold__weight uppercase no_top__margin">
          Recent News
        </h2>
        <RecentPosts count={5} />
      </div>

      <div id="section-4">
        <div className="no__padding">
          <img
            src={blueReefFish}
            alt=""
            style={{ maxWidth: "100%", maxHeight: "100%" }}
          />
        </div>
        <ContentSlider slides={slides} />
      </div>

      <div className="dark__background no__padding relative">
        <PatternSVG
          className="absolute"
          id="pattern"
          fill="rgba(57,238,255,1)"
        />
        <div style={{ background: "rgba(0, 0, 0, 0.4)" }}>
          <div className="section row__section w_80 inline_auto__margin">
            <p className="m__size w_80 l0_r3__margin">
              Heroes of the reef help restore fish habitat. Your support will
              help the biotic and economic impact of the reef.
            </p>
            <button className="navigation__button l3_r0__margin">
              Become a Hero
            </button>
          </div>
        </div>
      </div>

      <div className="section">
        <img className="w_80" src={heroesImg} alt="Heroes of the RGV Reef." />
      </div>

      <div
        className="section row__section full_height_width__child no__padding"
        id="restore_habitat"
      >
        <div
          className="column__section no__margin"
          style={{ background: "rgba(255, 255, 255, .8)" }}
        >
          <h2 className="s_m__size bold__weight no_block__margin b_20__margin">
            Restoring Marine Habitats
          </h2>
          <img className="w_70" src={fishReefImg} alt="" />
          <p className="normal__weight" style={{ fontSize: "1.25rem" }}>
            A collaborative effort dedicated to revitalizing and safeguarding
            our coastal ecosystems. Situated just 12 miles north of the South
            Padre Island jetties within state territorial waters, this expansive
            reef spans 1650 acres, serving as a vital refuge for a diverse array
            of marine species. Our project embodies a commitment to restoring
            the delicate balance of our ocean environments and promoting
            sustainable practices. Join us in our mission to restore marine
            habitats and ensure the long-term health of our coastal waters.
          </p>
          <button className="navigation__button dark__button">
            Learn More
          </button>
        </div>
        <div
          className="column__section"
          style={{ background: "rgba(0, 0, 0, .6)", color: "white" }}
        >
          <p className="bold__weight" style={{ fontSize: "1.75rem" }}>
            Dedicated to nurturing marine life through every stage of their
            development. With its unique design featuring graduated stepping
            stones of habitat, the RGV Reef provides a supportive environment
            for fish as they progress through their life cycles. By backing this
            initiative, you're actively contributing to the enhancement of our
            coastal ecosystems and the preservation of marine habitats. Let's
            unite in our efforts to safeguard and sustain our ocean environments
            for generations to come.
          </p>
          <h2
            className="s__size extra_bold__weight uppercase"
            style={{ color: "rgb(237, 161, 124)" }}
          >
            Support the RGV Reef
          </h2>
          <button className="navigation__button">Donate Now</button>
        </div>
      </div>

      <div>
        <GallerySlider
          controlsType="inline"
          tags={{ all: [{ type: "type", value: "articles" }] }}
          path="/articles"
          count={5}
        />
      </div>

      <div className="section column__section">
        <h2>Videos of the RGV Reef</h2>
        <p>
          Artificial reef project targets snapper population, sequential by
          year.
        </p>
        <GallerySlider
          controlsType="inline"
          tags={{ all: [{ type: "type", value: "videos" }] }}
          path="https://www.youtube.com/@curtishayungs9810/search?query=RGV%20Reef"
          count={2}
        />
      </div>
    </Fragment>
  );
};

export default Home;
