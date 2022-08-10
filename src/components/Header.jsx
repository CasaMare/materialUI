import { AppBar, Badge, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { IconButton } from '@mui/material';
import { ShoppingBasket } from '@mui/icons-material';

export default function Header({handleCart, orderLen}) {
  return (
    <AppBar  position='static'>
        <Toolbar>
            <Typography
            variant='h6'
            component="span"
            sx={{ flexGrow:1 }}
            >
                MUI Shop
            </Typography>
            <IconButton
            color="inherit"
            onClick={handleCart}
            >
                <Badge
                    color="secondary"
                    badgeContent={orderLen}
                >
                    <ShoppingBasket/>
                </Badge>
            </IconButton>
        </Toolbar>
    </AppBar>
  )
}
