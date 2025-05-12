import { Outlet, Link, useNavigate } from 'react-router-dom';
import { useUser } from './useUser';
import { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
  Menu,
  MenuItem,
  IconButton,
} from '@mui/material';

export function Header() {
  const { user, handleSignOut } = useUser();
  const navigate = useNavigate();

  const [logoMenuAnchorEl, setLogoMenuAnchorEl] = useState<null | HTMLElement>(
    null
  );

  function handleLogout(): void {
    handleSignOut();
    navigate('/');
  }

  return (
    <>
      <AppBar position="sticky" sx={{ backgroundColor: 'white' }}>
        <Toolbar>
          <Container sx={{ display: 'flex', alignItems: 'center' }}>
            {user ? (
              <IconButton onClick={(e) => setLogoMenuAnchorEl(e.currentTarget)}>
                <img
                  src="/images/fitflow.jpg"
                  alt="fit flow weight lifting logo"
                  style={{ height: 50, width: 'auto' }}
                />
              </IconButton>
            ) : (
              <img
                src="/images/fitflow.jpg"
                alt="fit flow weight lifting logo"
                style={{ height: 50, width: 'auto' }}
              />
            )}

            {user && (
              <Menu
                anchorEl={logoMenuAnchorEl}
                open={Boolean(logoMenuAnchorEl)}
                onClose={() => setLogoMenuAnchorEl(null)}>
                <MenuItem
                  onClick={() => {
                    navigate(`/profile/${user.userId}`);
                    setLogoMenuAnchorEl(null);
                  }}>
                  View Profile
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    navigate('/');
                    setLogoMenuAnchorEl(null);
                  }}>
                  Home
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    navigate('/details/new');
                    setLogoMenuAnchorEl(null);
                  }}>
                  Post
                </MenuItem>
              </Menu>
            )}
            <Box
              sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
              <Typography
                variant="h4"
                sx={{
                  fontFamily: 'Poppins',
                  color: 'black',
                  textAlign: 'center',
                }}>
                Fit Flow
              </Typography>
            </Box>
            <div>
              {user ? (
                <Button color="primary" onClick={handleLogout}>
                  Logout
                </Button>
              ) : (
                <Link to="/auth/sign-in" style={{ textDecoration: 'none' }}>
                  <Button color="primary">Login</Button>
                </Link>
              )}
            </div>
          </Container>
        </Toolbar>
      </AppBar>

      <Outlet />
    </>
  );
}
