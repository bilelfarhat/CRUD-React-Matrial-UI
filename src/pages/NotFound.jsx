import { Box, Typography, useTheme } from '@mui/material'


function NotFound() {
  const theme =useTheme();
  return (
    <Box>
      <Typography color={theme.palette.error.main} variant='h4'>Not Found</Typography>
    </Box>
  )
}

export default NotFound