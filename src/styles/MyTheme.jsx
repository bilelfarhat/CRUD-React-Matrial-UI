const { grey } = require("@mui/material/colors");

const getDesignTokens = (mode) => ({
    palette: {
        // @ts-ignore
        mode,
        ...(mode === 'light'
          ? {
              // palette values for light mode
              bilel:{
                main:"#647488"
              },
              farhat:{
                main:grey[300]
              }
  
              
            }
          : {
              // palette values for dark mode
              bilel:{
                main:"teal"
              },
              farhat:{
                main:grey[800]
              }
            
              }),
              
          },      
  });
  export default getDesignTokens;

  