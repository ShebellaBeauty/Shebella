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
        <AccordionItem title="AirJet Treatments">
          <h4 style={{ fontWeight: "600", marginBottom: "0.5rem" }}>
            Benefits of AirJet:
          </h4>
          <ul
            style={{
              listStyleType: "disc",
              paddingLeft: "1.25rem",
              marginBottom: "1rem",
            }}
          >
            <li>Pain-free solution for aesthetic needs</li>
            <li>Minimally-invasive yet highly-effective</li>
            <li>Skin rejuvenation, wrinkle reduction, acne scar removal</li>
            <li>No needles required</li>
          </ul>
          <p>
            Need a cosmetic tuneup but afraid of needles? Our revolutionary
            AirJet treatments provide a pain-free solution for all your
            aesthetic needs. Minimally-invasive yet highly-effective, AirJet
            utilizes pneumatic spray technology to help with skin rejuvenation,
            wrinkle reduction, or acne scar removal. No needles required. ✨
          </p>
        </AccordionItem>

        <AccordionItem title="V-Jet Treatments">
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
            <li>FDA-approved and safe</li>
          </ul>
          <p>
            Our V-Jet line of treatments is recommended for patients who want
            long-lasting results with little to no downtime. Enquire with us
            today to find out how you can benefit from our V-Jet treatments. 💌
          </p>
        </AccordionItem>

        <AccordionItem title="Non-Invasive Solutions">
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
            <li>100% Safe — FDA-Approved Procedure</li>
            <li>Non-Invasive — Needleless</li>
            <li>Quick Process within 60 minutes</li>
            <li>Short Downtime — 2-3 days</li>
            <li>Affordable</li>
            <li>No GST, No Hard Selling, No Hidden Fees</li>
          </ul>
          <p>
            Feeling unsatisfied with your current appearance? Discover a
            non-invasive solution to transform your facial features such as nose
            lifting, laugh line filling, and lip enhancement and boost your
            confidence! ✨ Our accredited non-invasive procedure offers minimal
            downtime and long-lasting effects within a few sessions. 💆🏻‍♀️
            ❗️Please note that individual results may vary❗️
          </p>
          <p>
            We accept $100 CDC vouchers here! Due to high demand, this is
            strictly by appointment only! Message us to book your slot now!
          </p>
        </AccordionItem>
      </div>
    </div>
  );
};

export default CarOptionsSection;
