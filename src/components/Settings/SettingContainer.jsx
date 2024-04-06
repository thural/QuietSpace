import React, { useState } from "react";
import { Container, Tabs, Text, Title } from "@mantine/core";
import { PiArrowBendDoubleUpLeft, PiArrowClockwise, PiArrowsClockwise, PiLock, PiLockBold, PiTag, PiUserCircle, PiXCircle } from "react-icons/pi";

import styles from "./styles/settingContainerStyles";
import { useLocation, useNavigate } from "react-router-dom";

function SettingsContainer() {


    const [value, setValue] = useState('profile');

    const navigate = useNavigate();

    const pathName = useLocation().pathname;

    const redirectToPage = (buttonValue) => {
        setValue(buttonValue);
        navigate(buttonValue);
        console.log("pathName: ", pathName);
    };

    const classes = styles();

    return (
        <Container size="600px" style={{ marginTop: "1rem" }}>
            <Title>Settings</Title>

            <Tabs orientation="vertical" color="black" onChange={redirectToPage} defaultValue="profile" style={{ margin: '1rem 0' }}>
                <Tabs.List justify="center" grow>
                    <Tabs.Tab value="profile" leftSection={<PiUserCircle size={24} />}>
                        Profile
                    </Tabs.Tab>
                    <Tabs.Tab value="privacy" leftSection={<PiLock size={24} />}>
                        Privacy
                    </Tabs.Tab>
                    <Tabs.Tab value="mentions" leftSection={<PiTag size={24} />}>
                        Mentions
                    </Tabs.Tab>
                    <Tabs.Tab value="sharing" leftSection={<PiArrowsClockwise size={24} />}>
                        Sharing
                    </Tabs.Tab>
                    <Tabs.Tab value="replies" leftSection={<PiArrowBendDoubleUpLeft size={24} />}>
                        Replies
                    </Tabs.Tab>
                    <Tabs.Tab value="blocking" leftSection={<PiXCircle size={24} />}>
                        Blocking
                    </Tabs.Tab>
                </Tabs.List>


                <Tabs.Panel value="profile">
                    <Text ta="center">profile settings</Text>
                </Tabs.Panel>
                <Tabs.Panel value="privacy">
                    <Text ta="center">privacy settings</Text>
                </Tabs.Panel>
                <Tabs.Panel value="mentions">
                    <Text ta="center">mention settings</Text>
                </Tabs.Panel>
                <Tabs.Panel value="sharing">
                    <Text ta="center">sharing settings</Text>
                </Tabs.Panel>
                <Tabs.Panel value="replies">
                    <Text ta="center">profile settings</Text>
                </Tabs.Panel>
                <Tabs.Panel value="blocking">
                    <Text ta="center">blocking settings</Text>
                </Tabs.Panel>
            </Tabs>
        </Container>
    )
}

export default SettingsContainer