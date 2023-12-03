import React from "react";
import { Box } from "@chakra-ui/react";
import whatsapp from "../images/whatsapp.png";
import ReactWhatsapp from "react-whatsapp";

export const WhatsappFloat = () => {
  return (
    <div style={{ height: "0px" }}>
      <ReactWhatsapp number="+91 8448837130" message={`Hi!, I'm Interested`}>
        <img
          style={{
            width: "50px",
            position: "fixed",
            bottom: "5%",
            right: "3%",
            zIndex: "100",
          }}
          src={whatsapp}
          alt=""
        />
      </ReactWhatsapp>
    </div>
  );
};
