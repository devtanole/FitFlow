import { type FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { User } from './UserContext';
import { TextField, Button } from '@mui/material';

export function RegistrationForm() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      setIsLoading(true);
      const formData = new FormData(event.currentTarget);
      const userData = Object.fromEntries(formData);
      const req = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
      };
      const res = await fetch('/api/auth/sign-up', req);
      if (!res.ok) {
        throw new Error(`fetch Error ${res.status}`);
      }
      const user = (await res.json()) as User;
      console.log('Registered', user);
      console.log(
        `You can check the database with: psql -d userManagement -c 'select * from users'`
      );
      alert(
        `Successfully registered ${user.username} as userId ${user.userId}.`
      );
      navigate('/auth/sign-in');
    } catch (err) {
      alert(`Error registering user: ${err}`);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="p-3 container">
      <form onSubmit={handleSubmit}>
        <TextField
          required
          name="username"
          label="Username"
          fullWidth
          margin="normal"
        />

        <TextField
          required
          name="password"
          label="Password"
          type="password"
          fullWidth
          margin="normal"
        />

        <TextField
          required
          name="fullName"
          label="Full Name"
          fullWidth
          margin="normal"
        />

        <TextField
          required
          name="weight"
          label="Weight (in kg)"
          type="number"
          fullWidth
          margin="normal"
        />

        <TextField
          required
          name="location"
          label="Location"
          fullWidth
          margin="normal"
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          disabled={isLoading}
          sx={{ mt: 2 }}>
          Sign Up
        </Button>
      </form>

      <Link to="/auth/sign-in" style={{ display: 'block', marginTop: '1rem' }}>
        Already have an account? Sign In
      </Link>
    </div>
  );
}
