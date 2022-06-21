import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import HeroImg from './../assets/images/banner.jpg'

const HeroBanner = () => {
    return (
        <Box
            sx={{
                mt: { lg: '150px', xs: '70px' },
                ml: { sm: '50px' }
            }}
            position="relative"
            p="20px"
        >
            <Typography
                color="#FF2625"
                fontWeight={600}
                fontSize="26px"
            >
                Fitness Master
            </Typography>
            <Typography
                fontWeight={700}
                sx={{
                    fontSize: { lg: '44px', xs: '40px' }
                }}
                mb="23px"
                mt="30px"
            >
                No Days <br /> Off
            </Typography>
            <Typography
                fontSize="22px"
                lineHeight="35px"
                mb={4}
            >
                Check out most effective exercises
            </Typography>
            <Button
                variant="contained"
                color="error"
                sx={{
                    backgroundColor: '#ff2625'
                }}
                padding="10px"
            >Explore Exercises</Button>
            <Typography
                fontWeight={600}
                color="#ff2625"
                sx={{
                    opacity: 0.1,
                    display: { lg: 'block', sm: 'none' }
                }}
                fontSize='200px'
            >
                Exercise
            </Typography>
            <img src={HeroImg} alt="bannerImg"
                className='hero-banner-img' />
        </Box>
    )
}

export default HeroBanner