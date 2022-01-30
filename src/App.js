import { useState } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import axios from 'axios';

const App = () => {
  const [state, setState] = useState();
  const [success, setSuccess] = useState();

  async function handleSubmit(event) {
    event.preventDefault();
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    const data = new FormData(event.currentTarget);
    const body = JSON.stringify({
      "name": data.get("name"),
      "email": data.get("email"),
      "password": data.get("password"),
      "occupation": data.get("occupation"),
      "state": data.get("state"),
    });
    const res = await axios.post("https://frontend-take-home.fetchrewards.com/form", body, config);
    if (res.status === 200) {
      setSuccess(true);
    }
  };

  const handleChange = (e) => {
    setState(e.target.value)
  }

  return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            {!success && <>User Creation</>}
            {success && <>User Created Successfully</>}
          </Typography>
          {!success && <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              name="name"
              label="Name"
              type="text"
              id="name"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="email"
              label="Email"
              type="email"
              id="email"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="occupation"
              label="Occupation"
              type="text"
              id="occupation"
            />
            <InputLabel id="select-state-label">State</InputLabel>
            <Select
              required
              labelId="select-state-label"
              id="select-state"
              value={state ? state : ""}
              label="text"
              onChange={handleChange}
            >
              <MenuItem value="AL">AL</MenuItem>
              <MenuItem value="AK">AK</MenuItem>
              <MenuItem value="AZ">AZ</MenuItem>
              <MenuItem value="AR">AR</MenuItem>
              <MenuItem value="CA">CA</MenuItem>
              <MenuItem value="CO">CO</MenuItem>
              <MenuItem value="CT">CT</MenuItem>
              <MenuItem value="DE">DE</MenuItem>
              <MenuItem value="FL">FL</MenuItem>
              <MenuItem value="GA">GA</MenuItem>
              <MenuItem value="HI">HI</MenuItem>
              <MenuItem value="ID">ID</MenuItem>
              <MenuItem value="IL">IL</MenuItem>
              <MenuItem value="IN">IN</MenuItem>
              <MenuItem value="IA">IA</MenuItem>
              <MenuItem value="KS">KS</MenuItem>
              <MenuItem value="KY">KY</MenuItem>
              <MenuItem value="LA">LA</MenuItem>
              <MenuItem value="ME">ME</MenuItem>
              <MenuItem value="MD">MD</MenuItem>
              <MenuItem value="MA">MA</MenuItem>
              <MenuItem value="MI">MI</MenuItem>
              <MenuItem value="MN">MN</MenuItem>
              <MenuItem value="MS">MS</MenuItem>
              <MenuItem value="MO">MO</MenuItem>
              <MenuItem value="MT">MT</MenuItem>
              <MenuItem value="NE">NE</MenuItem>
              <MenuItem value="NV">NV</MenuItem>
              <MenuItem value="NH">NH</MenuItem>
              <MenuItem value="NJ">NJ</MenuItem>
              <MenuItem value="NM">NM</MenuItem>
              <MenuItem value="NY">NY</MenuItem>
              <MenuItem value="NC">NC</MenuItem>
              <MenuItem value="ND">ND</MenuItem>
              <MenuItem value="OH">OH</MenuItem>
              <MenuItem value="OK">OK</MenuItem>
              <MenuItem value="OR">OR</MenuItem>
              <MenuItem value="PA">PA</MenuItem>
              <MenuItem value="RI">RI</MenuItem>
              <MenuItem value="SC">SC</MenuItem>
              <MenuItem value="SD">SD</MenuItem>
              <MenuItem value="TN">TN</MenuItem>
              <MenuItem value="TX">TX</MenuItem>
              <MenuItem value="UT">UT</MenuItem>
              <MenuItem value="VT">VT</MenuItem>
              <MenuItem value="VA">VA</MenuItem>
              <MenuItem value="WA">WA</MenuItem>
              <MenuItem value="WV">WV</MenuItem>
              <MenuItem value="WI">WI</MenuItem>
              <MenuItem value="WY">WY</MenuItem>
            </Select>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Create User
            </Button>
          </Box>}
        </Box>
      </Container>
  );
}

export default App;