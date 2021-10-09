import * as React from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';
export default function Alerts({alerts}) {
    return (
        <Stack sx={{
            maxWidth: "500px",
            width: "100%",
            position:"absolute",
            bottom: 0,
            left: alerts.error || alerts.success? "50%": "-1000000px",
            transform: "translateX(-50%)",
            transition: "all .8s" ,
        }}
               spacing={2} >
            {alerts.error &&
            <Alert severity="error">
                <AlertTitle>Ошибка</AlertTitle>
                {alerts.error}
            </Alert>
            }
            {
                alerts.success && <Alert severity="success">
                    <AlertTitle>Успех</AlertTitle>
                    {alerts.success}
                </Alert>
            }
        </Stack>
    );
}