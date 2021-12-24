import React from "react";
import "./Home.css";
import Product from "./Product";

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://image.cnbcfm.com/api/v1/image/104329257-AP_913659427622.jpg?v=1529474433&w=1600&h=900"
          // src="https://pyxis.nymag.com/v1/imgs/182/64e/80cafa7e504740bf4b748a0e7f2be7df4b-17-west-elm-couch-lede.2x.rhorizontal.w600.jpg"
          // src="https://4.imimg.com/data4/SG/KO/MY-25356053/dnflss012-500x500.jpg"
          // src="https://image.made-in-china.com/2f0j00riUfVuRMvkbq/Blue-Fabric-Living-Room-Low-Price-Arabic-Sofa-Set.jpg"
          // src="https://m.media-amazon.com/images/I/51fmRXrbhbL.jpg"
          alt="sofa"
        />
        <div className="home__row">
          <Product
            id={1991}
            key={1991}
            title="VEGA 3 in 1 Hair Styler, Straightener, Curler & Crimper (VHSCC-01), Black"
            price={19.87}
            rating={3}
            image="https://m.media-amazon.com/images/I/51BmDiP6p0S._SY450_.jpg"
          />
          <Product
            id={1992}
            key={1992}
            title="Eight Seats - Sofa Sets / Living Room Furniture"
            price={16.5}
            rating={4}
            image="https://m.media-amazon.com/images/I/61YHYBpWKVS._AC_UL320_.jpg"
          />
          {/* <Product/> */}
        </div>
        <div className="home__row">
          <Product
            id={1993}
            key={1993}
            title="Apple Watch SE (GPS, 44mm) - Gold Aluminium Case with Pink Sand Sport Band"
            price={29.4}
            rating={4}
            image="https://m.media-amazon.com/images/I/81Mc+otzDfL._SX522_.jpg"
          />
          <Product
            id={1994}
            key={1994}
            title="Bed Linen bed set"
            price={4.5}
            rating={3}
            image="https://images-eu.ssl-images-amazon.com/images/G/31/IMG-2017/HFrefresh/Ddecor.jpg"
          />
          <Product
            id={1995}
            key={1995}
            title="Amazon Echo Dot (3rd Gen) - New and Improved Smart Speaker with Alexa, Black"
            price={9.8}
            rating={4}
            image="https://www.reliancedigital.in/medias/Amazon-Echo-dot-3-0-BK-Computer-Speaker-491431035-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w3NjM2NHxpbWFnZS9qcGVnfGltYWdlcy9oYjUvaGY3LzkwNTk0NDcwNDYxNzQuanBnfGFlZjBlOTZkMzY4MmI0ZTBhMDMzZWRiMjM1MjE2OWYxYTFmZWMxMWJlNjY2YzI5Nzc4ODM0ZWU2MWNlYjY0ZjE"
          />
        </div>
        <div className="home__row">
          <Product
            id={1996}
            key={1996}
            title="Sony KD-55X7500F 4K LED 55 Inch Voice Search Smart TV"
            price={25.9}
            rating={5}
            image="https://www.bdstall.com/asset/product-image/giant_77675.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
