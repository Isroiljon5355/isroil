import { createStyles } from "@mantine/core"
const useStyles = createStyles((theme) => ({
  IconeBox: {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    backgroundColor: "#ec1839",
    color: "#fff",
    "&:hover": {
      transition: "all 0.3s",
      transform: "scale(1.2)",
    },
  },
  iconsBoxHeader: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "25px",
    fontSize: "",
  },
  homePages: {
    height: "85vh",
    display: "flex",
    justifyContent: "center",
    alignContent: "center",

    paddingTop: "100px",
  },
  homePageTitle: {
    textAlign: "center",
    fontSize: "37px",
    fontWeight: "700",
    marginTop: "20px",
  },
  homePageTexts: {
    textAlign: "center",
    fontSize: "27px",
    fontWeight: "500",
    marginTop: "-7px",
  },
}))
export default useStyles
