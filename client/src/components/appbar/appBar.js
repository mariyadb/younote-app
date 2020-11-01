import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {Menu, MenuItem, AppBar, Toolbar, IconButton, Typography} from '@material-ui/core';
import {useAuth} from '../auth/auth';

const CustomAppBar = () => {
    const [souldOpenMenu, setOpenMenu] = useState(false);
    const[menuAnchor, setMenuAnchor] = useState(null);
}