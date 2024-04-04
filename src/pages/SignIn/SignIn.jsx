import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { IconButton, InputAdornment, Stack } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import logo from "./../../assets/Avatar/userPanelicon.png";
import * as Yup from "yup";
import { Formik, Form, Field } from "formik";

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

// TODO remove, this demo shouldn't need to reset the theme.

// Create a theme with custom background color
const defaultTheme = createTheme({
  palette: {
    background: {
      default: "rgb(56, 158, 127)", // Change this color to your desired background color
    },
  },
});

function Signin() {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleSubmit = (event, { setSubmitting }) => {
    // const data = new FormData(event.currentTarget);
    // console.log({
    //   email: data.get("email"),
    //   password: data.get("password"),
    // });
    // setTimeout(() => {
    //   alert("Form submitted successfully!");
    //   setSubmitting(false);
    // }, 1000);
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        sx={{
          height: "100%",
          padding: "20px",
        }}
      >
        <Paper
          elevation={6}
          sx={{
            //marginTop: 5,
            padding: 3,
            maxWidth: 500,
            backgroundColor: "#ddeee4",
            borderRadius: "20px",
          }}
        >
          <Stack spacing={3}>
            <grid>
              <Avatar
                sx={{
                  width: 50,
                  height: 50,
                  m: "auto",
                  bgcolor: "secondary.main",
                  textAlign: "center",
                  mb: 1, // Add margin bottom
                }}
              ></Avatar>
              <Typography variant="h5" align="center" sx={{ mb: 1 }}>
                {" "}
                {/* Add margin bottom */}
                Sign In
              </Typography>
            </grid>
            <Formik
              initialValues={{
                email: "",
                password: "",
                remember: false,
              }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting, errors, touched }) => (
                <Form>
                  <Box component="div" noValidate sx={{ mt: 1 }}>
                    <Field
                      as={TextField}
                      margin="normal"
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                      autoFocus
                      variant="standard"
                      error={touched.email && Boolean(errors.email)}
                      helperText={touched.email && errors.email}
                    />
                    <Field
                      as={TextField}
                      margin="normal"
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type={showPassword ? "text" : "password"}
                      id="password"
                      autoComplete="current-password"
                      variant="standard"
                      error={touched.password && Boolean(errors.password)}
                      helperText={touched.password && errors.password}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}
                            >
                              {showPassword ? (
                                <VisibilityOff />
                              ) : (
                                <Visibility />
                              )}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                    <FormControlLabel
                      control={<Checkbox value="remember" color="primary" />}
                      label="Remember me"
                    />
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Submitting..." : "Sign In"}
                    </Button>
                    <Grid container>
                      <Grid item xs>
                        <Link href="#" variant="body2">
                          Forgot password?
                        </Link>
                      </Grid>
                      <Grid item>
                        <Link href="#" variant="body2">
                          {"Don't have an account? Sign Up"}
                        </Link>
                      </Grid>
                    </Grid>
                  </Box>
                </Form>
              )}
            </Formik>
          </Stack>
        </Paper>
      </Grid>
    </div>
  );
}

export default Signin;
