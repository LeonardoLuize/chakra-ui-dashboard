import { IconButton } from '@chakra-ui/button';
import Icon from '@chakra-ui/icon';
import { Flex } from '@chakra-ui/layout';
import { useBreakpointValue } from '@chakra-ui/media-query';
import { RiMenuLine } from 'react-icons/ri';
import { useSidebarDrawer } from '../../contexts/SidebarDrawerContext';

import Logo from './Logo';
import NotificationNav from './NotificationNav';
import Profile from './Profile';
import SearchBox from './SearchBox';

export default function Header() {

    const { onOpen } = useSidebarDrawer();

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true
    })

    return (
        <Flex
            as="header"
            w="100%"
            maxWidth={1480}
            h="20"
            mx="auto"
            mt="4"
            align="center"
            px="6"
        >
            {!isWideVersion && (
                <IconButton
                    display="flex"
                    align="center"
                    justify="center"
                    aria-label="Open navigation"
                    icon={<Icon as={RiMenuLine} />}
                    fontSize="24"
                    variant="unstyled"
                    onClick={onOpen}
                    mr="2"
                >
                </IconButton>
            )}

            <Logo />
            {isWideVersion && (<SearchBox />)}

            <Flex
                align="center"
                ml="auto"
            >
                <NotificationNav />
                <Profile showProfileData={isWideVersion} />
            </Flex>
        </Flex>
    );
}