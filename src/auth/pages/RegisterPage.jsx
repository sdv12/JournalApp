import { Grid, TextField, Typography, Button, Link } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import { AuthLayout } from '../layout/AuthLayout'

export const RegisterPage = () => {
  return (
    <AuthLayout title='Register'>
        <form>
                    <Grid container>
                        <Grid item xs={ 12 } sx={{ mt: 2 }}>
                            <TextField 
                            label='Nombre Completo' 
                            type='text' 
                            placeholder='Nombre Completo' 
                            fullWidth
                            />
                        </Grid>

                        <Grid item xs={ 12 } sx={{ mt: 2 }}>
                            <TextField 
                            label='Contraseña' 
                            type='password' 
                            placeholder='contraseña' 
                            fullWidth
                            />
                        </Grid>

                        <Grid container spacing={ 2 } sx={{ mb: 2, mt: 1 }}>
                            <Grid item xs={ 12 } sm={ 6 }>
                                <Button variant='contained' fullWidth>
                                    Crear Cuenta
                                </Button>
                            </Grid>
                        </Grid>
                        
                        <Grid container direction='row' justifyContent='end'>
                            <Typography sx={{ mr: 1 }}>Tenes cuenta?</Typography>
                            <Link component={ RouterLink } color='inherit' to="/auth/login">
                            Crear una cuenta
                            </Link>
                            
                        </Grid>

                    </Grid>
                </form>
    </AuthLayout>

  )
}