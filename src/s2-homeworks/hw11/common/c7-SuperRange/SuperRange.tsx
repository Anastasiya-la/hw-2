import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{
                width: 147,
                color: '#00CC22',
                '& .MuiSlider-thumb': {
                    width: 18,
                    height: 18,
                    background: '#FFFFFF',
                    border: '1px solid #00CC22'
                }
                // стили для слайдера // пишет студент

            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
