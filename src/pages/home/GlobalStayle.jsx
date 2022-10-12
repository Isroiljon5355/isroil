import { createStyles } from "@mantine/core"
const useStyles = createStyles((theme) => ({
  IconeBox: {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    border: "1px solid red",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    backgroundColor: "#ec1839",
    color: "#fff",
  },
  iconsBoxHeader: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "25px",
  },
  homePages: {
    height: "85vh",
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
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
