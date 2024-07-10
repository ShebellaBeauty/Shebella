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
    flexDirection: "column",
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
    background: "#051D40",
    padding: "10%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };

  const subContent1 = {
    marginTop: "3%",
    background: "#051D40",
    padding: "10%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };


  const reviewImg = {
    width: "100%",
  }

  return (
    <div style={containerWrapper} className="contact">
      <h1>Contact Information</h1>
      <div style={bodyStyle} className="contactBody">
        <div style={subContent} className="subcontent">
          <p className="pstyle">Phone: 6440 5131</p>
          <p className="pstyle">Email: richard@lemotor.com.sg</p>
          <p className="pstyle">Richard Wong (Purchaser): <br></br> 9769 2303</p>
          <p className="pstyle">Alan Sim (Sales) <br></br>9821 1739</p>
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
