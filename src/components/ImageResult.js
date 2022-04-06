// 1. Import classes
// ==================

import React from "react";
import { AdvancedImage } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";
import { Transformation } from "@cloudinary/url-gen";
import { scale, fill, crop } from "@cloudinary/url-gen/actions/resize";
import { source } from "@cloudinary/url-gen/actions/overlay";
import { byAngle } from "@cloudinary/url-gen/actions/rotate";
import { vignette } from "@cloudinary/url-gen/actions/effect";
import { byRadius, max } from "@cloudinary/url-gen/actions/roundCorners";
import { saturation, hue } from "@cloudinary/url-gen/actions/adjust";
import { Position } from "@cloudinary/url-gen/qualifiers/position";
import { compass } from "@cloudinary/url-gen/qualifiers/gravity";
import { image, text } from "@cloudinary/url-gen/qualifiers/source";
import { TextStyle } from "@cloudinary/url-gen/qualifiers/textStyle";
import { focusOn } from "@cloudinary/url-gen/qualifiers/gravity";
import { FocusOn } from "@cloudinary/url-gen/qualifiers/focusOn";

class ImageResult extends React.Component {
  constructor(props) {
    super(props);
  }

  // 5. Deliver your image
  // =========================

  // Render the image in a React component.
  render() {
    // 2. Set your cloud name
    //========================

    // Create a Cloudinary instance and set your cloud name.
    const cld = new Cloudinary({
      cloud: {
        cloudName: "robdcal",
      },
    });

    // 3. Get your image
    //===================

    // Instantiate a CloudinaryImage object for the image with the public ID, 'docs/models'.
    const myImage = cld.image("sample");

    // 4. Transform your image
    //=========================

    // Apply the transformation.
    myImage
      .resize(fill().height(250).width(400).gravity("south"))
      .overlay(
        source(
          image("samples/bike").transformation(
            new Transformation()
              .resize(
                crop()
                  .width(1.3)
                  .height(1.3)
                  .gravity(focusOn(FocusOn.faces()))
                  .regionRelative()
              )
              .adjust(saturation(50))
              .effect(vignette())
              .resize(scale().width(100))
              .roundCorners(max())
          )
        ).position(
          new Position().gravity(compass("center")).offsetX(-20).offsetY(20)
        )
      )
      .overlay(
        source(
          image("samples/cloudinary-icon").transformation(
            new Transformation()
              .resize(scale().height(55))
              .adjust(hue(-20))
              .rotate(byAngle(5))
          )
        ).position(
          new Position().gravity(compass("center")).offsetX(30).offsetY(5)
        )
      )
      .overlay(
        source(
          text(this.props.title, new TextStyle("Cookie", 40).fontWeight("bold"))
            .textColor("#f08")
            .transformation(new Transformation().rotate(byAngle(20)))
        ).position(
          new Position().gravity(compass("center")).offsetX(-45).offsetY(44)
        )
      )
      //   .resize(crop().width(300).height(250).x(30))
      .roundCorners(byRadius(60));

    return (
      <div>
        <h2>ImageResult Component</h2>
        <AdvancedImage cldImg={myImage} />
      </div>
    );
  }
}

export default ImageResult;
