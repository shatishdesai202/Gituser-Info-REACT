import React from 'react';
import './Info.css'
import { Card, CardContent, Typography } from '@material-ui/core';

function Info({icon, label, value, className}) {

    return (
        <div className="info">
            <Card className="info__card">

                <CardContent className="info__information">

                    <Typography className={`${className} p-2`}>
                        {icon}
                    </Typography>

                    <Typography className="info__values">
                        <div className="info__value">
                            {value} 
                        </div>
                    
                        <div className="info__label"> 
                            {label}
                        </div>
                    </Typography>
                    
                </CardContent>
            
            </Card>

        </div>
    )
}

export default Info
