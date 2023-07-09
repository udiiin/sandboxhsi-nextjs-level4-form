import { createStyles, rem } from "@mantine/core";

const stepperClass = createStyles((theme) => ({
  root: {
    height: "100%",
  },
  content: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  separator: {
    height: rem(6),
    borderRadius: rem(6),
    backgroundColor: theme.colors.whisper[0],
    "&:after": {
      content: '""',
      display: "block",
      height: rem(6),
      backgroundColor: theme.colors.blueribbon[0],
      borderRadius: rem(20),
      transition: "all 0.3s ease-in",
      width: "0",
    },
    "[data-progress] + &:after": {
      width: "50%",
    },
    "[data-completed] + &:after": {
      width: "100%",
    },
  },
  separatorActive: {
    backgroundColor: theme.colors.whisper[0],
  },
  stepIcon: {
    color: theme.colors.waterloo[0],
    "&[data-progress]": {
      color: "white",
      backgroundColor: theme.colors.blueribbon[0],
    },
  },
  stepCompletedIcon: {
    transitionProperty: "none !important",
  },
}));

const inputClass = createStyles((theme) => ({
  root: {
    display: "grid",
    gridTemplateRows: "40px 62px 40px",
    "&:focus-within": {
      label: {
        color: theme.colors.blueribbon[0],
      },
    },
  },
  wrapper: {
    gridRow: 2,
  },
  input: {
    padding: "20px 50px 20px 20px",
    borderColor: theme.colors.whisper[0],
    color: theme.colors.violet[0],
    boxShadow: "0px 2px 6px rgba(19, 18, 66, 0.07)",
    "&::placeholder": {
      color: theme.colors.waterloo[0],
    },
    "&:focus": {
      border: "2px solid " + theme.colors.blueribbon[0] + " !important",
    },
    "&:autofill": {
      backgroundColor: "white",
      color: theme.colors.violet[0] + " !important",
      WebkitTextFillColor: theme.colors.violet[0] + " !important",
      boxShadow: "0px 0px 0px 1000px inset white",
    },
    "&[data-invalid]": {
      "&::placeholder": {
        color: theme.colors.waterloo[0],
      },
      color: theme.colors.violet[0],
      borderColor: theme.colors.electricviolet[0],
      borderWidth: rem(2),
    },
  },
  rightSection: {
    height: rem(50),
    width: rem(36),
    right: rem(5),
    img: {
      maxWidth: rem(20),
      maxHeight: rem(28),
      objectFit: "contain",
    },
  },
  label: {
    color: theme.colors.violet[0],
    fontWeight: 500,
    gridRow: 1,
  },
  error: {
    color: theme.colors.electricviolet[0],
    fontFamily: "var(--font-dmsans)",
    fontWeight: 400,
    gridRow: 3,
    "+ label": {
      color: theme.colors.electricviolet[0],
    },
  },
}));

const serviceClass = createStyles((theme) => ({
  "radiogroup-root": {
    display: "grid",
    gridTemplateColumns: "repeat(2,minmax(0,1fr))",
    gridTemplateRows: "1fr 1fr",
    gap: rem(30),
  },
  root: {
    "&[data-checked]": {
      label: {
        outline: "2px solid " + theme.colors.blueribbon[0],
      },
    },
  },
  body: {
    display: "grid",
    position: "relative",
    gridTemplateRows: "1fr",
  },
  inner: {
    display: "flex",
    position: "absolute",
    left: rem(20),
    alignSelf: "center",
    gridRow: 1,
    width: rem(66),
    height: rem(66),
    borderRadius: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(74, 58, 255, 0.15)",
    filter: "drop-shadow(0 0 10px rgba(74,58,255,0.5))",
    figure: {
      maxWidth: rem(38),
      width: "auto",
      margin: "0 auto",
    },
  },
  radio: {
    display: "none",
  },
  labelWrapper: {
    gridRow: 1,
  },
  label: {
    height: rem(118),
    width: rem(284),
    display: "grid",
    alignItems: "center",
    fontFamily: "var(--font-dmsans)",
    fontWeight: 700,
    fontSize: rem(18),
    cursor: "pointer",
    padding: "0 20px 0 100px",
    boxSizing: "border-box",
    border: "1px solid " + theme.colors.whisper[0],
    borderRadius: rem(16),
    boxShadow: "0 2px 6px rgba(19,18,66,0.07)",
  },
}));

const budgetClass = createStyles((theme) => ({
  "radiogroup-root": {
    display: "grid",
    gridTemplateColumns: "repeat(2,minmax(0,1fr))",
    gridTemplateRows: "1fr 1fr",
    gap: rem(30),
  },
  root: {
    "&[data-checked]": {
      label: {
        outline: "2px solid " + theme.colors.blueribbon[0],
      },
    },
  },
  body: {
    display: "grid",
    position: "relative",
    gridTemplateRows: "1fr",
  },
  inner: {
    display: "flex",
    position: "absolute",
    left: rem(20),
    alignSelf: "center",
    gridRow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  radio: {
    cursor: "pointer",
    backgroundColor: "white",
    border: "1.5px solid " + theme.colors.mischka[0],
    boxShadow: "inset 0px -3px 8px rgba(20, 20, 43, 0.07)",
    "&:checked": {
      backgroundColor: theme.colors.blueribbon[0],
      borderColor: theme.colors.blueribbon[0],
    },
  },
  labelWrapper: {
    gridRow: 1,
  },
  label: {
    height: rem(118),
    width: rem(284),
    display: "grid",
    alignItems: "center",
    fontFamily: "var(--font-dmsans)",
    fontWeight: 700,
    fontSize: rem(18),
    cursor: "pointer",
    padding: "0 20px 0 56px",
    boxSizing: "border-box",
    border: "1px solid " + theme.colors.whisper[0],
    borderRadius: rem(16),
    boxShadow: "0 2px 6px rgba(19,18,66,0.07)",
  },
}));

export { stepperClass, budgetClass, inputClass, serviceClass };
