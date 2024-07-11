import React, { useState } from "react";

const AccordionItem = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          marginTop: "5%",
          border: "1px solid #051d41",
          borderRadius: "0.5rem",
          overflow: "hidden",
          background: "#512573",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="accordionTabs"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            padding: "1rem 5rem",
            textAlign: "center",
            transition: "background-color 0.3s",
            fontSize: "150%",
            background: "#512573",
            color: "white",
          }}
        >
          <span style={{ fontWeight: "600" }}>{title}</span>
          <span
            style={{
              transform: isOpen ? "rotate(45deg)" : "rotate(0)",
              transition: "transform 0.3s",
              marginLeft: "0.5rem",
            }}
          >
            +
          </span>
        </button>
        <div
          style={{
            maxHeight: isOpen ? "1000px" : "0",
            overflow: "hidden",
            transition: "max-height 0.3s ease-in-out",
          }}
        >
          <div style={{ padding: "1.5rem", background: "white" }}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

const CarOptionsSection = () => {
  return (
    <div
      style={{
        maxWidth: "64rem",
        margin: "0 auto",
        padding: "1.5rem",
        borderRadius: "0.75rem",
      }}
    >
      <h1
        style={{
          fontSize: "1.875rem",
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        Why Shebella Beauty
      </h1>

      <div>
        <AccordionItem title="Experts in Beauty">
          <h4 style={{ fontWeight: "600", marginBottom: "0.5rem" }}>
            Our experience:
          </h4>
          <ul
            style={{
              listStyleType: "disc",
              paddingLeft: "1.25rem",
              marginBottom: "1rem",
            }}
          >
            <li>Many years of experience, warm and friendly personnel</li>
            <li>
              Multiple good reviews affrims our good, effective and successful
              techniques
            </li>
            <li>Trust brands with hundreds of customers and testimonials</li>
          </ul>
          <p>
            We specialize in the art of miro corrective imaging without using
            needles. 无针微整形如何让自己便加自信与光彩 ✨
            You can trust us with all your beauty needs
          </p>
        </AccordionItem>

        <AccordionItem title="Non Invasive V-Jet Treatments">
          <h4 style={{ fontWeight: "600", marginBottom: "0.5rem" }}>
            Benefits of V-Jet:
          </h4>
          <ul
            style={{
              listStyleType: "disc",
              paddingLeft: "1.25rem",
              marginBottom: "1rem",
            }}
          >
            <li>Long-lasting results</li>
            <li>Little to no downtime</li>
            <li>Non-invasive procedure</li>
          </ul>
          <p>
            Our V-Jet line of treatments is recommended for patients who want
            long-lasting results with little to no downtime. Enquire with us
            today to find out how you can benefit from our V-Jet treatments. 💌
          </p>
        </AccordionItem>

        <AccordionItem title="Comfortable environment for you to relax">
          <h4 style={{ fontWeight: "600", marginBottom: "0.5rem" }}>
            Key Benefits:
          </h4>
          <ul
            style={{
              listStyleType: "disc",
              paddingLeft: "1.25rem",
              marginBottom: "1rem",
            }}
          >
            <li>100% fully air-conditioned facility</li>
            <li>Soft and plush mattresses for you to relax whist we do our work</li>
            <li>Dark and soft ambience for you to relax</li>
            <li>Affordable</li>
            <li>No GST, No Hard Selling, No Hidden Fees</li>
            <li>Multiple locations for your own convenience</li>
          </ul>
          <p>
            We accept $100 CDC vouchers here! Due to high demand, this is
            strictly by appointment only! Message us to book your slot now!
          </p>
          <p>
            We are located at 85A Lor 4 Toa Payoh, #01-304D, Singapore 311085 and at Blk 350 Jurong East Ave 1 #01-1239 Level, #2, 600350
          </p>
        </AccordionItem>
      </div>
    </div>
  );
};

export default CarOptionsSection;
