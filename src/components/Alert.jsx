import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
export default function Alerts({alerts}) {
    return (
        <Stack sx={{
            width: "100%",
            position:"absolute",
            top: 0,
            left: alerts.error || alerts.success? "50%": "-1000000px",
            transform: "translateX(-50%)",
        }}
               spacing={2} >
            {alerts.error &&
            <Alert severity="error">
                             Ошибка: { alerts.error}
            </Alert>
            }
            {
                alerts.success && <Alert severity="success">
                    {alerts.success}
                </Alert>
            }
        </Stack>
    );
}