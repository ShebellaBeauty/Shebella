import reviewUs from "./Assets/reviewUs.webp";
function ContactInfo() {
  const containerWrapper = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    textAlign: "center",
    flexDirection: "column",
    marginTop: "10%",
    marginBottom: "3%",
    overflow: "hidden",
  };

  const bodyStyle = {
    width: "90%",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    color: "white",
    overflow: "hidden",
    gridGap: "4%",
  };

  const subContent = {
    marginTop: "3%",
    background: "#512573",
    padding: "10%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };

  const subContent1 = {
    marginTop: "3%",
    background: "#512573",
    padding: "10%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };

  const reviewImg = {
    width: "100%",
  };

  return (
    <div style={containerWrapper} className="contact">
      <h1>Contact Information</h1>
      <div style={bodyStyle} className="contactBody">
        <div style={subContent} className="subcontent">
          <p className="pstyle">Phone: 92248800</p>
          <p className="pstyle">
            Toa Payoh branch <br></br>
            <br></br>
            85A Lor 4 Toa Payoh, #01-304D, Singapore 311085
          </p>
          <p className="pstyle">
            Jurong Branch <br></br>
            Blk 350 Jurong East Ave 1 #01-1239 Level, #2, 600350
          </p>
        </div>

        <a href="https://g.page/r/CQJmRZAPZC1GEBM/review">
          <div style={subContent1} className="subcontent">
            <img src={reviewUs} style={reviewImg} alt="reviewUs" />
          </div>
        </a>
      </div>
    </div>
  );
}

export default ContactInfo;
