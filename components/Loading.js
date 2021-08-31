import { CircularProgress } from "@material-ui/core";
// import { whatsapplogo } from "../public/whatsapp-logo.png";

function Loading() {
  return (
    <center style={{ display: "grid", placeItems: "center", height: "100vh" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c543.png"
          alt=""
          height={200}
          style={{ marginBottom: 10 }}
        />
        <CircularProgress color="secondary" />
      </div>
    </center>
  );
}

export default Loading;
