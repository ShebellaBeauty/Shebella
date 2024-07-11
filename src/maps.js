import React from "react";

function Maps() {
  const flexWrapper = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    width: "100%",
    height: "100%",
    marginTop: "10%",
    overflow: "hidden",
  };

  const addressStyle = {
    fontSize: "1.5em",
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    width: "100%",
  };

  const gridMaps = {
    width: "100%",
    height: "600px",
    overflow: "hidden",
    border: "0 !important",
  };
  return (
    <div>
      <div style={flexWrapper} className="maps">
        <h1>Locate Us!</h1>
        <b>
        </b>
        <div style={gridStyle} className="GridMaps">
          <div className="grid1maps">
            <iframe
              style={{ ...gridMaps, border: "none" }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1185.8532956213785!2d103.73154264208202!3d1.3449473294522092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da3d068cc5561f%3A0x7be24b2708d43a14!2sShebella%20Beauty%20%40%20Jurong!5e0!3m2!1sen!2ssg!4v1720681227001!5m2!1sen!2ssg"
              referrerPolicy="no-referrer-when-downgrade"
              title="Map 1"
            ></iframe>
          </div>
          <div className="grid1maps">
            <iframe
              style={{ ...gridMaps, border: "none" }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.733180427514!2d103.84929439999999!3d1.3363302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da1711cb76bafd%3A0xfc98d806d90e7f!2sShebella%20Beauty%20%40%20Toa%20Payoh!5e0!3m2!1sen!2ssg!4v1720681306411!5m2!1sen!2ssg"
              referrerPolicy="no-referrer-when-downgrade"
              title="Map 1"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Maps;