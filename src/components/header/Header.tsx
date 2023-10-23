import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import logo from '../../assets/ufabc_logo.png';

const pages = [
  { name: 'Integrantes', link: '/projeto-csm-2023/#/integrantes' },
  { name: 'Relatórios', link: '/projeto-csm-2023/#/relatorios' },
  { name: 'Projeto Extensionista', link: '/projeto-csm-2023/#/extensao' },
];

const ResponsiveAppBar = () => {
  return (
    <AppBar position="static" style={{background: '#5c904f'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img src={logo} alt='logo' width='50px' height='50px' />
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
            }}
          >
            Codificação de Sinais Digitais
          </Typography>
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
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
