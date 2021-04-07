import React, { useState, useEffect } from 'react';
import { ApiClient } from 'admin-bro';
import { Box } from '@admin-bro/design-system';
import styled from 'styled-components';

const api = new ApiClient();

const Dashboard = () => {
    const [data, setData] = useState({})

    useEffect(() => {
        api.getDashboard().then((response) => {
            setData(response.data)
        })
    }, [])

    const CoverBox = styled(Box)`
        background-color: rgba(244, 114, 182);
        background-size: cover;
        color: white;
        text-align: center;
    `
    return (
        <CoverBox height='40%'>
            Welcome Admin
        </CoverBox>
    )
}

export default Dashboard