import React, { useState } from "react";

const AccordionItem = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{display: "flex", justifyContent:"center", alignItems:"center"}}>
      <div
        style={{
          marginTop: "5%",
          border: "1px solid #051d41",
          borderRadius: "0.5rem",
          overflow: "hidden",
          background: "#051d41",
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
            background: "#051d41",
            color: "white",
          }}
        >
          <span style={{ fontWeight: "600" }}>{title}</span>
          <span
            style={{
              transform: isOpen ? "rotate(45deg)" : "rotate(0)",
              transition: "transform 0.3s",
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
        Why Le Motor Enterprise
      </h1>

      <div>
        <AccordionItem title="Renting a Car in Singapore">
          <h4 style={{ fontWeight: "600", marginBottom: "0.5rem" }}>
            Benefits of Renting:
          </h4>
          <ul style={{ listStyleType: "disc", paddingLeft: "1.25rem", marginBottom: "1rem" }}>
            <li>Flexibility for short-term needs</li>
            <li>No long-term financial commitment</li>
            <li>Access to newer models</li>
            <li>Maintenance and insurance often included</li>
            <li>Ideal for tourists or temporary residents</li>
          </ul>
          <p>
            Renting a car in Singapore can be a great option if you need a vehicle for a short period or want to avoid the high costs of car ownership. It's particularly suitable for those who don't require a car daily or are unsure about their long-term transportation needs.
          </p>
        </AccordionItem>

        <AccordionItem title="Buying a Used Car in Singapore">
          <h4 style={{ fontWeight: "600", marginBottom: "0.5rem" }}>
            Advantages of Buying Used:
          </h4>
          <ul style={{ listStyleType: "disc", paddingLeft: "1.25rem", marginBottom: "1rem" }}>
            <li>Lower initial cost compared to new cars</li>
            <li>Avoid steep depreciation of new vehicles</li>
            <li>More affordable Certificate of Entitlement (COE)</li>
            <li>Wide variety of models available</li>
            <li>Potential for resale value</li>
          </ul>
          <p>
            Purchasing a used car in Singapore can be a wise financial decision. With the high cost of new vehicles and rapid depreciation, a well-maintained used car offers significant savings. It's an excellent option for those who need regular access to a vehicle and are looking for a balance between cost and ownership.
          </p>
        </AccordionItem>

        <AccordionItem title="Factors to Consider">
          <h4 style={{ fontWeight: "600", marginBottom: "0.5rem" }}>
            Key Considerations:
          </h4>
          <ul style={{ listStyleType: "disc", paddingLeft: "1.25rem", marginBottom: "1rem" }}>
            <li>Budget: Initial cost and long-term expenses</li>
            <li>Usage frequency: Daily commute vs. occasional use</li>
            <li>Duration of stay in Singapore</li>
            <li>Parking availability and costs</li>
            <li>Maintenance and potential repair costs</li>
            <li>Singapore's car ownership policies and COE system</li>
          </ul>
          <p>
            Whether you choose to rent or buy a used car in Singapore depends on your specific circumstances. Consider your budget, how often you'll need the car, and how long you plan to stay in Singapore. Also, factor in Singapore's unique car ownership policies, including the COE system, which can significantly impact the overall cost of owning a vehicle.
          </p>
        </AccordionItem>
      </div>
    </div>
  );
};

export default CarOptionsSection;