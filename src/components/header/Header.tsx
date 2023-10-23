import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import logo from '../../assets/ufabc_logo.png';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import { Grid } from '@mui/material';

const pages = [
  { name: 'Integrantes', link: '/projeto-csm-2023/#/integrantes' },
  { name: 'Relatórios', link: '/projeto-csm-2023/#/relatorios' },
  { name: 'Projeto Extensionista', link: '/projeto-csm-2023/#/extensao' },
];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleMenuOptionClick = (link: string) => {
    window.location.replace(link);
  }

  return (
    <AppBar position="static" style={{background: '#5c904f'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Grid container>

            <Grid item xs={1} sm={1} alignItems='center'>
              <img src={logo} alt='logo' width='50px' height='50px' />
            </Grid>

            <Grid item xs={7} sm={7}>
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="#app-bar-with-responsive-menu"
                sx={{
                  mr: 6,
                  ml: 2,
                  display: { xs: 'none', md: 'flex' },
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
                  height: '100%',
                  alignItems: 'center',
                }}
              >
                Codificação de Sinais Digitais
              </Typography>
            </Grid>

            <Grid item xs={4} sm={4}>
              <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, flexDirection:'row-reverse'}}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: 'block', md: 'none' },
                  }}
                >
                  {pages.map((page) => (
                    <MenuItem key={page.name} onClick={() => handleMenuOptionClick(page.link)}>
                      <Typography textAlign="center">{page.name}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>

              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                {pages.map((page) => (
                  <Link
                    key={page.name}
                    href={page.link}
                    sx={{ m: 2, color: 'white', display: 'block', textDecoration: 'none' }}
                  >
                    {page.name}
                  </Link>
                ))}
              </Box>
            </Grid>

          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
