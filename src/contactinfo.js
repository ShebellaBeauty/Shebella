import reviewUs from "./Assets/reviewUs.jpg";
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

        <a href="https://www.google.com/localservices/prolist?g2lbs=AOHF13k-3quz4b9AF-DgH6fvWAigB8WvEUR9x_MiITQvn16vggqaogPag7pLP_2o9GFJQzPVp5h2fvdkdBn7cuHYykw7wFmnxpVUyKiY21VfU3kLi7TLHxU%3D&hl=en-SG&gl=sg&cs=1&ssta=1&q=shebella%20beauty&oq=shebella%20beauty&slp=MgBSAggCYAB6tgFDZzl6YUdWaVpXeHNZU0JpWldGMWRIbEk2cV9MeS1XQWdJQUlXaUVRQUJBQkdBQVlBU0lQYzJobFltVnNiR0VnWW1WaGRYUjVLZ1lJQWhBQUVBR1NBUXhpWldGMWRIbGZjMkZzYjI2cUFUZ1FBVElmRUFFaUc5ampzcWszZ2w3bExhcmRpNDh0UXZzakx1N2dlMkJLLVZhNDJUSVRFQUlpRDNOb1pXSmxiR3hoSUdKbFlYVjBlUZIBHAoLL2cvMXRkcjVwX2IKDS9nLzExc21yZGptM2Q%3D&src=2&spp=CgsvZy8xdGRyNXBfYjqYAVdpRVFBQkFCR0FBWUFTSVBjMmhsWW1Wc2JHRWdZbVZoZFhSNUtnWUlBaEFBRUFHU0FReGlaV0YxZEhsZmMyRnNiMjZhQVFDcUFUZ1FBVElmRUFFaUc5ampzcWszZ2w3bExhcmRpNDh0UXZzakx1N2dlMkJLLVZhNDJUSVRFQUlpRDNOb1pXSmxiR3hoSUdKbFlYVjBlUT09&serdesk=1&lrlstt=1720683429922&ved=2ahUKEwjyotWBvZ6HAxXBVmwGHREQDJgQvS56BAgaEAE&scp=ChFnY2lkOmJlYXV0eV9zYWxvbhIzEhIJpVt39rMi2jERD2-YBlmmdLUiBUJlZG9rKhQNoaXGABVyTO09HTKyzQAlOb33PTABGg9zaGViZWxsYSBiZWF1dHkiD3NoZWJlbGxhIGJlYXV0eSoMQmVhdXR5IFNhbG9u">
          <div style={subContent1} className="subcontent">
            <img src={reviewUs} style={reviewImg} alt="reviewUs" />
          </div>
        </a>
      </div>
    </div>
  );
}

export default ContactInfo;
